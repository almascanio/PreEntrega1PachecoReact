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
        <div>
            <p className="homeTitle">LO NUEVO EN ¡A TODO MADERA!</p>
            <div>
                <ItemListContainer products={products}/>
            </div>
        </div>
        );
    };
