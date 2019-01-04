import { values } from 'mobx'
import { types as t } from 'mobx-state-tree'

const uuidv4 = () => {
  return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
    (c ^ (crypto as any).getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

export const Step = t.model('Step', {
  description: t.string
})

export type Step = typeof Step.Type;

export const Item = t.model('Item', {
  id: t.identifier,
  name: t.string,
  imageUrl: t.string,
  listId: t.string,
  steps: t.array(Step)
})

export type Item = typeof Item.Type;

export const ItemStore = t.model('ItemStore', {
  items: t.map(Item)
})
.views((self: any) => ({
  get list(): Item[] {
    return values(self.items) as Item[]
  },
  byListId(listId: string): Item[] {
    return values(self.items).filter((item: Item) => item.listId === listId) as Item[]
  }
}))
.actions((self: any) => ({
  create(name: string, imageUrl: string, listId: string, steps: Step[]): void {
    self.items.put({ id: uuidv4(), name: name, imageUrl: imageUrl, listId: listId, steps: steps })
  }
}))

export type ItemStore = typeof ItemStore.Type;
