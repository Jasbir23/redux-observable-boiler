import allReducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import listEpic from './epics/list-epic';
const rootEpic = combineEpics(listEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const store = createStore(allReducers, applyMiddleware(epicMiddleware));
  store.subscribe(() => {
    console.log('store changed', store.getState());
  });
  return store;
}
