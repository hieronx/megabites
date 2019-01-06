import { types as t, getEnv } from 'mobx-state-tree';

import { ListStore } from './ListStore'
import { ItemStore, Step, Timer } from './ItemStore'

const pastaAglioEOlioSteps: Step[] = [
    Step.create({ description: 'Bring a large pot of lightly salted water to a boil.', imageUrl: 'https://megabites.outset.app/steps/1.jpg' }),
    Step.create({ description: 'Cook the spaghetti.',
      expandedSteps: [
        Step.create({ description: 'Add spaghetti to the large pot that is now boiling.', imageUrl: 'https://megabites.outset.app/steps/2.jpg' }),
        Step.create({ description: 'Make sure the spaghetti is fully under the water..', imageUrl: 'https://megabites.outset.app/steps/2.jpg' }),
        Step.create({ description: 'Stir occassionally.', imageUrl: 'https://megabites.outset.app/steps/3.jpg' }),
        Step.create({ description: 'Wait until the pasta is cooked through but firm to the bite, about 12 minutes..' })
      ],
      backgroundTimer: Timer.create({ name: 'cook pasta', duration: 720 })
   , imageUrl: 'https://megabites.outset.app/steps/2.jpg' }),
    Step.create({ description: 'Drain and transfer to a pasta bowl.' }),
    Step.create({ description: 'Combine garlic and olive oil in a cold skillet.', imageUrl: 'https://megabites.outset.app/steps/4.jpeg' }),
    Step.create({ description: 'Cook over medium heat to slowly toast garlic, about 10 minutes.', backgroundTimer: Timer.create({ name: 'cook garlic', duration: 600 }), imageUrl: 'https://megabites.outset.app/steps/4.jpeg' }),
    Step.create({ description: 'Reduce heat to medium-low when olive oil begins to bubble.', imageUrl: 'https://megabites.outset.app/steps/4.jpeg' }),
    Step.create({ description: 'Cook and stir until garlic is golden brown, about another 5 minutes. Remove from heat.', backgroundTimer: Timer.create({ name: 'cook garlic', duration: 300 }), imageUrl: 'https://megabites.outset.app/steps/4.jpeg' }),
    Step.create({ description: 'Stir red pepper flakes, black pepper, and salt into the pasta.' }),
    Step.create({ description: 'Pour in olive oil and garlic, and sprinkle on Italian parsley and half of the Parmigiano-Reggiano cheese; stir until combined.' }),
    Step.create({ description: 'Serve pasta topped with the remaining Parmigiano-Reggiano cheese.', imageUrl: 'https://megabites.outset.app/steps/5.jpg' }),
    Step.create({ description: 'Enjoy!' })
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

      const classicsListId = self.listStore.create('Timeless Classics')
      self.itemStore.create('Smothered Chicken', 'https://static01.nyt.com/images/2014/09/22/multimedia/classic-smotheredchicken/classic-smotheredchicken-videoSixteenByNine310.jpg', classicsListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Spaghetti aglio e olio', 'https://s23209.pcdn.co/wp-content/uploads/2018/02/Aglio-e-OlioIMG_3194-360x360.jpg', classicsListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Zucchini with Shallots', 'https://static01.nyt.com/images/2017/06/30/dining/30COOKING-ZUCCHINI2/30COOKING-ZUCCHINI2-mediumThreeByTwo252.jpg', classicsListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Beef Stew', 'https://static01.nyt.com/images/2014/04/11/dining/beefstew/beefstew-mediumThreeByTwo252-v2.jpg', classicsListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Fettuccine with Asparagus', 'https://static01.nyt.com/images/2016/04/18/dining/18COOKING-FETTUCCINEASPARAGUS1/18COOKING-FETTUCCINEASPARAGUS1-mediumThreeByTwo252.jpg', classicsListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))

      const classics2ListId = self.listStore.create('Try Something New')
      self.itemStore.create('Smothered Chicken', 'https://static01.nyt.com/images/2014/09/22/multimedia/classic-smotheredchicken/classic-smotheredchicken-videoSixteenByNine310.jpg', classics2ListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Spaghetti aglio e olio', 'https://s23209.pcdn.co/wp-content/uploads/2018/02/Aglio-e-OlioIMG_3194-360x360.jpg', classics2ListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Zucchini with Shallots', 'https://static01.nyt.com/images/2017/06/30/dining/30COOKING-ZUCCHINI2/30COOKING-ZUCCHINI2-mediumThreeByTwo252.jpg', classics2ListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Beef Stew', 'https://static01.nyt.com/images/2014/04/11/dining/beefstew/beefstew-mediumThreeByTwo252-v2.jpg', classics2ListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Fettuccine with Asparagus', 'https://static01.nyt.com/images/2016/04/18/dining/18COOKING-FETTUCCINEASPARAGUS1/18COOKING-FETTUCCINEASPARAGUS1-mediumThreeByTwo252.jpg', classics2ListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))

      const classics3ListId = self.listStore.create('Under 30 Minutes')
      self.itemStore.create('Smothered Chicken', 'https://static01.nyt.com/images/2014/09/22/multimedia/classic-smotheredchicken/classic-smotheredchicken-videoSixteenByNine310.jpg', classics3ListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Spaghetti aglio e olio', 'https://s23209.pcdn.co/wp-content/uploads/2018/02/Aglio-e-OlioIMG_3194-360x360.jpg', classics3ListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Zucchini with Shallots', 'https://static01.nyt.com/images/2017/06/30/dining/30COOKING-ZUCCHINI2/30COOKING-ZUCCHINI2-mediumThreeByTwo252.jpg', classics3ListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Beef Stew', 'https://static01.nyt.com/images/2014/04/11/dining/beefstew/beefstew-mediumThreeByTwo252-v2.jpg', classics3ListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
      self.itemStore.create('Fettuccine with Asparagus', 'https://static01.nyt.com/images/2016/04/18/dining/18COOKING-FETTUCCINEASPARAGUS1/18COOKING-FETTUCCINEASPARAGUS1-mediumThreeByTwo252.jpg', classics3ListId, JSON.parse(JSON.stringify(pastaAglioEOlioSteps)))
    }
  }));

export type RootStore = typeof RootStore.Type;
