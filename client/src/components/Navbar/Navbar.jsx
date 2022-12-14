import React from "react";
import styles from "./Navbar.module.scss";
import IMAGES from "../../constants/images";
import {
    MAIN_ROUTE,
    PRODUCT_ROUTE,
    ABOUT_ROUTE,
    CONTACT_ROUTE,
    AUTH_ROUTE,
    CART_ROUTE
} from "../../utils/consts";
import {useSelector} from "react-redux";
import useLogout from "../../hooks/useLogout";
import {isLoggedInSelector} from "../../store/authSlice"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const isLoggedIn = useSelector(isLoggedInSelector());
    const handleLogout = useLogout();

    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.logo}>
                <img width={150} src={IMAGES.logo} alt="logo"/>
            </a>
            <ul className={styles.navLinks}>
                <li>
                    <a href={MAIN_ROUTE}>home</a>
                </li>
                <li>
                    <a href={PRODUCT_ROUTE}>shop</a>
                </li>
                <li>
                    <a href={ABOUT_ROUTE}>about</a>
                </li>
                <li>
                    <NavLink
                        to={CONTACT_ROUTE}
                        style={({ isActive, isPending }) => {
                            return {
                                color: isActive ? "red" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                    >contact</NavLink>
                    {/*<a href={CONTACT_ROUTE}>contact</a>*/}
                </li>
            </ul>
            <ul className={styles.navLinks}>
                {isLoggedIn ?
                    (
                        <li>
                            <button className={styles.button} onClick={handleLogout}>logout</button>
                        </li>
                    ) : (
                        <li>
                            <a href={AUTH_ROUTE + "/signup"}>signup</a>
                        </li>
                    )
                }
                <li>
                    <a href={CART_ROUTE}>cart</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
