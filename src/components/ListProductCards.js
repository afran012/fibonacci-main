import React from 'react'
import { useContext } from 'react'
import { CartContext } from "../Context/CartContext"
import { ProducData }  from "../Data/ProducData"
import "../styles/ListProductCards.css"


const ListProducCards = () => {
    
   const {agregarCarrito} = useContext(CartContext)

  return (
    <div className='productos-Container'>
      {ProducData.map( (product, i) => (
           <div className='productos-ContainerLeft' key={i}>
             <img src={product.imagen} alt={product.nombre} />
             <div>
             <p>
               {product.nombre} - ${product.precio}
             </p>
              </div>
              <button onClick={() => agregarCarrito(product)}> Agregar al Carrito</button>
           </div>
      ))}
    </div>
  )
}

export default ListProducCards;



