import React, { PropTypes } from 'react';

const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <li
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none',
    }}
  >
    <a
      href=""
      className="todo-item"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </a>
  </li>
);

const { func, bool, string } = PropTypes;

Todo.propTypes = {
  onClick: func,
  completed: bool,
  text: string,
};

export default Todo;
