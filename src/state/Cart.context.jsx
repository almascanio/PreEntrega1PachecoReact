import { createContext, useContext, useMemo, useState} from "react";

const CartContext = createContext ([]);

export const useCartContext = () => useContext(CartContext);

/* 
Añadir, Leer, Eliminar, Limpiar
*/

// Añadir y leer todo 
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const stockCarrito = (id) => cart.find((product) => product.id === id);

    const addProduct = (item, cantidad) => {

        const element = stockCarrito(item.id);
            if(!element) return setCart([ ...cart, { ...item, cantidad, }]);            
            

        const nuevoCarrito = cart.map((product) => 
                product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad } : product );
                    setCart(nuevoCarrito);
    };   

    // Eliminar del carrito (Debo hacer el detalle del carrito para poder eliminar con el boton)
    const eliminarProduct = (id) => {
        const nuevoCarrito = cart.filter((product) => product.id !== id);
        setCart(nuevoCarrito);
    };
    
    // Limpiar el carrito (Vaciar)

    const limpiarCarrito = () => setCart([]);

    //Agg al Cart
    const cartCantidad = useMemo(() => cart.reduce(( acumulador, item) => acumulador + item.cantidad, 0), [cart]);

    //Precio Total

    const precioTotal = useMemo(() => cart.reduce((acumulador, item) => acumulador + item.price * item.cantidad, 0), [cart]);

const value = {
    cart,
    addProduct,
    cartCantidad,
    eliminarProduct,
    limpiarCarrito, 
    precioTotal,
    stockCarrito
};

    return (
    <CartContext.Provider 
        value = {value} 
        displayName = "CartContext"
    >
        {children}
    </CartContext.Provider>
    );
};