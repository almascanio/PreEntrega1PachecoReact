import { NavLink, Outlet } from "react-router-dom";
import { CardWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
    return ( <>
        <header className="container">
            <NavLink to="/"> 
            <h1 style={{
                fontSize: 30,
                fontWeight: "bolder",
            }}>A todo madera</h1>
            </NavLink>
            <nav className="nav_items">
                <NavLink 
                    to={"/category/escritorios"}
                    style={({ isActive}) => ({
                        color: isActive ? "red" : "yellow", /* Colocar codigos de color aca  */
                    })}
                >
                    Escritorios
                </NavLink>
                <NavLink 
                    to={"/category/sillas"}
                    style={({ isActive}) => ({
                        color: isActive ? "red" : "yellow",
                    })}
                >
                    Sillas
                </NavLink>
                <NavLink 
                    to={"/category/placars"}
                    style={({ isActive}) => ({
                        color: isActive ? "red" : "yellow",
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