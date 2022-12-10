import React, {useState} from 'react';
import classes from './todoForm.module.scss';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ createTodoCallback }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handlerInput = (event) => setDescription(event.target.value);
    const handleTitle = (event) => setTitle(event.target.value);

    const handlerSubmitTodo = (event) => {
        const currentDate = Date.now();
        createTodoCallback({
            id: uuidv4(),
            title: title,
            description: description,
            status: 'open',
            creationDate: currentDate,
            updateDate: currentDate,
        });

        event.preventDefault();

        setDescription('')
        setTitle('');
    };

    return (
        <form className={classes.form__todo}>
            <h1 className={classes.form__title}>Add your TODO</h1>
            <input className={classes.form__text} type="text" value={title} placeholder="Title" onChange={handleTitle}/>
            <textarea className={classes.form__text} value={description} placeholder="Add your Todo" rows={10} cols={50} onChange={handlerInput} />
            <button className={classes.form__add} onClick={handlerSubmitTodo}>Add Todo</button>
        </form>
    );
};

export default TodoForm;
