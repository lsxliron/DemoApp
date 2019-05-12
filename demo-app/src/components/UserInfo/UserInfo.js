import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: 1
    }
  }

  componentDidMount() {
    Axios.get(`http://localhost:8088/api/users/${this.props.match.params.userId}`).then(resp => {
      this.setState({ userInfo: resp.data.data })
    }).catch(err => {
      console.err(`Could not get data from the server, ${err.text}`)
    })
  }

  render() {
    if (this.state.userInfo === null)
      return (<div>
        <h3>Loading</h3>
      </div>)


    return (
      <div style={{ marginTop: '48px' }}>
        <div className="row">
          <div className="col s12">
            <div className="card-panel">

              <div className="row">
                <h5>User ID: {this.state.userInfo.id}</h5>
                <h5>First Name: {this.state.userInfo.first_name}</h5>
                <h5>Last Name: {this.state.userInfo.last_name}</h5>
                <h5>Email: {this.state.userInfo.email}</h5>
                <h5>Gender: {this.state.userInfo.gender}</h5>
                <h5>IP: {this.state.userInfo.ip_address}</h5>
                <Link to="/">Back to Users List</Link>
              </div>


            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default UserInfo