import React from 'react';


function Produit() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      category: "Category 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$20.00",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      width:"100px",
      height:"20px",
    },
    {
      id: 2,
      title: "Product 2",
      category: "Category 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$30.00",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      width:"20px",
    },
    {
      id: 3,
      title: "Product 3",
      category: "Category 3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$25.00",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ];

  return (




    <div className="container py-5">
      <div className="row text-center mb-4">
        <div className="col-12">
          <h1 className="display-4">Discover Amazing Products</h1>
          <p className="lead">Explore our collection of unique and top-quality items.</p>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4" >
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 shadow-lg border-0 rounded-3">
              <div
                className="card-img-top"
                style={{
               
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: '0.5rem',
                  transition: 'transform 0.3s ease',
                }}
              ></div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle text-muted">{product.category}</h6>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text text-primary">{product.price}</p>
                  <a href="#buy" className="btn btn-dark btn-sm">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produit;
