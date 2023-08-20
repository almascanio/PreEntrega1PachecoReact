import { NavLink, Outlet } from "react-router-dom";
import { CardWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
    return ( <>
        <header className="containerHeader">
            <NavLink to="/"> 
                <img className="logo" src="img/logo.png" alt="" />
            </NavLink>
            <nav className="nav_items">
                <NavLink 
                    to={"/category/escritorios"}
                    style={({ isActive}) => ({
                        color: isActive ? "#8C5C4A" : "#261D19",
                        fontWeight: "bolder", 
                        textDecoration: "none",
                        fontSize: 22
                    })}
                >
                    Escritorios
                </NavLink>
                <NavLink 
                    to={"/category/sillas"}
                    style={({ isActive}) => ({
                        color: isActive ? "#8C5C4A" : "#261D19",
                        fontWeight: "bolder", 
                        textDecoration: "none",
                        fontSize: 22
                    })}
                >
                    Sillas
                </NavLink>
                <NavLink 
                    to={"/category/placars"}
                    style={({ isActive}) => ({
                        color: isActive ? "#8C5C4A" : "#261D19",
                        fontWeight: "bolder", 
                        textDecoration: "none",
                        fontSize: 22
                    })}
                >
                    Placars
                </NavLink>
            </nav>
            < CardWidget/>
        </header>
        < Outlet />
        {/* < Footer /> */}
        </>
    );
};