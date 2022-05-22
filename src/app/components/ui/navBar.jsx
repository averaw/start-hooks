import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                        Main
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/users"
                    >
                        Users
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/useRef"
                    >
                        useRef
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/useRefExercise"
                    >
                        useRefExercise
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/useMemo"
                    >
                        useMemo
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/useCallback"
                    >
                        useCallback
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/hoc"
                    >
                        HOC
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/memo"
                    >
                        React.memo
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/cloneElement"
                    >
                        React.cloneElement
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/children"
                    >
                        React Children
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/childrenExercise"
                    >
                        Children Exercise
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
