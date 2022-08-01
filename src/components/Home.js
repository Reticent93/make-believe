import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
        <Navbar />
        <h1>Home</h1>
        <p>This is the home page</p>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact</Link>
        <Link to ="/login">Login</Link>
        
        
    </div>
  )
}

export default Home