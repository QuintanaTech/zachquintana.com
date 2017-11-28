import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Icon from './ui/icon'
import InputWidget from './ui/form/input_widget'
import Button from './ui/button'
import { Card, CardPart } from './ui/card'
import _ from 'underscore'
import axios from 'axios'

const STATE_NONE    = 0;
const STATE_SENDING = 1;
const STATE_SENT    = 2;
const STATE_ERROR   = 3;

let invalidFields = []

function validate(data) {
    let require = ['name', 'phone']
    let valid = true
    invalidFields = []

    require.forEach(function (field) {
        if (_.isUndefined(data[field])) {
            valid = false
            invalidFields.push(field)
        }
    })

    return valid
}

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sentState: STATE_NONE,
            data: {},
            invalidFields: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setSentState(state) {
        this.setState({
            sentState: state
        })

        if (STATE_ERROR === state || STATE_SENT === state) {
            setTimeout(() => {
                this.setSentState(STATE_NONE)
            }, 5000)
        }
    }

    onSubmit(event) {
        event.preventDefault()

        if (!validate(this.state.data)) {
            this.setState({
                invalidFields: invalidFields
            })

            return
        }

        this.setState({
            sentState: STATE_SENDING
        })

        axios.post("https://formspree.io/zach.quintana@gmail.com", this.state.data)
            .then((response) => {
                if (200 === response.status) {
                    this.setSentState(STATE_SENT)
                } else {
                    this.setSentState(STATE_ERROR)
                }
            })
            .catch((error) => {
                this.setSentState(STATE_ERROR)
            })
    }

    isValidField(field) {
        return this.state.invalidFields.indexOf(field) >= 0
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            data: _.extend(this.state.data, {
                [name]: value
            })
        })
    }

    render() {
        return (
            <Card>
                {STATE_NONE === this.state.sentState &&
                <form>
                    <CardPart type="body">
                        <InputWidget name="name" onChange={this.handleInputChange} error={this.isValidField('name')} />
                        <InputWidget name="email" onChange={this.handleInputChange} error={this.isValidField('email')} />
                        <InputWidget name="phone" onChange={this.handleInputChange} error={this.isValidField('phone')} />
                        <InputWidget name="comments" type="textarea" onChange={this.handleInputChange} error={this.isValidField('textarea')} />
                    </CardPart>
                    <CardPart type="footer">
                        <Button priority="primary" onClick={this.onSubmit}>
                            <Icon type="send"/>
                            &nbsp;Send
                        </Button>
                    </CardPart>
                </form>
                }
                {STATE_SENDING === this.state.sentState &&
                    <CardPart type="body">
                        <div className={css(styles.sendingIndicator)}>
                            <h2 className={css(styles.sendingText)}>
                                Sending
                            </h2>
                            <Icon type={'circle-o-notch'} size={'3x'} animation={'spin'}/>
                        </div>
                    </CardPart>
                }
                {STATE_SENT === this.state.sentState &&
                    <CardPart type="body">
                        <div>
                            <p>Thanks for your request, I'll get back to you ASAP.</p>
                        </div>
                    </CardPart>
                }
                {STATE_ERROR === this.state.sentState &&
                    <CardPart type="body">
                        <p>
                            We encountered an unexpected error. Please call me at 619.796.6477.
                        </p>
                    </CardPart>
                }
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    sendingIndicator: {
        textAlign: 'center'
    },
    sendingText: {
        display: 'block',
        marginBottom: 15
    }
})

export default Contact