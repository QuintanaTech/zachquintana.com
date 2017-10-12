
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

let initial = {}

const appReducer = (state = initial, action) => {
    return state
}

export default combineReducers({
    appReducer,
    routing: routerReducer
})
