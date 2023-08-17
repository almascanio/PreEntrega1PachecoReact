import { useEffect, useState } from "react";
import { productsMueble } from "../lib/products.requests";
import { ItemCount } from "../components/ItemCount/ItemCount"
import { useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";
import { Loader } from "../components/Loader/Loader"

export const Detail = () => {
    const {id} = useParams();
    const [ wood, setWood ] = useState({});
    const {addProduct, stockCarrito} = useCartContext();

    useEffect(() => {
        productsMueble(id).then((res) => {
            setWood(res); 
        })
}, []);

const handleAdd = (cantidad) => {
    addProduct(wood, cantidad);
};

if(!Object.keys(wood).length) return < Loader />

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
                <ItemCount initial={1} stock={wood.stock - (stockCarrito?.(id)?.cantidad || 0)} onAdd={handleAdd}/>
            </div>
        </div>
    </div>
)
};