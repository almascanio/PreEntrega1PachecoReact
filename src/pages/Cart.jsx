import React, { useState } from "react";  
import { useCartContext} from "../state/Cart.context";
import { addOrder } from "../lib/orders.requests";
import { updateManyWood } from "../lib/products.requests";
import { LocaleString } from "../components/LocaleString/LocaleString";

export const Cart = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const { cart, limpiarCarrito, precioTotal, eliminarProduct } = useCartContext();

  const createOrder = async () => {

    if (!isNameValid(name) || !isNameValid(surname) || !isEmailValid(email) || email !== email2 || !isPhoneValid(phone)) 
    {
      return;
    }

    const items = cart.map(({id, title, cantidad, price}) => ({
      id,
      title,
      cantidad,
      price
    }));

    const order = {
      buyer : { name, surname, email, email2, phone },
      items : items,
      total: precioTotal,
    };

    const id = await addOrder(order);

    await updateManyWood(items);

    setOrderId(id);

    limpiarCarrito();

  }; 

  const isNameValid = (value) => /^[a-zA-Z\s]*$/.test(value);
  const isEmailValid = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isPhoneValid = (value) => /^[0-9]{10}$/.test(value);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(newEmail === email2 ? "" : "Los correos no coinciden");
  };

  const handleEmail2Change = (e) => {
    const newEmail2 = e.target.value;
    setEmail2(newEmail2);
    setEmailError(email === newEmail2 ? "" : "Los correos no coinciden");
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    setPhoneError(isPhoneValid(newPhone) ? "" : "Teléfono inválido");
  };

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
                    <LocaleString numero={item.price}/>
                  </span>
                  <span>
                    <LocaleString numero={item.cantidad * item.price}/>
                  </span>
                  <div>
                    <button className="cartDeleteProduct" key={item.id} onClick={() => eliminarProduct(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="cartTotal">
                <span>Total</span>{" "}
                <span>
                  <LocaleString numero={precioTotal}/>
                </span>
              </div>
            </div>
            <div className="form">
              <div>
                <span className="formSpan">Nombre</span>
                <input className="formInput" placeholder="Nombre" required onChange={(e) => setName(e.target.value)}/>
              </div>
              <div>
                <span className="formSpan">Apellido</span>
                <input className="formInput" placeholder="Apellido" required onChange={(e) => setSurname(e.target.value)}/>
              </div>
              <div>
                <span className="formSpan">Correo</span>
                <input className="formInput" placeholder="Correo" required value={email} onChange={handleEmailChange}/>
                {emailError && <p className="errorText">{emailError}</p>}
              </div>
              <div>
                <span className="formSpan">Repetir Correo</span>
                <input className="formInput" placeholder="Repetir Correo" required value={email2} onChange={handleEmail2Change}/>
                {emailError && <p className="errorText">{emailError}</p>}
              </div>
              <div>
                <span className="formSpan">Telefono</span>
                <input className="formInput" placeholder="Telefono" required  value={phone} onChange={handlePhoneChange}/>
                {phoneError && <p className="errorText">{phoneError}</p>}
              </div>
              <button className="cartItemButton formButton"
              onClick={createOrder}> 
              Realizar Pedido
              </button>
            </div>
          </>
        ) : (
          <>
          {orderId ? (
            <p>¡Pedido realizado con éxito! Número de compra: {orderId}</p>
          ) : (
            <p>Tu carrito está vacío</p>
          )}
        </>
      )}
    </div>
  </div>
);
};