import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Icon from './ui/icon'
import InputWidget from './ui/form/input_widget'
import Button from './ui/button'
import { Card, CardPart } from './ui/card'

function onSend(evt) {
    evt.preventDefault()

    console.log(arguments)
}

const Contact = function () {
    return (
        <Card>
            <form>
                <CardPart type="body">
                    <InputWidget name="name" />
                    <InputWidget name="email" />
                    <InputWidget name="phone" />
                    <InputWidget name="comments" type="textarea" />
                </CardPart>
                <CardPart type="footer">
                    <Button priority="primary" onClick={onSend}>
                        <Icon type="send"/>
                        &nbsp;Send
                    </Button>
                </CardPart>
            </form>
        </Card>
    )
}

export default Contact