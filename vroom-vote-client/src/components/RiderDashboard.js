import React from 'react'
import DriverList from './DriverList'
import RiderMap from './RiderMap'
import { Link } from 'react-router-dom'
import CarpoolAdapter from '../adapters/CarpoolAdapter'
import { joinCarpool } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Image, Container, Button, Grid, Segment, Divider, Header, List } from 'semantic-ui-react'


class RiderDashboard extends React.Component {

  selectDriver = (e, driver) => {
    console.log(driver.id);
    CarpoolAdapter.joinCarpool(driver.id)
    .then(this.props.joinCarpool)
  }

  render() {
    return (
      <div>
        {
          !this.props.auth.isLoggedIn ?
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        :
          <Grid textAlign='center'
           style={{ height: '100%'}}
           verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 850 }}>
            <Grid columns={3}>
              <Grid.Column>
                <Header as='h3' color='teal' textAlign='center'>
                  <Image src={this.props.auth.senator_1_img} />
                  {' '}{this.props.auth.senator_1}
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' color='teal' textAlign='center'>
                  <Image src={this.props.auth.senator_2_img} />
                  {' '}{this.props.auth.senator_2}
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' color='teal' textAlign='center'>
                  <Image src={this.props.auth.house_rep_img} />
                  {' '}{this.props.auth.house_rep}
                </Header>
              </Grid.Column>
            </Grid>
            <Divider />
              {
                this.props.auth.carpools.length ?
                <Grid columns={2}>
                  <Grid.Column>
                    <Segment raised>
                      <List horizontal size={'big'}>
                      <Header as='h3' color='teal'>Driver Details</Header>
                      <Segment>
                        <List.Item>
                        <Grid columns={2}>
                          <Grid.Column width={1}>
                            <List.Icon name="user" />
                          </Grid.Column>
                          <Grid.Column width={13}>
                            <List.Content>
                              {this.props.auth.carpools[0].users[0].username}
                            </List.Content>
                          </Grid.Column>
                        </Grid>
                        </List.Item>
                        <List.Item>
                        <Grid columns={2}>
                          <Grid.Column width={1}>
                            <List.Icon name="marker" />
                          </Grid.Column>
                          <Grid.Column width={13}>
                            <List.Content>
                              {this.props.auth.carpools[0].users[0].address} - {this.props.auth.carpools[0].users[0].locale}, {this.props.auth.carpools[0].users[0]._state}
                            </List.Content>
                          </Grid.Column>
                        </Grid>
                        </List.Item>
                        <List.Item>
                        <Grid columns={2}>
                          <Grid.Column width={1}>
                            <List.Icon name="mail" />
                          </Grid.Column>
                          <Grid.Column width={13}>
                            <List.Content>{this.props.auth.carpools[0].users[0].email}</List.Content>
                          </Grid.Column>
                        </Grid>
                        </List.Item>
                      </Segment>
                      <List.Header>Promoted Charity</List.Header>
                      <Segment>
                        <List.Item>
                          <Grid columns={2}>
                            <Grid.Column width={1}>
                              <List.Icon name="money" />
                            </Grid.Column>
                            <Grid.Column width={13}>
                              <List.Content><a href={this.props.auth.carpools[0].users[0].charity_url}>{this.props.auth.carpools[0].users[0].charity}</a></List.Content>
                            </Grid.Column>
                          </Grid>
                        </List.Item>
                      </Segment>
                      <List.Header>Add 2018 Election Dates</List.Header>
                      <Segment>
                        <List.Item>
                          <List.Content>Add calendar with <a href='https://is.gd/vuH33Y'>Google</a></List.Content>
                          <List.Content>Sign up for <a href='https://www.nytimes.com/newsletters/election-results'>Result emails</a></List.Content>
                        </List.Item>
                      </Segment>
                      </List>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment raised>
                      <Header as="h3" color="teal">{this.props.auth.district}</Header>
                      <RiderMap lat={this.props.auth.latitude} lng={this.props.auth.longitude} />
                    </Segment>
                  </Grid.Column>
                </Grid>
                :
                <Grid columns={2}>
                  <Grid.Column>
                    <DriverList selectDriver={this.selectDriver}/>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment raised>
                      <Header as="h3" color="teal">{this.props.auth.district}</Header>
                      <RiderMap userLat={this.props.auth.latitude} userLng={this.props.auth.longitude} />
                    </Segment>
                  </Grid.Column>
                </Grid>
              }
            </Grid.Column>
          </Grid>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {
   auth: {
     isLoggedIn: state.auth.isLoggedIn,
     ...state.auth.user
   },
   driversReducer: {
     drivers: state.driversReducer.drivers
   },
   carpoolsReducer: {
     carpools: state.carpoolsReducer.carpools,
     riderCarpool: state.carpoolsReducer.riderCarpool
   }
 }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    joinCarpool: joinCarpool
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RiderDashboard)
