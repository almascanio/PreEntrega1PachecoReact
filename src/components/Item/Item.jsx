import "./Item.css"

export const Item = ({

    title, 
    price, 
    img,
    
}) => {

    return(
        <div className="container-card">
            <div className="container-img">
                <img className="img" src={img} />
            </div>
            <div className="container-info">
                <span className="container-title">{title}</span>
                <br />
               {/*  <p className="container-description">{description}</p> */}
                <span className="container-price">${price}</span>
            </div>
            <div className="container-vm">
                <button className="container-btn">Ver mas</button>
            </div>
        </div>
    )
}