import {useEffect, useState} from "react";
import { productsMueble } from "../lib/products.requests";
import {ItemCount} from "../components/ItemCount/ItemCount"

export const Detail = () => {
    const [ wood, setWood ] = useState({});

    useEffect(() => {
        productsMueble().then((res) => {
            setWood(res); 
        })
}, []);

return (
    <div className="container-detail">
        <div className="container-detail-todo">
            <div>
                <img className="img-detail" src={wood.img}/>
            </div>
            <div>
                <span className="container-title-di">{wood.title}</span>
                <p className="container-parrafo-di">{wood.description}</p>
                <span className="container-price-di">${wood.price}</span>
                <br />
                <span className="container-mensaje"> Quedan solo  {wood.stock} unidades</span>
                <ItemCount initial={1} stock={wood.stock} onAdd={() => alert("Se realizo la compra con exito")}/>
            </div>
        </div>
    </div>
)
};