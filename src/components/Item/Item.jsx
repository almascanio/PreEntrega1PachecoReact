import "./Item.css"

export const Item = ({

    title, 
    price, 
    img
    
}) => {

    return(
        <div>
            <div>
                <img src={img} />
            </div>
            <div>
                <span>{title}</span>
                <span>${price}</span>
            </div>
        </div>
    )
}