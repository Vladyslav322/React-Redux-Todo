export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo,
});

export const deleteTodo = (todoId) => ({
    type: 'DELETE_TODO',
    todoId,
});

export const completedTodo = (todoId) => ({
    type: 'COMPLETED_TODO',
    todoId,
});

export const editTodo = (todoId, changes) => ({
    type: 'EDIT_TODO',
    todo: { todoId, changes },
});

export const inProgressTodo = (todoId) => ({
    type: 'IN_PROGRESS_TODO',
    todoId,
});

export const openTodo = (todoId) => ({
    type: 'OPEN_TODO',
    todoId,
});

export const changeSortOption = (option) => ({
    type: 'CHANGE_OPTION',
    option,
});

export const changeStatus = (status) => ({
    type: 'CHANGE_STATUS',
    status,
});
