import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div> <a href="/">Profile</a> </div>
            <div> <a href="/">Message</a> </div>
            <div> <a href="/">News</a> </div>
            <div> <a href="/">Music</a> </div>
            <div> <a href="/">Settings</a> </div>
            {/* <h3>It is {new Date().toLocaleTimeString()}.</h3> */}
        </nav>
    );
}

export default Navbar;