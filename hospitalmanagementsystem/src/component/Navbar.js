import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <ul>
            {/* // <li><Link to='/login'>Login</Link></li> */}
            <li><Link to='/registration'>RegistrationPage</Link></li>
        </ul>
    </div>
  )
}

export default Navbar