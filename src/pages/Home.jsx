import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { productsMuebles } from "../lib/products.requests";
import {useState, useEffect } from "react";

export const Home = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        productsMuebles()
        .then(res => setProducts(res))

}, []);

return(
    <div>
        <p>LO NUEVO EN ¡A TODO MADERA!</p>
        <div className="container">
            <ItemListContainer products={products}/>
        </div>
    </div>
    );
};
