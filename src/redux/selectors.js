const sortTodos = (todos, sortOption) => {
    return [...todos].sort((todo1, todo2) => {
        return todo2[sortOption] - todo1[sortOption];
    });
};


export const selectTodos = ({ todos, selectedSortOption, selectedStatus }) => {
    if (selectedStatus  === 'all') {
        return sortTodos(todos, selectedSortOption);
    }

    const filteredTodos = todos.filter((todo) => todo.status === selectedStatus);

    return sortTodos(filteredTodos, selectedSortOption);
}
