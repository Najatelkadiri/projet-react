import { Link } from "react-router-dom";
import React from "react";
import './menu.css'

function Menu() {
  return (
    <>
    
      <ul>
        <li><Link to="">Home</Link></li>
        <li><Link to="Produit">produits</Link></li>
        <li><Link to="Listproduit">Listproduit</Link></li>
        <li><Link to="Recherche">Recherche</Link></li>
        <li><Link to="Addproduit">Ajouterproduit</Link></li>
        <li><Link to="Updateproduit">Modifierproduit</Link></li>
      </ul>
    </>



  );
}

export default Menu;
