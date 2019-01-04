import { observable } from 'mobx';

import { RootStore } from './stores/RootStore';

const rootStore = RootStore.create(
  {}
);

export const store: RootStore = rootStore;

// Store history
export const history = {
  snapshots: observable.array([], { deep: false }),
  actions: observable.array([], { deep: false }),
  patches: observable.array([], { deep: false })
};
