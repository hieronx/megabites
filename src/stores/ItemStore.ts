import { values } from 'mobx'
import { types as t } from 'mobx-state-tree'

const uuidv4 = () => {
  return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
    (c ^ (crypto as any).getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

export const Step = t.model('Step', {
  description: t.string,
  imageUrl: t.maybe(t.string),
  expandedSteps: t.optional(t.array(t.late(() => Step)), [])
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
  },
  getStep(itemId: string, stepIndex: number): Step {
    return self.items.has(itemId) && self.items.get(itemId).steps.length >= stepIndex ? self.items.get(itemId).steps[stepIndex] : undefined
  }
}))
.actions((self: any) => ({
  create(name: string, imageUrl: string, listId: string, steps: Step[]): void {
    const newItemId = uuidv4()
    self.items.put({ id: newItemId, name: name, imageUrl: imageUrl, listId: listId, steps: steps })
    return newItemId
  },

  expandStep(itemId: string, stepIndex: number) {
    const item = self.items.get(itemId)
    if (item) {
      if (item.steps[stepIndex] && item.steps[stepIndex].expandedSteps.length > 0) {
        console.log(item.steps.map((step: Step) => step.description))
        const copiedSteps = item.steps[stepIndex].expandedSteps.map((step: Step) => JSON.parse(JSON.stringify(step)))
        item.steps.splice(stepIndex, 1, ...copiedSteps)
        console.log(item.steps.map((step: Step) => step.description))
      }
    }
  }
}))

export type ItemStore = typeof ItemStore.Type;
