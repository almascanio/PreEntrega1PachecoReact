import React, { useEffect } from "react";
import { useCartContext } from "../state/Cart.context";

export const Cart = () => {
  const { cart, limpiarCarrito, precioTotal, eliminarProducto } = useCartContext();

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  return (
    <div>
      <div>
        {cart.length ? (
          <div>
            <button onClick={limpiarCarrito}>Vaciar Carrito</button>
            <span>
              Total{" "}
              {precioTotal.toLocaleString("es-AR", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </span>
            {cart.map((item) => (
              <div 
                key={item.id}
                onClick={() => eliminarProducto(item.id)}
              >
                Nombre del producto {item.title}
              </div>
            ))}
          </div>
        ) : (
          <h1>Carrito Vacio</h1>
        )}
      </div>
    </div>
  );
};
