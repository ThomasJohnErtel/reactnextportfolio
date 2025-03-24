export default function Footer() {
    return (
      <footer className="bg-white shadow-inner py-4 mt-8">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }