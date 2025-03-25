import React from 'react';
import Link from 'next/link';
import './globals.css'; // Certifique-se de que o CSS esteja sendo importado corretamente

export default function HomePage() {
  return (
    <section className="home-container">
      <h1>Bem-vindo ao meu Portfólio</h1>
      <p>
        Aqui você vai encontrar uma visão geral dos meus projetos, habilidades e
        como você pode entrar em contato comigo. Este é um portfólio desenvolvido
        com as tecnologias mais recentes e uma estrutura moderna.
      </p>

      <section className="skills-section">
        <h2>Minhas Habilidades</h2>
        <p>Desenvolvedor Front-end com experiência em React, Next.js, JavaScript, HTML e CSS.</p>
      </section>

      <section className="projects-section">
        <h2>Projetos</h2>
        <p>Veja alguns dos meus projetos anteriores, onde apliquei minhas habilidades para criar soluções criativas e eficazes.</p>
      </section>

      <section className="contact-section">
        <h2>Fale Comigo</h2>
        <p>Gostaria de saber mais ou discutir uma possível colaboração? Entre em contato comigo!</p>
        <Link href="/contact" className="btn contact-btn">
          Fale comigo
        </Link>
      </section>
    </section>
  );
}
