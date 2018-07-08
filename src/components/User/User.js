import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserList extends Component {
  render() {
    const { data } = this.props
      return (
          <div>
            <h3>
                <Link to={`/album/${data.id}/${data.name}`}> {data.name} </Link>
            </h3>
          </div>
      )
    }
}

export default UserList