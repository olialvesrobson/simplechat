import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../config';

function Navbar() {
    const user = auth.currentUser;
    return (
        <header className="navbar">

            <span className="white" 
                aria-hidden="true"><Link to="/">Menu</Link></span>
            <h2>Simple Chats</h2>
            <img src={ user ? user.photoURL : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" } alt='userPhoto' />
        </header>
    )
}

export default Navbar
