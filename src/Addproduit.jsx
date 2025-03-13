import React, { useState } from 'react';

function AddProduit({ ajouterProduit }) {
  const [newProduct, setNewProduct] = useState({
    category: '',
    description: '',
    price: '',
    rating: '',
    title: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ajouterProduit(newProduct); // Add product function call
    setNewProduct({
      category: '',
      description: '',
      price: '',
      rating: '',
      title: '',
      image: '',
    }); // Reset form after submission
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.header}>Ajouter un produit</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="category" style={styles.label}>Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newProduct.category}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="price" style={styles.label}>Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="rating" style={styles.label}>Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={newProduct.rating}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="image" style={styles.label}>Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Ajouter le produit
        </button>
      </form>
    </div>
  );
}

const styles = {
  formContainer: {
    backgroundColor: '#f9f9f9',  // Light background
    padding: '40px 60px',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '1200px',
    margin: '50px auto',
   
  },
  header: {
    color: '#222',
    fontSize: '28px',
    fontWeight: '900',
    marginBottom: '20px',
    textAlign: 'center',
   
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    color: '#34495e',
    fontSize: '16px',
    fontWeight: '500',
  },
  input: {
    padding: '7px ',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    color: '#333',
    outline: 'none',
    transition: 'border 0.3s ease-in-out',
  },
  inputFocus: {
    borderColor: '#3498db',  // Focus color
  },
  button: {
    backgroundColor: '#000',  // Bold red for the button
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '8px ',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  buttonHover: {
    backgroundColor: '#c0392b',  // Darker red on hover
  },
};

export default AddProduit;
