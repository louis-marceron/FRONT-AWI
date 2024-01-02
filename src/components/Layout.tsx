import React from 'react';
import '../styles/Layout.css'
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <div className = "Layout">
                <header>
                <div className="main-title">
                    <h1>AWI Project</h1>
                </div>

                <ul className="side-bar">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
                </header>
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;