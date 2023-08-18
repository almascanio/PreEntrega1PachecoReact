import { BsCartFill } from "react-icons/bs";
import { useCartContext } from "../../state/Cart.context";
import { useNavigate } from "react-router-dom";

export const CardWidget = () => { 
    const { cartCantidad} = useCartContext();
    const nav = useNavigate();
        return (
        <div onClick={() => nav("/cart")}>
            <BsCartFill style={{
                fontSize: 30,
                color: "#261D19",
                cursor: "pointer"
            }}/> {cartCantidad ? <span>({cartCantidad})</span> : null }
        </div>
    );
};