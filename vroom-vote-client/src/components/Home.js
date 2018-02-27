import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>YOUR HOME</h1>
      <p><Link to='/signin'>Sign in</Link> or <Link to='/signup'>Sign up</Link></p>
    </div>
  )
}

export default Home