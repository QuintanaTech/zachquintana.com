import React from 'react'
import PropTypes from 'prop-types'

export const ListGroupItem = function (props) {
    return (
        <li className={'list-group-item '+props.className}>
            {props.children}
        </li>
    )
}

export const ListGroup = function (props) {
    let className = 'list-group';
    if (props.flush) {
        className += ' list-group-flush'
    }

    return (
        <ul className={className+' '+props.className}>
            {props.children}
        </ul>
    )
}

ListGroup.propTypes = {
    flush: PropTypes.bool
}
ListGroup.defaultProps = {
    flush: false
}
