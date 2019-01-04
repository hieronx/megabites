import { values } from 'mobx'
import { types as t } from 'mobx-state-tree'

const uuidv4 = () => {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
      (c ^ (crypto as any).getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

export const List = t.model('List', {
    id: t.identifier,
    name: t.string
})

export type List = typeof List.Type;

export const ListStore = t.model('ListStore', {
  lists: t.map(List)
})
.views((self: any) => ({
  get list(): List[] {
    return values(self.lists) as List[]
  },
  byListId(listId: string): List[] {
    return values(self.lists).filter((list: List) => list.id === listId) as List[]
  }
}))
.actions((self: any) => ({
  create(name: string): string {
    const newListId = uuidv4()
    self.lists.put({ id: newListId, name: name })
    return newListId
  }
}))

export type ListStore = typeof ListStore.Type;
