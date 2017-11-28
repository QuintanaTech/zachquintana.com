import React from 'react'
import PropTypes from 'prop-types'
import Input from './input'
import TextArea from './textarea'
import { humanize } from 'inflected'

const InputWidget = function (props) {
    let el = null;
    let { className, label, ...rest } = props

    if ('textarea' === props.type) {
        el = <TextArea {...rest}/>
    } else {
        el = <Input {...rest}/>
    }

    return (
        <div className={"form-group "+className}>
            <label>{label ? label : humanize(props.name)}</label>
            {el}
            {true === props.error &&
                <div className={'invalid-feedback'}>
                    Please provide a valid {props.name}.
                </div>
            }
        </div>
    )
}

InputWidget.propTypes = {
    ...Input.propTypes,
    label: PropTypes.string
}
InputWidget.defaultProps = {
    ...Input.defaultProps
}

export default InputWidget
