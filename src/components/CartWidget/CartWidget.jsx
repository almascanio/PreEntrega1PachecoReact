import {BsCartFill} from "react-icons/bs";
/* Despues colocar el import del css */
import { useCartContext } from "../../state/Cart.context";
import { useNavigate } from "react-router-dom";

export const CardWidget = () => { 
    const { cartCantidad} = useCartContext();
    const nav = useNavigate();
        return (
        <div /* className="cartWidget" */ onClick={() => nav("/cart")}>
            <BsCartFill/> {cartCantidad ? <span /* className="cartWidget-cantidad" */>({cartCantidad})</span> : null }
        </div>
    );
};