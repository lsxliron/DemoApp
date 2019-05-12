import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class UsersView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8088/api/users').then(resp => {
      this.setState({ users: resp.data.data || [] })
    }).catch(err => {
      console.err(`Could not get data from the server, ${err.text}`)
    })
  }

  getUsersCells = () => {
    return this.state.users.map(d => {
      return (
        <tr key={`user-${d.id}`}>
          <td>{d.id}</td>
          <td>{d.first_name}</td>
          <td>{d.last_name}</td>
          <td>{d.email}</td>
          <td>
            <Link to={`/${d.id}`}>Info</Link>
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <table className="striped">
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name Name</th>
            <th>Email Price</th>

          </tr>
        </thead>

        <tbody>
          {this.getUsersCells()}
        </tbody>
      </table>
    )
  }
}

export default UsersView