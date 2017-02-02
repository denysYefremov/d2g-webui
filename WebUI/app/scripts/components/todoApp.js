import React from 'react';
import AddTodo from '../redux/containers/addTodo';
import VisibleTodoList from '../redux/containers/visibilityTodoList';
import Footer from './footer';

const TodoApp = () => (
  <div className="container">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
