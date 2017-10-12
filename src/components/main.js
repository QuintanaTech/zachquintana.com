import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import google from '../styles/google'
import Divider from './ui/divider'
import avatar from '../assets/img/zquintanaavatar.png'

const Main = function (props) {
    return (
        <div className="row">
            <div className={"col-md-7 "+css(styles.left)}>
                <div className={css(styles.imageContainer)}>
                    <img src={avatar} className={css(styles.avatar)} />
                </div>
                <div className={css(styles.textContainer)}>
                    <h1 className={css(styles.title)}>Zachary Quintana</h1>
                    <Divider className={css(styles.divider)} />
                    <div>
                        Software Developer - Entreprenuer
                    </div>
                    <div>
                        Creating dreamware in Web and Mobile technologies
                    </div>
                </div>
            </div>
            <div className={"col-md-5 "+css(styles.right)}>
                {props.children}
            </div>
        </div>
    )
}

/**
 * F7F4EA
 * DED9E2
 * C0B9DD
 * 80A1D4
 * 75C9C8
 */

const styles = StyleSheet.create({
    left: {
        backgroundColor: "#DED9E2",
        height: '100vh',
        textAlign: 'center',
    },
    right: {
        backgroundColor: "#F7F4EA",
        paddingTop: 20,
        overflowY: 'scroll',
        height: '100vh',
    },
    imageContainer: {
        width: 300,
        height: 300,
        backgroundColor: '#75C9C8',
        borderRadius: 150,
        display: 'inline-block',
        marginTop: 50,
        textAlign: 'center',
        overflow: 'hidden'
    },
    avatar: {
        maxWidth: '85%'
    },
    textContainer: {
        marginTop: 20
    },
    title: {
        ...google.ArchivoBlack,
        fontSize: '3rem'
    },
    divider: {
        margin: "10px 0"
    }
})

export default Main
