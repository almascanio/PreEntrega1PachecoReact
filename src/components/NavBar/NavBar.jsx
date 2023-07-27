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
                <ul style={{
                    listStyle: "none",
                    fontSize: 20
                }}>
                    <li className="nav_li">
                        <a className="nav_link "href="">Escritorios</a>
                      {/*   <NavLink>Escritorios</NavLink> */}
                    </li>
                    <li className="nav_li">
                        <a className="nav_link "href="">Sillas</a>
                    </li>
                    <li className="nav_li">
                        <a className="nav_link "href="">Placars</a>
                    </li>
                    <li className="nav_li">
                        <a className="nav_cart "href="">
                            <CardWidget/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        {/* < Outlet /> */}
        {/* < Footer /> */}
        </>
    );
};