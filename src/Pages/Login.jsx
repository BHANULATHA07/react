import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='Log'>
        <h3>Login</h3>
        <form>
        <label>E-mail</label>
        <input type="email" placeholder="Enter E-mail"/><br/>
        <label>Password</label>
        <input type="password" placeholder="Enter Password"/><br/>
        <Link to ='/Dashboard'><button class="text-center">Login</button></Link>
        <p>Don't have an account? <Link to="/Signup">Signup</Link></p>
        </form>
    </div>
  )
}

export default Login