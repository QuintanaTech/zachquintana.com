import React from 'react'
import PropTypes from 'prop-types'
import { resolveClassName } from './utility'

const Input = function (props) {
    let { className, error, ...rest } = props

    return (
        <input className={resolveClassName(className, error)} {...rest} />
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.bool
}
Input.defaultProps = {
    type: 'text',
    className: '',
    error: false
}

export default Input
