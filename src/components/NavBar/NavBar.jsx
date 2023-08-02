import { NavLink, Outlet } from "react-router-dom";
import { CardWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
    return ( <>
        <header className="container">
            <h1 style={{
                fontSize: 30,
                fontWeight: "bolder",
            }}>A todo madera</h1>
            <nav>
                <NavLink to={"/category/escritorios"}>Escritorios</NavLink>
                <NavLink to={"/category/sillas"}>Sillas</NavLink>
                <NavLink to={"/category/placars"}>Placars</NavLink>
            </nav>
            < CardWidget/>
        </header>
        < Outlet />
        {/* < Footer /> */}
        </>
    );
};