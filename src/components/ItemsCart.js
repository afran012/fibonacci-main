import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "../styles/Item.css"


export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { deleteItemsCart, agregarCarrito } = useContext(CartContext);


  return (
    <div className="car-item">
      <img  className="imag" src={item.imagen} alt={item.nombre} />
      <div className="data-container">
        <div className="left">
          <p>{item.nombre}</p>
          <div className="buttons">
            <button onClick={() => agregarCarrito (item)}>
              AGREGAR
            </button>
            <button onClick={() => deleteItemsCart(item)}>
              ELIMINAR
            </button>
          </div>
        </div>
        <div className="right">
          <div className="div-right">{item.amount}</div>
          <p className="p-right">Total: ${item.amount * item.precio}</p>
        </div>
      </div>
    </div>
  );
};