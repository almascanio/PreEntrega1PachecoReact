import React from "react";
import "./Footer.css";
import { Outlet } from "react-router-dom";

export const Footer = () => {
    return ( 
        <>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Derechos Reservados</p>
            </footer>
        </>
    );
}; 