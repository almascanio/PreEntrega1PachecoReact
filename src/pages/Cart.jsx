import React, { useState } from "react";  
import { useCartContext} from "../state/Cart.context";
import { addOrder } from "../lib/orders.requests";
import { updateManyWood } from "../lib/products.requests";

export const Cart = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");

  const { cart, limpiarCarrito, precioTotal, eliminarProduct } = useCartContext();

  const createOrder = async () => {
    const items = cart.map(({id, title, cantidad, price}) => ({
      id,
      title,
      cantidad,
      price
    }));

    const order = {
      buyer : {name, surname, email, email2, phone},
      items : items,
      total: precioTotal,
    }
    const id = await addOrder(order);

    await updateManyWood(items);
    console.log(id);

    limpiarCarrito();
  }
/*   useEffect(() => {
    console.log({ cart });
  }, [cart]);
 */

 /*  const isNameValid = (value) => /^[a-zA-Z\s]*$/.test(value);
  const isEmailValid = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isPhoneValid = (value) => /^[0-9]{10}$/.test(value);

  const handlePedidoClick = () => {
    if (isNameValid(name) && isNameValid(surname) && isEmailValid(email) && isPhoneValid(phone)) {
      alert("Pedido realizado correctamente");
    } else {
      alert("Por favor, ingrese valores válidos para todos los campos");
    }
  }; */

  return (
    <div className="cart">
      <div className="cartContainer">
        {cart.length ? (
          <>
            <div className="cartDelButton">
              <button className="cartButton" onClick={limpiarCarrito}>Vaciar Carrito</button>
            </div>
            <div className="cartProducts">
              <div className="cartNombres">
                <span>Producto</span>
                <span>Cantidad</span>
                <span>Precio</span>
                <span>Subtotal</span>
              </div>

              {cart.map((item) => (
                <div className="cartItem" key={item.id}>
                  <span>{item.title}</span>
                  <span>{item.cantidad}</span>
                  <span>
                    $
                    {item.price.toLocaleString("es-AR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span>
                    $
                    {(item.cantidad * item.price).toLocaleString("es-AR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <div>
                    <button className="cartDeleteProduct" key={item.id} onClick={() => eliminarProduct(item.id)}>
                      Eliminar
                    </button>
                  </div>
                 {/*  <button className="cartItemDelete" onClick={() => eliminarProduct(item.id)}>
                    < MdDelete />
                  </button> */}
                </div>
              ))}
            </div>
            <div>
              <div className="cartTotal">
                <span>Total</span>{" "}
                <span>
                  $
                  {precioTotal.toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
            <div className="form">
              <div>
                <span className="formSpan">Nombre</span>
                <input className="formInput" placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
              </div>
              <div>
                <span className="formSpan">Apellido</span>
                <input className="formInput" placeholder="Apellido" onChange={(e) => setSurname(e.target.value)}/>
              </div>
              <div>
                <span className="formSpan">Correo</span>
                <input className="formInput" placeholder="Correo" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div>
                <span className="formSpan">Repetir Correo</span>
                <input className="formInput" placeholder="Repetir Correo" onChange={(e) => setEmail2(e.target.value)}/>
              </div>
              <div>
                <span className="formSpan">Telefono</span>
                <input className="formInput" placeholder="Telefono" onChange={(e) => setPhone(e.target.value)}/>
              </div>
              <button className="cartItemButton formButton"
              onClick={createOrder}> 
              Realizar Pedido
              </button>
            </div>
          </>
        ) : (
          <p>Tu carrito está vacío</p>
        )}
      </div>
    </div>
  );
};
