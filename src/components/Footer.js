export default function Footer() {
  return (
    <div id="main-content">
      <footer className="bg-white shadow-inner py-4 mt-8">
        <div className="container mx-auto centralize text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
