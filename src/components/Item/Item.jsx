import { useNavigate } from "react-router-dom"
import "./Item.css"

export const Item = ({
    title, 
    price, 
    id,
    img,
}) => {
    const navigate = useNavigate();
    return(
        <div className="item" onClick={() => navigate(`/item/${id}`)}>
            <div>
                <img src={img} />
            </div>
            <div className="itemCard">
                <span className="itemTitle">{title}</span>
                <br />
                <span className="itemPrice"></span>
                $
                {price.toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
            </div>
            <div className="itemBtn">
                <button className="itemVerMas">Ver mas</button>
            </div>
        </div>
    )
}