import React from 'react';
import Todo from '../todo/Todo'
import classes from './TodoList.module.scss';
import {useDispatch} from "react-redux";
import {completedTodo, deleteTodo, inProgressTodo, openTodo} from "../../../redux/actionsTodo";

const TodoList = ({ displayedTodos, titleEditing, descriptionEditing}) => {
    const dispatch = useDispatch();

    const handlerDeleteTodo = (id) => dispatch(deleteTodo(id));
    const handlerCompleteTodo = (id) => dispatch(completedTodo(id));
    const handleInProgressTodo = (id) => dispatch(inProgressTodo(id));
    const handleOpenTodoTodo = (id) => dispatch(openTodo(id));

    return (
        <ul className={classes.todo__list}>
            {
                displayedTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={handlerDeleteTodo.bind(this)}
                        completeTodo={handlerCompleteTodo.bind(this)}
                        inProgressTodo={handleInProgressTodo.bind(this)}
                        openTodo={handleOpenTodoTodo.bind(this)}
                        titleEditing={titleEditing}
                        descriptionEditing={descriptionEditing}
                    />
                ))
            }
        </ul>

    );
};

export default TodoList;
