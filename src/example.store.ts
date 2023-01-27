import { action, atom } from 'nanostores';

export const exampleStore = atom<Date[]>([]);

export const addItemAction = action(exampleStore, 'addItem', (exampleStore) => {
  const currentValues = exampleStore.get();

  console.log(currentValues);

  exampleStore.set([...currentValues, new Date()]);
});

export const initListAction = action(exampleStore, 'init', (exampleStore) => {
  exampleStore.set([
    new Date('2023-01-01'),
    new Date('2023-01-02'),
    new Date('2023-01-03'),
    new Date('2023-01-04'),
  ]);
})