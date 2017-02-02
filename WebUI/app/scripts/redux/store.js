import { createStore, combineReducers } from 'redux';
import todoReducer from './redusers/todoReducer';
import visibilityFilterReducer from './redusers/visibilityFilterReducer';

const reducers = combineReducers(
  {
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer,
  },
);

const getAvailableDevTools = () => {
  if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
    return window.devToolsExtension();
  }

  return f => f;
};

export default createStore(reducers, getAvailableDevTools());
