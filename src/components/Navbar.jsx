import { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { WHATSAPP_NUMBER } from "../utils/constants";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">Hecho en Córdoba · Envíos a todo el país</div>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#inicio" className="logo">
            <span className="logo-main">puraflor</span> 
            <span className="logo-sub">deco · objetos artesanales</span>
          </a>
          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Quién Soy</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#proceso">Proceso</a>
            <a href="#contacto">Contacto</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-nav-wa">
              <WhatsAppIcon style={{ fontSize: "14px" }} /> WhatsApp
            </a>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon style={{ fontSize: "24px" }} /> : <MenuIcon style={{ fontSize: "24px" }} />}
          </button>
        </div>
        <div className={`mob-menu ${menuOpen ? "open" : ""}`}>
          {[["inicio","Inicio"],["nosotros","Quién Soy"],["catalogo","Catálogo"],["proceso","Proceso"],["contacto","Contacto"]].map(([id,label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
      </nav>
    </>
  );
}