import React from 'react'
import Chunk from 'components/chunk.component'

let loadChunk = (componentPath, props = {}) => {
    const Cmp = () => { return import(componentPath) }

    return <Chunk load="{Cmp}" {...props} />
}

let deferredLoadChunk = (componentPath, props = {}) => {
    return function () {
        return loadChunk(componentPath, props)
    }
}

const routes = {
    home: {
        path: '/',
        chunk: deferredLoadChunk('../components/home')
    }
};

export default routes
