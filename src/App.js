import React, { useState, useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './components/todo/todoForm/TodoForm';
import SortTodo from './components/todo/sortTodo/SortTodo';
import TodoList from './components/todo/todoList/TodoList';
import {addTodo, editTodo} from './redux/actionsTodo';

function App() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [status, setStatus] = useState('all');
    const [sortOption, setSortOption] = useState('creationDate');
    const [displayedTodos, setDisplayedTodos] = useState([]);

    const createTodo = (todo) => dispatch(addTodo(todo));
    const handlerFiltering = (event) => setStatus(event.target.value);
    const handleSorting = (event) => setSortOption(event.target.value);
    const handleTitleEditing = (todoId, newValue) => dispatch(editTodo(todoId, { title: newValue }));
    const handleDescriptionEditing = (todoId, newValue) => dispatch((editTodo(todoId, { description: newValue })));

    useEffect(() => {
        onSortAndFilterChange();
    }, [todos, status, sortOption]);

    const sortTodos = (todos) => {
        return [...todos].sort((todo1, todo2) => {
            return todo2[sortOption] - todo1[sortOption];
        });
    };

    const onSortAndFilterChange = () => {
        if (status === 'all') {
            const sortedTodos = sortTodos(todos);
            setDisplayedTodos(sortedTodos);
            return;
        }

        const filteredTodos = todos.filter((todo) => todo.status === status);
        const sortedTodos = sortTodos(filteredTodos);
        setDisplayedTodos(sortedTodos);
    };

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
            todos={todos}
            displayedTodos={displayedTodos}
            titleEditing={handleTitleEditing.bind(this)}
            descriptionEditing={handleDescriptionEditing.bind(this)}
        />
    </div>
  );
}

export default App;
