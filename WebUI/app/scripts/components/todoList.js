import React, { PropTypes } from 'react';
import Todo from './todo';
import todoShape from '../shapes/todoShape';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {
      todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />,
      )
    }
  </ul>
);

const { func, arrayOf, shape } = PropTypes;

TodoList.propTypes = {
  todos: arrayOf(
    shape(
      todoShape,
    ),
  ),
  onTodoClick: func,
};

export default TodoList;
