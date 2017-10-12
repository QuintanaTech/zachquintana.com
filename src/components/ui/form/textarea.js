import React from 'react'
import PropTypes from 'prop-types'

const TextArea = function (props) {
    return (
        <textarea className={'form-control '+props.className} name={props.name}>
            {props.value}
        </textarea>
    )
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string
}
TextArea.defaultProps = {
    className: '',
    value: null
}

export default TextArea
