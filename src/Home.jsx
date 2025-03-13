import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null); // Pour gérer le message de succès ou d'erreur

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification si tous les champs sont remplis
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Tous les champs sont obligatoires!');
      return;
    }

    // Si tout est valide
    setFormStatus('Inscription réussie!');
    // Réinitialiser les champs du formulaire
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Hero Section en noir et blanc */}
      <section className="hero text-white text-center py-5" style={{ backgroundColor: '#000', width: '100%', margin: '0',height:"520px" }}>
        <div className="container-fluid">
          <h1 style={{ fontSize: '3rem' }}>Bienvenue sur MonEntreprise</h1>
          <p style={{ fontSize: '1.5rem' }}>Des solutions innovantes pour un avenir meilleur</p>
          <div className="mt-4">
            <a href="/Listproduit" className="btn btn-light btn-lg m-2" style={{ fontSize: '1.25rem', padding: '12px 30px' }}>Nos Services</a>
            <a href="#contact" className="btn btn-outline-light btn-lg m-2" style={{ fontSize: '1.25rem', padding: '12px 30px' }}>Contactez-nous</a>
          </div>
        </div>
      </section>

      {/* Section Nos Services en gris */}
      <section id="services" className="services py-5" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: '#333' }}>Nos Services</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="service-box p-4 bg-white rounded shadow-sm">
                <h3>Développement Web</h3>
                <p>Des solutions sur mesure pour vos besoins en développement web.</p>
                <a href="#contact" className="btn btn-dark">Contactez-nous</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box p-4 bg-white rounded shadow-sm">
                <h3>Consultation Stratégique</h3>
                <p>Des conseils avisés pour vous aider à prendre les meilleures décisions stratégiques.</p>
                <a href="#contact" className="btn btn-dark">Contactez-nous</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box p-4 bg-white rounded shadow-sm">
                <h3>Marketing Digital</h3>
                <p>Nous vous aidons à atteindre votre public cible avec des stratégies marketing efficaces.</p>
                <a href="#contact" className="btn btn-dark">Contactez-nous</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact en gris clair */}
      <section id="contact" className="contact py-5" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="container text-center">
          <h2 style={{ color: '#333' }}>Contactez-nous</h2>
          <p>Pour plus d'informations, remplissez le formulaire ci-dessous ou appelez-nous !</p>
          {/* Formulaire de contact */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              className="form-control mb-3"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              className="form-control mb-3"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Votre message"
              className="form-control mb-3"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className="btn btn-dark">Envoyer</button>
          </form>

          {/* Message de statut */}
          {formStatus && (
            <div className={`mt-3 alert ${formStatus === 'Inscription réussie!' ? 'alert-success' : 'alert-danger'}`}>
              {formStatus}
            </div>
          )}
        </div>
      </section>

      {/* Footer en noir */}
      <footer className="footer bg-dark text-white text-center py-4">
        <p>&copy; 2025 MonEntreprise. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Home;
