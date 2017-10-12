import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Contact from '../contact'

const ContactPanel = function () {
    return (
        <div>
            <div className={css(styles.title)}>
                <h3>Contact Me</h3>
                <h2><a href="tel:+16197966477">619 796 6477</a></h2>
                <h5>or</h5>
            </div>
            <div className={css(styles.card)}>
                <Contact/>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        marginLeft: '10%'
    },
    title: {
        padding: '0 10%',
        marginBottom: 15,
        textAlign: 'center'
    }
})

export default ContactPanel
