'use client';

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Meus Projetos</h1>

      <div className="project-card">
        <h2 className="project-title">Crachá feito em HTML, CSS e JavaScript</h2>
        <p className="project-description">
          Um crachá dinâmico feito com HTML, CSS e JavaScript, ideal para personalização de eventos e conferências. O projeto demonstra o uso de interatividade com JavaScript para personalizar a aparência do crachá.
        </p>
        <a
          href="https://thomasjohnertel.github.io/Cracha-NLW/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Acessar Projeto
        </a>
      </div>

      <div className="project-card">
        <h2 className="project-title">Projeto Integrador da Faculdade (HTML, CSS e Bootstrap)</h2>
        <p className="project-description">
          Projeto realizado no contexto acadêmico, desenvolvido utilizando HTML, CSS e o framework Bootstrap. O projeto apresenta uma solução visual para a área de alimentos, destacando a importância de um design responsivo.
        </p>
        <a
          href="https://thomasjohnertel.github.io/Paes_do_vovo/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Acessar Projeto
        </a>
      </div>

      <div className="project-card">
        <h2 className="project-title">História da Revolução Gaúcha</h2>
        <p className="project-description">
          Trabalho escolar de história, apresentando uma visão breve sobre a Revolução Gaúcha, com informações e imagens para contextualizar o evento histórico.
        </p>
        <a
          href="https://thomasjohnertel.github.io/Revolucao_Gaucha/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Acessar Projeto
        </a>
      </div>

      <div className="project-card">
        <h2 className="project-title">Trabalho Escolar de Biologia: Plantas e suas Características</h2>
        <p className="project-description">
          Trabalho escolar de biologia, abordando as características das plantas e sua importância para o meio ambiente. O projeto explora a diversidade de espécies vegetais e suas adaptações.
        </p>
        <a
          href="https://thomasjohnertel.github.io/Plantas_e_Caracteristicas/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Acessar Projeto
        </a>
      </div>
    </div>
  );
}