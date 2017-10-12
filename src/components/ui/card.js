import React from 'react'
import PropTypes from 'prop-types'

export const CardPart = function (props) {
    return (
        <div className={"card-"+props.type+' '+props.className}>
            {props.children}
        </div>
    )
}

CardPart.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string
}
CardPart.defaultProps = {
    type: 'body',
    className: ''
}

export const Card = function (props) {
    return (
        <div className={'card '+props.className}>
            {props.children}
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string
}
Card.defaultProps = {
    className: ''
}
