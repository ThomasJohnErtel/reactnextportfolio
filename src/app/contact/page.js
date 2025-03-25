"use client"; // Adicione esta linha no topo do arquivo

import { useState } from "react";
import emailjs from "emailjs-com"; // Importando emailjs

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar e-mail usando o EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Substitua com seu Service ID do EmailJS
        "YOUR_TEMPLATE_ID", // Substitua com seu Template ID do EmailJS
        e.target, // O próprio formulário
        "YOUR_USER_ID" // Substitua com seu User ID do EmailJS
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          setFormData({ name: "", email: "", message: "" }); // Limpa o formulário após envio
        },
        (error) => {
          alert("Erro ao enviar a mensagem: " + error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Entre em Contato</h1>
        <p>Fique à vontade para me mandar uma mensagem!</p>

        <div className="social-links">
          <a href="https://br.linkedin.com/in/thomasjohnertel" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/ThomasJohnErtel?trk=public_profile_project-button" target="_blank" rel="noopener noreferrer">
            <img src="/github-icon.svg" alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/thomasjohnertel/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-icon.svg" alt="Instagram" />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}
