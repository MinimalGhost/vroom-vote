import React from 'react'
import { List, Segment, Divider } from 'semantic-ui-react'

const DriverItem = (props) => {
  return (
    <List>
      <List.Item>
        <List.Icon name='users' />
        <List.Content>{props.username}</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='money' />
        <List.Content>
          <a href={props.charity_url}>{props.charity}</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='marker' />
        <button onClick={e => props.selectDriver(e, props)}>Select Driver</button>
      </List.Item>
      <Divider />
    </List>
  )
}

export default DriverItem
