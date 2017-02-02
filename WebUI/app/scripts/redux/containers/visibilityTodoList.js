import { connect } from 'react-redux';
import TodoList from '../../components/todoList';
import { getVisibilityTodo } from '../../actions/filterActions';
import { toggleTodo } from '../../actions/todoActions';
import { getTodos } from '../selectors/todoSelectors';
import { getVisibilityFilter } from '../selectors/filterSelectors';

const mapStateToProps = state => ({
  todos: getVisibilityTodo(
    getTodos(state),
    getVisibilityFilter(state),
  ),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
