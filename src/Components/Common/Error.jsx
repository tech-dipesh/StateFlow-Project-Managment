import React from 'react'
import { NavLink } from 'react-router'

export default function Error() {
  return (
    <div>
      <h1>the Page you're looking forward doesn't exist.</h1>
      <NavLink to='/'>Homepage</NavLink>
    </div>
  )
}
