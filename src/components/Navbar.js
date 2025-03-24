import Link from "next/link";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">Meu Portfólio</h1>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-400 transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-400 transition-all">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-gray-400 transition-all">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-white hover:text-gray-400 transition-all">
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-400 transition-all">
              Contato
            </Link>
          </li>
        </ul>

        {/* Ícones Sociais */}
        <div className="flex space-x-4">
          <Link href="#" className="text-white hover:text-gray-400 transition-all">
            <FaGoogle size={18} />
          </Link>
          <Link href="#" className="text-white hover:text-gray-400 transition-all">
            <FaFacebookF size={18} />
          </Link>
          <Link href="#" className="text-white hover:text-gray-400 transition-all">
            <FaTwitter size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
}