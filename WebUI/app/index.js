import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './scripts/components/todoApp';
import store from './scripts/redux/store';
import styles from './styles/index.less';

ReactDom.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root'),
);
