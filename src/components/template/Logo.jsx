import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img 
                src="https://static.vecteezy.com/system/resources/previews/042/127/160/non_2x/instagram-logo-on-circle-style-with-transparent-background-free-png.png" 
                alt="logo" 
                style={{ width: '50px', height: '50px' }} 
            />
        </Link>
    </aside>
