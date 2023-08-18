import React from "react";
import { Item } from "../Item/Item";
import "./ItemListContainer.css";

export const ItemListContainer = ({ products}) => {

return (
    <div className="itemListContainer">
        <div className="itemList">
            {products.map((product) => (
            <Item
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                img={product.img}
            />
            ))}
        </div>
    </div>
    );
};
