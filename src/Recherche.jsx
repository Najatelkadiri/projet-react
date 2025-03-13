import { useState } from "react";
import './Recherche.css';  // Nous allons ajouter ce fichier CSS

function Recherche({ info }) {
  const [produit2, setProduit2] = useState([]);
  const [chercher, setChercher] = useState('');
  const [rechercheEffectuee, setRechercheEffectuee] = useState(false);

  // Fonction pour rechercher les produits par catégorie
  function rechercheProduits() {
    if (chercher !== "") {
      let newProduit = info.filter(function (element) {
        return element.category === chercher;
      });
      setProduit2(newProduit);
      setRechercheEffectuee(true);
    }
  }

  return (
    <div className="recherche-container">
      <h1>Recherche par Catégorie:</h1>
      <div className="search-bar">
        <input
          onChange={(e) => setChercher(e.target.value)}
          type="search"
          name="search"
          placeholder="Rechercher une catégorie..."
        />
        <button onClick={() => rechercheProduits()}>Recherche</button>
      </div>

      {/* Si des produits sont trouvés, afficher la table */}
      {produit2.length !== 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>Catégorie</th>
              <th>Description</th>
              <th>ID</th>
              <th>Prix</th>
              <th>Note</th>
              <th>Titre</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {produit2.map(function (item) {
              return (
                <tr key={item.id}>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>{item.id}</td>
                  <td>{item.price}</td>
                  <td>{item.rating?.rate}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.image} width="50" alt={item.title} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        // Si aucun produit n'est trouvé après la recherche
        rechercheEffectuee && <h2 style={{ color: "red" }}>Aucun produit trouvé</h2>
      )}
    </div>
  );
}

export default Recherche;
