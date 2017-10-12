import React from 'react'
import PropTypes from 'prop-types'

const Input = function (props) {
    return (
        <input type={props.type} className={'form-control '+props.className} name={props.name} />
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string
}
Input.defaultProps = {
    type: 'text',
    className: ''
}

export default Input
