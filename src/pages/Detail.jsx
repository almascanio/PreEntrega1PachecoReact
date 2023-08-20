import { useEffect, useState } from "react";
import { productsMueble } from "../lib/products.requests";
import { ItemCount } from "../components/ItemCount/ItemCount"
import { useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";
import { Loader } from "../components/Loader/Loader"
import { LocaleString } from "../components/LocaleString/LocaleString";

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
    <div className="detailContainer">
        <div className="detail">
            <div className="detailImg">
                <img className="detailImgImg" src={wood.img}/>
            </div>
            <div className="detailTodo">
                <span className="detailTitle">{wood.title}</span>
                <p className="detailDescription">{wood.description}</p>
                <span className="detailPrice">
                    <LocaleString numero={wood.price}/>
                </span>
                <br />
                <span className="detailMensaje"> Quedan solo {wood.stock} unidades</span>
                <ItemCount initial={1} stock={wood.stock - (stockCarrito?.(id)?.cantidad || 0)} onAdd={handleAdd}/>
            </div>
        </div>
    </div>
    )
};