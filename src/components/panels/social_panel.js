import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Card, CardPart } from "../ui/card"
import { ListGroup, ListGroupItem } from "../ui/list_group"

const SocialPanel = function (props) {
    return (
        <Card>
            <CardPart>
                <ListGroup>
                    <ListGroupItem>Twitter</ListGroupItem>
                </ListGroup>
            </CardPart>
        </Card>
    )
}

export default SocialPanel
