const initState = {
    todos: [],
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            const todos = [action.todo, ...state.todos];

            return { ...state, todos };
        }
        case 'DELETE_TODO': {
            const todos = state.todos.filter((element) => element.id !== action.todoId);

            return { ...state, todos };
        }
        case 'COMPLETED_TODO': {
            const todos = state.todos.map((item) => {
                if (item.id === action.todoId) {
                    return {
                        ...item,
                        status: 'completed'
                    };
                }

                return { ...state, todos };
            })
        }
        case 'IN_PROGRESS': {
            const todos = state.todos.map((item) => {
                if (item.id === action.todoId) {
                    return {
                        ...item,
                        status: 'in-progress'
                    }
                }

                return { ...state, todos }
            })
        }
        case 'OPEN_TODO': {
            const todos = state.todos.map((item) => {
                if (item.id === action.todoId) {
                    return {
                        ...item,
                        status: 'open-todo'
                    }
                }

                return { ...state, todos }
            })
        }
        case 'EDIT_TODO': {
            const todos = state.todos.map((item) => {
                if (item.id === action.todo.todoId) {
                    return {
                        ...item,
                        ...action.todo.changes,
                        updateDate: Date.now(),
                    }
                }
            })
        }
    }
}

export default reducer;
