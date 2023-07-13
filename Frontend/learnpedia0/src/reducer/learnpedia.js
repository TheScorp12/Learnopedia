import {SIGNIN, SIGNOUT} from '../action/action-types'

const initialState = {}

export default (state = initialState, action) => {
    switch(action.type) {
        case SIGNIN: 
            return action.payload
        case SIGNOUT:
            return {}
        default:
            return state
    }
}