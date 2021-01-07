const initialState = {
    todos: [
        {
            id: 1,
            title: 'Reading Book'
        },
        {
            id: 2,
            title: 'Workout Training'
        }
    ],
    editTodo: {
        id: '',
        title: ''
    },
    isEdit: false,
    isDelete: false,
    deleteId: '',

}

const todosReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD":
            const newItem = {
                id: state.todos.length + 1,
                title: payload
            }
            return {
                ...state,
                todos: [...state.todos, newItem]
            }
        case "EDIT":
            const modifyItem = {
                id: payload.id,
                title: payload.data
            }
            const idx = state.todos.findIndex(td => td.id === modifyItem.id);
            state.todos.splice(idx, 1, modifyItem);
            return {
                ...state,
                todos: [...state.todos],
                isEdit: false
            }
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter(td => td.id !== state.deleteId),
                isDelete: false
            }
        case "SHOWEDIT":
            return {
                ...state,
                editTodo: state.todos.find(td => td.id === payload),
                isEdit: true
            }
        case "CLOSEEDIT":
            return {
                ...state,
                editTodo: { id: '', title: '' },
                isEdit: false
            }
        case "SHOWDELETE":
            return {
                ...state,
                isDelete: true,
                deleteId: payload
            }
        case "CLOSEDELETE":
            return {
                ...state,
                isDelete: false,
                deleteId: ''
            }
        default: return state

    }
}

export default todosReducer;