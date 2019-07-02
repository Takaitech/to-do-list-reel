export const addTodo = text => ({
    type: "ADD_TODO",
    uid: '_' + Math.random().toString(36).substr(2, 9),
    completed: false,
    text
})

export const deleteTodo = uid => ({
    type: "DELETE_TODO",
    uid
})


export const toggleTodo = uid => ({
    type: "TOGGLE_TODO",
    uid
})

export const updateFilter = filter => ({
    type: "UPDATEFILTER",
    filter
})

export const filterType = {
    COMPLETED: "COMPLETED",
    ACTIVE: "ACTIVE",
    ALL: "ALL"
}