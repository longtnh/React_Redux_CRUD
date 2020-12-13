import { SET_USER } from '../action/user.actions'

const initialState = {
    id : -1,
    name : null,
    username: null
}

const inputReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER :
            const userUpdate = action.payload; 
            // const { user } = action.payload;
            state.id = userUpdate.id
            state.name = userUpdate.name
            state.username = userUpdate.username
            return {
                ...state,
            }
        default:
            return state;    
    }
}
export default inputReducer;