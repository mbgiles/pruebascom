import React from 'react'
import { Link } from 'react-router-dom'
import '../css/main.css';

export const Item = ( {producto} ) => {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <Link to={`/item/${producto.id}`}>Ver más</Link>
    </div>
  )
}
