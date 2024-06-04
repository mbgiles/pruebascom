import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'
import logo from '/src/assets/te-de-mate.png'
import { Link } from 'react-router-dom'

export const Header = (props) => {

  return (
    <header className="header">
        <Link to="src/assets/te-de-mate.png"></Link>
        <Link to="/"><h1>Quiero mi mate</h1></Link>
        <NavBar />
        <Carrito numerito={props.numerito} />
    </header>
  )
}
