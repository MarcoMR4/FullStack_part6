
export const notificationReducer = (state, action) => {
    switch(action.type){
        case "ADD": 
            return {...state, show: true, message: `Anecdote '${action.payload}' added`}
        case "VOTE":
            return {...state, show: true, message: `You voted for '${action.payload}' `}
        case "LESS_FIVE": 
            return {...state, show: true, error: true, message: `The content must have at least 5 characters...`}
        case "SHOW":
            return {...state, show: true}
        case "HIDE":
            return {show: false, message: '', error: false}
        default:
            return false
    }
}