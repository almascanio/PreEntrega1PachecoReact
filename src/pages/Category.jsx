import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsMuebles } from "../lib/products.requests";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";


    export const Category = () => {
        const {id} = useParams();
        const [ products, setProducts ] = useState([]);
    
        useEffect(() => {
            productsMuebles(id)
            .then(res => setProducts(res))
    
    }, [id]);
    
    return(
        <div className="container-home">
            <p className="container-p">LO NUEVO EN ¡A TODO MADERA!</p>
            <div className="container-produc">
                <ItemListContainer products={products}/>
            </div>
        </div>
        );
    };
