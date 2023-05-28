import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <div className='nav-container'>
        <div className='left'>
          
            <img width="150" height="50" alt='logo' src='https://th.bing.com/th/id/R.b16034de287733478c03a66dac1bb321?rik=z5lX9TZwlfu1Mw&riu=http%3a%2f%2fcdn.fearlessflyer.com%2fwp-content%2fuploads%2f2018%2f04%2fhootsuite.jpg&ehk=wKUgBAPktyCYN%2bCNNV0rso2Z3V6V2YIhKIHtUeriLSU%3d&risl=&pid=ImgRaw&r=0'/>
            <p>Platform</p>
            <p>Plans</p>
            <p>Enterprice</p>
            <p>Resources</p>
            <p>Education</p>
        </div>
        <div className='right'>
            <p>Contact Us</p>
            <p>Log in</p>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Nav