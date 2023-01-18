import React from 'react'

export default function User() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Users Panel</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>Peliculas alquiladas</h3>
            <p>Listado</p>
          </div>
          <div className="col-sm-4">
            <h3>Peliculas Favoritas</h3>
            <p>Listado</p>
          </div>
          <div className="col-sm-4">
            <h3>Carrito de compras</h3>
            <p>Lista de peliculas a alquilar</p>
          </div>
        </div>
      </div>
    </div>
  )
}
