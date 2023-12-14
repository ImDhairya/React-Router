import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  let {userid} = useParams()
  userid = userid || "Hello World"

  return (
    <div className='bg-orange-500 text-black text-3xl text-center'>User: {userid}</div>
  )
}

export default User