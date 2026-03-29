import InstagramIcon from '@mui/icons-material/Instagram';
import { WHATSAPP_NUMBER } from "../utils/constants";

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer-inner">
        <div>
          <span className="footer-logo-main">puraflor</span>
          <span className="footer-logo-sub">deco · objetos artesanales</span>
          <p className="footer-about">Transformando espacios con la simpleza y elegancia del concreto y la arcilla. Hecho con amor en Argentina.</p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="footer-wa">
            Hablanos por WhatsApp
          </a>
          <div className="footer-social">
            <a href="#"><InstagramIcon style={{ fontSize: "20px" }} /></a>
          </div>
        </div>
        <div>
          <h4 className="footer-h4">Navegación</h4>
          <ul className="footer-list">
            {[["#inicio","Inicio"],["#nosotros","Nosotros"],["#catalogo","Catálogo"],["#proceso","Proceso"],["#","Cuidados del concreto"]].map(([h,l]) => (
              <li key={l}><a href={h}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer-h4">Contacto</h4>
          <ul className="footer-list">
            <li>hola@puraflordeco.com.ar</li>
            <li>WhatsApp: +54 9 11 0000-0000</li>
            <li style={{ marginTop: "0.5rem" }}>
              <strong style={{ fontSize: "11px", color: "#1c1612" }}>Atención:</strong><br />
              Lunes a Viernes, 10 a 18 hs.
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">
        <p className="footer-copy">© {new Date().getFullYear()} Puraflor Deco · Todos los derechos reservados · Las imágenes son ilustrativas</p>
      </div>
    </footer>
  );
}