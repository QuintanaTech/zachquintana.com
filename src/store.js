import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const createAppStore = (history) => {
    const middlewares = [
        thunkMiddleware,
        routerMiddleware(history),
        createLogger({
            collapsed: true
        }),
    ]

    return createStore(
        reducer,
        composeWithDevTools(applyMiddleware(...middlewares))
    )
}

export default createAppStore
