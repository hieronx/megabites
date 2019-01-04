import { types as t, getEnv } from 'mobx-state-tree';

import { ListStore } from './ListStore'
import { ItemStore, Step } from './ItemStore'

const pastaAglioEOlioSteps: Step[] = [
    Step.create({ description: 'Bring a large pot of lightly salted water to a boil.' }),
    Step.create({ description: 'Cook spaghetti in the boiling water, stirring occasionally until cooked through but firm to the bite, about 12 minutes.' }),
    Step.create({ description: 'Drain and transfer to a pasta bowl.' }),
    Step.create({ description: 'Combine garlic and olive oil in a cold skillet.' }),
    Step.create({ description: 'Cook over medium heat to slowly toast garlic, about 10 minutes.' }),
    Step.create({ description: 'Reduce heat to medium-low when olive oil begins to bubble.' }),
    Step.create({ description: 'Cook and stir until garlic is golden brown, about another 5 minutes. Remove from heat.' }),
    Step.create({ description: 'Stir red pepper flakes, black pepper, and salt into the pasta.' }),
    Step.create({ description: 'Pour in olive oil and garlic, and sprinkle on Italian parsley and half of the Parmigiano-Reggiano cheese; stir until combined.' }),
    Step.create({ description: 'Serve pasta topped with the remaining Parmigiano-Reggiano cheese.' }),
    Step.create({ description: 'Enjoy!)'
];

export const RootStore = t.model('RootStore', {
    listStore: t.optional(ListStore, {
      lists: {}
    }),
    itemStore: t.optional(ItemStore, {
      items: {}
    }),
  })
  .views((self: any) => ({
  }))
  .actions((self: any) => ({
    afterCreate() {
        console.log('Root store created')

        const classicsListId = self.listStore.create('Classic pastas')
        self.itemStore.create('Spaghetti aglio e olio', 'https://s23209.pcdn.co/wp-content/uploads/2018/02/Aglio-e-OlioIMG_3194-360x360.jpg', classicsListId, [])
        self.itemStore.create('Spaghetti aglio e olio', 'https://s23209.pcdn.co/wp-content/uploads/2018/02/Aglio-e-OlioIMG_3194-360x360.jpg', classicsListId, pastaAglioEOlioSteps)
        self.itemStore.create('Spaghetti aglio e olio', 'https://s23209.pcdn.co/wp-content/uploads/2018/02/Aglio-e-OlioIMG_3194-360x360.jpg', classicsListId, [])
        self.itemStore.create('Spaghetti aglio e olio', 'https://s23209.pcdn.co/wp-content/uploads/2018/02/Aglio-e-OlioIMG_3194-360x360.jpg', classicsListId, [])
        self.itemStore.create('Spaghetti aglio e olio', 'https://s23209.pcdn.co/wp-content/uploads/2018/02/Aglio-e-OlioIMG_3194-360x360.jpg', classicsListId, [])
        self.itemStore.create('Spaghetti aglio e olio', 'https://s23209.pcdn.co/wp-content/uploads/2018/02/Aglio-e-OlioIMG_3194-360x360.jpg', classicsListId, [])
    }
  }));

export type RootStore = typeof RootStore.Type;
