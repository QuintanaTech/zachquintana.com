import React from 'react'
import Icon from './icon'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'

const Divider = function (props) {
    return (
        <div className={props.className}>
            <Icon type="angle-double-right" />
            <span className={css(styles.divider)} />
            <Icon type="star" />
            <span className={css(styles.divider)} />
            <Icon type="angle-double-left" />
        </div>
    )
}

Icon.propTypes = {
    className: PropTypes.string
}
Icon.defaultProps = {
    className: ''
}

const styles = StyleSheet.create({
    divider: {
        display: 'inline-block',
        borderTop: '2px solid black',
        width: 100,
        height: 5,
        margin: '0 10px'
    }
})

export default Divider
