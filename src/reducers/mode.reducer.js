const mode = (state = "Create", action) => {
    switch(action.type) {
        case "UPDATE_MODE":
            return action.mode
    
    default: return state
    }
}

export default mode