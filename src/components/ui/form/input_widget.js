import React from 'react'
import PropTypes from 'prop-types'
import Input from './input'
import TextArea from './textarea'
import { humanize } from 'inflected'

const InputWidget = function (props) {
    let el = null;
    if ('textarea' === props.type) {
        el = <TextArea name={props.name}/>
    } else {
        el = <Input name={props.name}/>
    }

    return (
        <div className={"form-group "+props.className}>
            <label>{props.label ? props.label : humanize(props.name)}</label>
            {el}
        </div>
    )
}

Input.propTypes = {
    ...Input.propTypes,
    label: PropTypes.string
}
Input.defaultProps = {
    ...Input.defaultProps
}

export default InputWidget
