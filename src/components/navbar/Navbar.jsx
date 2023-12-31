import React from 'react'
import './navbar.scss'
import { NavLink, useLocation } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const location = useLocation()
    const { user } = useSelector((state) => state.user)
    function stringAvatar(name) {
        let n1 = name?.split(' ')[0][0]
        let n2 = ''
        if (name?.split(' ')[1] !== undefined) {
            n2 = name?.split(' ')[1][0];
        }
        return `${n1}${n2 === '' || n2 === undefined ? '' : n2}`


        // return `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}`

    }

    return (
        <div className='navbar'>
            <div className="logo">
                Challenge <span>HUB</span>
            </div>
            <div className="menus">
                <NavLink to={'/join'} ><button className={`createandjoin ${location.pathname === '/join' ? 'active' : ''}`}>Create/Join</button></NavLink>
                <NavLink to={'/'}><button className={`menu_button ${location.pathname === '/' ? 'active' : ''}`}>Dashboard</button></NavLink>
                {/* <NavLink to={'/topChallenges'}><button className="menu_button">Top Challenges</button></NavLink> */}
                <NavLink to={'/profile'}><button className="menu_button">Profile</button></NavLink>
                <span className="avatar">{stringAvatar(user?.name) === undefined? "":stringAvatar(user?.name)}</span>
                {/* <Avatar {...stringAvatar(user?.name)} /> */}
                {/* <img src="https://lh3.googleusercontent.com/a/ACg8ocJPYPJZNshOCFSSyOdIRN3UwPTYqF_8Vzf9zHnTsVfAxQ=s96-c" alt="" /> */}
            </div>
        </div>
    )
}


export default Navbar
