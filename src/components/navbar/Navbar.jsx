import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                Challenge <span>HUB</span>
            </div>
            <div className="menus">
                <button className="createandjoin">Create/Join</button>
                <button className="menu_button">Dashboard</button>
                <button className="menu_button">Top Challenges</button>
                <button className="menu_button">Edit Profile</button>
                <img src="https://lh3.googleusercontent.com/a/ACg8ocJPYPJZNshOCFSSyOdIRN3UwPTYqF_8Vzf9zHnTsVfAxQ=s96-c" alt="" />
            </div>
        </div>
    )
}


export default Navbar
