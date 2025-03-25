import Link from "next/link";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="navbar-logo">Thomas John Ertel</h1>

        {/* Links */}
        <ul className="navbar-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/projects">Projetos</Link>
          </li>
          <li>  
            <Link href="/skills">Habilidades</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>

        <div className="navbar-icons">
  <Link href="https://br.linkedin.com/in/thomasjohnertel">
    <FaLinkedin size={18} style={{ color: 'white' }} />
  </Link>
  <Link href="https://github.com/ThomasJohnErtel?trk=public_profile_project-button">
    <FaGithub size={18} style={{ color: 'white' }} />
  </Link>
  <Link href="https://www.instagram.com/thomasjohnertel/">
    <FaInstagram size={18} style={{ color: 'white' }} />
  </Link>
</div>
      
      </div>
    </nav>
  );
}
