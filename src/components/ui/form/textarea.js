import React from 'react'
import PropTypes from 'prop-types'
import { resolveClassName } from "./utility";

const TextArea = function (props) {
    let { className, error, value, ...rest } = props

    return (
        <textarea className={resolveClassName(className, error)} {...rest}>
            {value}
        </textarea>
    )
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    error: PropTypes.bool
}
TextArea.defaultProps = {
    className: '',
    value: null,
    error: false
}

export default TextArea
