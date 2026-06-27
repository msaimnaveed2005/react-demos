import React, { useState } from 'react'

const Profile = () => {
  const [profile, setProfile] = useState({ name: 'saim', age: 21 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Update Name and Age</p>

      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Enter name"
      />

      <input
        type="number"
        name="age"
        value={profile.age}
        onChange={handleChange}
        placeholder="Enter age"
      />

      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  )
}

export default Profile