import InstagramIcon from '@mui/icons-material/Instagram';
import { WHATSAPP_NUMBER } from "../utils/constants";
import "../styles/Footer.css";


export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer-inner">
        <div>
          <span className="footer-logo-main">pura flor</span>
          <span className="footer-logo-sub">minimalista | funcional | artesanal </span>
          <p className="footer-about">Deco de concreto para tu hogar </p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="footer-wa">
            Hablemos por WhatsApp
          </a>
          <div className="footer-social">
            <a href="http://Instagram.com/puraflor.deco" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ fontSize: "20px" }} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="footer-h4">Navegación</h4>
          <ul className="footer-list">
            {[["#inicio","Inicio"],["#nosotros","Sobre Pura Flor"],["#catalogo","Catálogo"],["#proceso","Proceso"],["#","Cuidados del concreto"]].map(([h,l]) => (
              <li key={l}><a href={h}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer-h4">Contacto</h4>
          <ul className="footer-list">
            {/* <li>hola@puraflordeco.com.ar</li> */}
            <li>WhatsApp: +54 3518507697</li>
            <li style={{ marginTop: "0.5rem" }}>
              <strong style={{ fontSize: "11px", color: "#1c1612" }}>Atención:</strong><br />
              Lunes a Viernes, 09 a 17 hs. <br /> Sabados 09 a 12 hs.
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">
        <p className="footer-copy">© {new Date().getFullYear()} Puraflor Deco ·</p>
      </div>
    </footer>
  );
}