export const add = (data) => {
    return {
        type: "ADD",
        payload: data
    }
}

export const edit = (id, data) => {
    return {
        type: "EDIT",
        payload: {
            id, data
        }
    }
}

export const del = () => {
    return {
        type: "DELETE",
        payload: null
    }
}

export const showEdit = id => {
    return {
        type: "SHOWEDIT",
        payload: id
    }
}

export const closeEdit = () => {
    return {
        type: "CLOSEEDIT",
        payload: null
    }
}

export const showDelete = id => {
    return {
        type: "SHOWDELETE",
        payload: id
    }
}

export const closeDelete = () => {
    return {
        type: "CLOSEDELETE",
        payload: null
    }
}