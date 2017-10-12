import React from 'react'
import PropTypes from 'prop-types'

const Input = function (props) {
    let {
        priority,
        className,
        ...other
    } = props

    return (
        <button className={'btn btn-'+priority+' '+className} {...other}>
            {props.children}
        </button>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    priority: PropTypes.string
}
Input.defaultProps = {
    type: 'submit',
    className: '',
    priority: 'default'
}

export default Input
