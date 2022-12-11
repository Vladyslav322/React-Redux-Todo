import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './components/todo/todoForm/TodoForm';
import SortTodo from './components/todo/sortTodo/SortTodo';
import TodoList from './components/todo/todoList/TodoList';
import {addTodo, changeSortOption, changeStatus, editTodo} from './redux/actionsTodo';
import {selectTodos} from "./redux/selectors";

function App() {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    const createTodo = (todo) => dispatch(addTodo(todo));
    const handlerFiltering = (event) => dispatch(changeStatus(event.target.value));
    const handleSorting = (event) => dispatch(changeSortOption(event.target.value));
    const handleTitleEditing = (todoId, newValue) => dispatch(editTodo(todoId, { title: newValue }));
    const handleDescriptionEditing = (todoId, newValue) => dispatch((editTodo(todoId, { description: newValue })));

  return (
    <div className='App'>
        <TodoForm
            createTodoCallback={createTodo}
        />
        {
            !!todos.length
            && <SortTodo
                filterTodos={handlerFiltering.bind(this)}
                sortTodos={handleSorting.bind(this)}
            />
        }
        <TodoList
            displayedTodos={todos}
            titleEditing={handleTitleEditing.bind(this)}
            descriptionEditing={handleDescriptionEditing.bind(this)}
        />
    </div>
  );
}

export default App;
