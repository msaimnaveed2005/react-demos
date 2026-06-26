import React from 'react'

const UserStatus = ({ loggedin, isAdmin }) => {
  if (loggedin && isAdmin) {
    return <h1>Welcome Admin</h1>
  }

  if (loggedin) {
    return <h1>Welcome User</h1>
  }

  return <h1>Please log in</h1>
}

export default UserStatus