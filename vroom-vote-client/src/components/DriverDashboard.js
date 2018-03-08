import React from 'react'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router'
import CarpoolAdapter from '../adapters/CarpoolAdapter'
import { getDriverCarpool } from '../actions'
import { bindActionCreators } from 'redux'
import DriverMap from './DriverMap'
import RiderList from './RiderList'
import { Image, Grid, Segment, Divider, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class DriverDashboard extends React.Component {

  componentDidMount = () => {
    if(this.props.auth.user) {
      CarpoolAdapter.getMyCarpool()
      .then(this.props.getRiderCarpool)
    }
  }

  render() {
    return (
      <div>
        { !this.props.auth.isLoggedIn ?
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
                Welcome, {this.props.auth.user.username}
                </Header>
                <p>You&apos;re driving voters in {this.props.auth.user.district}</p>
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' color='teal' textAlign='center'>
                  <a target="_blank" href={this.props.auth.user.charity_url}>{this.props.auth.user.charity}</a>
                </Header>
                <p>Your promoted charity</p>
              </Grid.Column>
              <Grid.Column>
                <Header as='h1' color='teal' textAlign='center'>
                  {this.props.auth.user.seats - this.props.auth.user.carpools[0].users.length + 1}
                </Header>
                <p>Seats left</p>
              </Grid.Column>
            </Grid>
            <Divider />
            <Grid columns={3}>
              <Grid.Column>
                <Header as='h3' color='teal' textAlign='center'>
                  <Image src={this.props.auth.user.senator_1_img} />
                  {' '}{this.props.auth.user.senator_1}
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' color='teal' textAlign='center'>
                  <Image src={this.props.auth.user.senator_2_img} />
                  {' '}{this.props.auth.user.senator_2}
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as='h3' color='teal' textAlign='center'>
                  <Image src={this.props.auth.user.house_rep_img} />
                  {' '}{this.props.auth.user.house_rep}
                </Header>
              </Grid.Column>
            </Grid>
            <Divider />
            <Grid columns={2} relaxed>
              <Grid.Column>
                <RiderList />
              </Grid.Column>
              <Grid.Column>
                <Segment raised>
                  <DriverMap />
                </Segment>
              </Grid.Column>
            </Grid>
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
     user: state.auth.user
   },
   carpoolsReducer: {
     driverCarpool: state.carpoolsReducer.driverCarpool
   }
 }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getDriverCarpool: getDriverCarpool
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverDashboard)
