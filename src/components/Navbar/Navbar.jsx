import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="">Settings</NavLink>
            </div>
            {/*<div>
                <h2> Friends</h2>
                <div><img src="https://m.media-amazon.com/images/M/MV5BMTc5NzAxNzU0OV5BMl5BanBnXkFtZTcwMzk0MTUzNA@@._V1_.jpg"/></div>
                <div><img src="https://m.media-amazon.com/images/M/MV5BMTc5NzAxNzU0OV5BMl5BanBnXkFtZTcwMzk0MTUzNA@@._V1_.jpg"/></div>
                <div><img src="https://m.media-amazon.com/images/M/MV5BMTc5NzAxNzU0OV5BMl5BanBnXkFtZTcwMzk0MTUzNA@@._V1_.jpg"/></div>
            </div>*/}
        </nav>
    )
}

export default Navbar;