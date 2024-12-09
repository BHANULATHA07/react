import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className='sign'>
        <h3> New User ? Signup </h3>
        <form>
        <label>E-mail</label>
        <input type="email" placeholder="Enter E-mail"/><br/>
        <label>Password</label>
        <input type="password" placeholder="Enter Password"/><br/>
        <Link to ='/react'><button class="text-center"
        >Signup</button></Link>
        <p>Already have an account? <Link to="/">Login</Link></p>
        </form>
    </div>
  )
}

export default Signup