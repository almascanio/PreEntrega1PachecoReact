import React from "react";
import { Item } from "../Item/Item";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

export const ItemListContainer = ({ products }) => {
    const onAdd = (cantidad) => {
    alert(`Compraste ${cantidad} unidades`);
};

return (
    <div className="item-list">
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
    );
};
