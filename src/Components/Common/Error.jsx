import React from 'react'
import { NavLink, useRouteError } from 'react-router'

export default function Error() {
  let error = useRouteError();
  console.error("error is", error);
  return (
    <div className='mt-10'>
      <h1 className='text-red-500 flex justify-center'>the Page you're looking forward doesn't exist.</h1>
      <NavLink to='/' className='text-blue-500 text-3xl flex justify-center align-middle p-2'>Go to Homepage</NavLink>
    </div>
  )
}
