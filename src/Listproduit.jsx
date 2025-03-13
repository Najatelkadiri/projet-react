import './Listproduit.css';

function Listproduit({ info, supprimerProduit }) {
  return (
    <>
      <h1>Liste de produits:</h1>
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
            <th>Action</th> {/* Add this column for the delete button */}
          </tr>
        </thead>
        <tbody>
          {info.map(function(item) {
            return (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.rating?.rate}</td>
                <td>{item.title}</td>
                <td><img src={item.image} width="50" alt={item.title} /></td>
                <td>
                  {/* Add the Supprimer button */}
                  <button onClick={() => supprimerProduit(item.id)} style={styles.button}>
                    Supprimer
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// Styles for the Supprimer button
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
};

export default Listproduit;
