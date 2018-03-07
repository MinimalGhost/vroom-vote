import React from 'react'
import { List } from 'semantic-ui-react'

const RiderItem = (props) => {
  return (
    <List>
      <List.Item>
        <List.Icon name='users' />
        <List.Content>{props.user.username}</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='marker' />
        <List.Content>{props.user.address} - {props.user.locale}, {props.user._state}</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='mail' />
        <List.Content>{props.user.email}</List.Content>
      </List.Item>
    </List>
  )
}

export default RiderItem
