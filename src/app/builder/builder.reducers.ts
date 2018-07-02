import { Action } from '@ngrx/store';

const initalState = {
  currentPage: 'System Builder',
  listData: [
    {
      route: 'cpu',
      name: 'CPU',
      model: 'i7-4790K',
      base: 310.0,
      productImage:
        'https://images-eu.ssl-images-amazon.com/images/I/51guGHeu46L.jpg',
      promo: '-'
    },
    {
      route: 'cpu-cooler',
      name: 'CPU Cooler',
      model: 'Noctua NH-D15',
      base: 70.0,
      productImage: '',
      promo: '-'
    }
  ]
};

export function builderReducer(state = initalState, action: Action) {
  return state;
}
