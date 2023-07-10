import { CardWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <header className="container">
            <h1 style={{
                fontSize: 30,
                fontWeight: "bolder",
            }}>Nombre de la web</h1>
            <nav>
                <ul style={{
                    listStyle: "none",
                    fontSize: 20
                }}>
                    <li className="nav_li">
                        <a className="nav_link "href="">Nosotros</a>
                    </li>
                    <li className="nav_li">
                        <a className="nav_link "href="">Productos</a>
                    </li>
                    <li className="nav_li">
                        <a className="nav_link "href="">Contacto</a>
                    </li>
                    <li className="nav_li">
                        <a className="nav_cart "href="">
                            <CardWidget/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};