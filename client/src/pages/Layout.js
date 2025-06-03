import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./css/Layout.scss";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Main">Main Again</Link>
                    </li>
                    <li>
                        <Link to="/Kata">Kata</Link>
                    </li>
                    <li>
                        <Link to="/Hira">Hira</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
