import React from 'react'
import './navbar.scss'
import {NavLink, useLocation} from 'react-router-dom'


const Navbar = () => {
    const location = useLocation()

    return (
        <div className='navbar'>
            <div className="logo">
                Challenge <span>HUB</span>
            </div>
            <div className="menus">
                <NavLink to={'/join'} ><button className={`createandjoin ${location.pathname==='/join' ? 'active' :''}`}>Create/Join</button></NavLink>
                <NavLink to={'/'}><button className={`menu_button ${location.pathname==='/' ? 'active' :''}`}>Dashboard</button></NavLink>
                <NavLink to={'/topChallenges'}><button className="menu_button">Top Challenges</button></NavLink>
                <button className="menu_button">Edit Profile</button>
                <img src="https://lh3.googleusercontent.com/a/ACg8ocJPYPJZNshOCFSSyOdIRN3UwPTYqF_8Vzf9zHnTsVfAxQ=s96-c" alt="" />
            </div>
        </div>
    )
}


export default Navbar
