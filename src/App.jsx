import { useEffect, useState } from "react";
import Produit from "./Produit.jsx";
import Listproduit from "./Listproduit.jsx";
import Home from "./Home.jsx";
import Recherche from "./Recherche.jsx";
import Menu from "./Menu.jsx";
import Addproduit from "./Addproduit.jsx";
import Updateproduit from "./Updateproduit.jsx";

import {  Route, Routes } from "react-router-dom"; 



function App() {
  const [produits, setProduits] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProduits(data);
      });
  }, []);


  const supprimerProduit = (id) => {
    setProduits(produits.filter(produit => produit.id !== id));
  };



  const modifierProduit = (produit) => {
    alert(`Modifier le produit: ${produit.title}`);
    // Vous pouvez ouvrir un formulaire ou autre logique pour modifier ce produit
    setSelectedProduct(produit);
  };

  const ajouterProduit = (product) => {
    const newProduct = { ...product, id: produits.length + 1 }; // Créer un nouvel ID unique
    setProduits((prevProducts) => [...prevProducts, newProduct]); // Ajouter le produit à la liste
  };


  

  return ( 
    <>
     <Menu />
        
        <Routes>
           <Route path="/" element={<Home   />} />
          <Route path="/Produit" element={<Produit   />} />
          <Route path="/Listproduit" element={<Listproduit info={produits}   supprimerProduit={supprimerProduit}  />} />
          <Route path="/Recherche" element={<Recherche info={produits} />} />
          <Route path="/Addproduit" element={<Addproduit info={produits} ajouterProduit={ajouterProduit}  />} />
          <Route path="/Updateproduit" element={<Updateproduit info={produits} modifierProduit={modifierProduit}  />} /> 

        </Routes> 


    
       
 
    </>
   
       
  
  );
}

export default App;
