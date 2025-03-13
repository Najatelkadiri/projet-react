import React, { useState } from 'react';
import './Listproduit.css';

function Updateproduit({ info, modifierProduit }) {
  const [selectedProduct, setSelectedProduct] = useState(null); // État pour le produit sélectionné
  const [updatedProduct, setUpdatedProduct] = useState({
    category: '',
    description: '',
    price: '',
    rating: '',
    title: '',
    image: '',
  });

  // Fonction pour afficher le formulaire de modification pour un produit
  const handleEditClick = (product) => {
    setSelectedProduct(product);  // Sélectionner le produit à modifier
    setUpdatedProduct({ ...product });  // Remplir les champs avec les informations actuelles
  };

  // Fonction pour gérer les changements dans le formulaire de modification
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Fonction pour soumettre les modifications
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produit mis à jour : ", updatedProduct); // Log pour المراجعة
    modifierProduit(updatedProduct);  // Appel de la fonction pour modifier le produit
    setSelectedProduct(null);  // Ferme le formulaire après soumission
  };

  return (
    <>
      {/* Formulaire de modification affiché au-dessus du tableau */}
      {selectedProduct && (
        <div style={styles.formContainer}>
          <h2>Modifier le produit</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={updatedProduct.category}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={updatedProduct.description}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={updatedProduct.price}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={updatedProduct.rating}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={updatedProduct.title}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="image">Image URL:</label>
              <input
                type="text"
                id="image"
                name="image"
                value={updatedProduct.image}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" style={styles.button}>
              Enregistrer les modifications
            </button>
          </form>
        </div>
      )}

      <h1>Liste de Produits :</h1>
      <table border="2">
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>ID</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Title</th>
            <th>Image</th>
            <th>Action</th> {/* Colonne d'action pour les boutons */}
          </tr>
        </thead>
        <tbody>
          {info.map((item) => (
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
              <td>
                {/* Bouton Modifier */}
                <button onClick={() => handleEditClick(item)} style={styles.button}>
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// Styles du bouton et du formulaire
const styles = {
  button: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  formContainer: {
    marginTop: '50px',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    maxWidth: '1200px',
    margin: 'auto',
    border: '1px solid #ddd',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  label: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    color: '#444',
  },
};

export default Updateproduit;
