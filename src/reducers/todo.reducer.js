const todos = (state = [], action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    uid: action.uid,
                    text: action.text,
                    completed: action.completed
                }
            ]
        case "DELETE_TODO":
            return [
                ...state.filter(todo => todo.uid !== action.uid)
            ] 
        case "EDIT_TODO":
                return state.map(todo => {
                    if(todo.uid === action.uid) {
                        todo.text = action.text
                        return todo
                    }
                    return todo
                })
        
        case "TOGGLE_TODO":
                return state.map(
                    todo =>
                      todo.uid === action.uid ? { ...todo, completed: !todo.completed } : todo
                  );
    
        default: return state
    }   
}

export default todos