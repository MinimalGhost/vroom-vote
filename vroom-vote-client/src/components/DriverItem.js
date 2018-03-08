import React from 'react'
import { Grid, List, Divider, Button } from 'semantic-ui-react'

const DriverItem = (props) => {
  return (
    <List>
      <Grid columns={2}>
        <Grid.Column floated='left' width={12} textAlign='left'>
          <List.Item>
            <Grid columns={2}>
              <Grid.Column width={1}>
                <List.Icon name='user'/>
              </Grid.Column>
            <Grid.Column width={12}>
            <List.Content>{props.username}</List.Content>
            </Grid.Column>
            </Grid>
          </List.Item>
          <List.Item>
            <Grid columns={2}>
              <Grid.Column width={1}>
                <List.Icon name='money' />
              </Grid.Column>
              <Grid.Column width={12}>
                <List.Content>
                  <a href={props.charity_url}>{props.charity}</a>
                </List.Content>
              </Grid.Column>
            </Grid>
          </List.Item>
        </Grid.Column>
        <Grid.Column floated='right' width={4}>
          <List.Item>
            <Button color="teal" onClick={e => props.selectDriver(e, props)}>Select Driver</Button>
          </List.Item>
        </Grid.Column>
      </Grid>
      <Divider />
    </List>
  )
}

export default DriverItem
