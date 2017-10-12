import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Card, CardPart } from "../ui/card"
import TwitterLoader from 'twitter-widgets'

class TwitterPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card className={css(styles.card)}>
                <CardPart>
                    <a className="twitter-timeline"
                       href="https://twitter.com/quintana_zach"
                        ref={(el) => { this.embedEl = el }} />
                </CardPart>
            </Card>
        )
    }

    componentDidMount() {
        TwitterLoader.load((twitter) => {
            twitter.widgets.createTimeline({
                sourceType: 'profile',
                screenName: 'quintana_zach'
            }, this.embedEl, {
                width: "90%"
            })
        })
    }
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 70
    }
})

export default TwitterPanel
