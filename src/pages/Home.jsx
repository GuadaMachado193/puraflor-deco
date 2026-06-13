import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import SpaIcon from '@mui/icons-material/Spa'; /* <-- ¡Chau Eco, hola Spa! */
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { products, WHATSAPP_NUMBER } from "../utils/constants";
import "../styles/Home.css";
import imgportada from "../assets/portada.jpeg";
import imgFlorG from "../assets/florG-2.JPG";

export default function Home({ onSelectProduct }) {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-bg">
          <img src={imgportada} alt="Portada" />
        </div>
        <div className="hero-body">
          <div className="hero-content">
            <p className="hero-eyebrow">Piezas que habitan tu hogar</p>
            <h1 className="hero-h1">Donde todo nace <br />de lo <em>simple</em>.</h1>
            <div className="btn-row">
              <a href="#catalogo" className="btn-primary">Explorar piezas <ArrowForwardIcon style={{ fontSize: "14px" }} /></a>
              <a href="#proceso" className="btn-ghost">Detrás de pura flor</a>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="about">
        <div className="about-inner">
          <div>
            <p className="about-eyebrow">QUIÉN SOY </p>
            <h2 className="about-h2">Soy Flor, detrás de <br /><em>Pura Flor.</em></h2>
            <p className="about-p">El concreto apareció en mi vida...<br />
              y me enamoré.
            </p>
            <p className="about-p">Me atrapó su forma:<br />
              imperfecto, único. <br />
              <br />
              Desde entonces, creo piezas sin repetir. <br />
              Sin serie. Sin apuro. <br />
              <br />
              Así nació Pura Flor. <br />
              <br />
              ¡Bienvenidos a mi mundo del concreto.!

              .</p>
            <div className="about-stats">
              {[{ num: "+500", lbl: "Piezas creadas" }, { num: "3", lbl: "Tonos por pieza" }, { num: "100%", lbl: "Artesanal" }].map(s => (
                <div key={s.lbl}><p className="stat-n">{s.num}</p><p className="stat-l">{s.lbl}</p></div>
              ))}
            </div>
          </div>
          <div className="about-img">
            <img src={imgFlorG} alt="Proceso artesanal" />
            <div className="about-quote-box">
              <StarIcon style={{ fontSize: "16px", color: "#9c8c82", marginBottom: "10px" }} />
              <p>"Cada pieza es irrepetible por naturaleza."</p>
              <span>— Nuestro compromiso</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTBAR */}
      <div className="trustbar">
        <div className="trustbar-inner">
          {[
            { icon: <SpaIcon style={{ fontSize: "18px" }} />, s: "100% Artesanal", d: "Sin producción en serie" },
            { icon: <AccessTimeIcon style={{ fontSize: "18px" }} />, s: "Trabajo por encargo", d: "Cada pieza se crea para vos" },
            { icon: <LocalShippingIcon style={{ fontSize: "18px" }} />, s: "Envíos a todo el país", d: "Embalaje especial para cada pieza" },
          ].map(b => (
            <div key={b.s} className="trust-item">
              {b.icon}
              <div><span className="trust-strong">{b.s}</span><span className="trust-desc">{b.d}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* CATÁLOGO */}
      <section id="catalogo" className="catalog">
        <div className="catalog-inner">
          <div className="sec-header">
            {/* <p className="sec-eyebrow">Nuestras creaciones</p> */}
            <h2 className="sec-h2">Piezas</h2>
            <div className="sec-rule" />
            <p className="sec-desc">Cada pieza nace a pedido. <br />
              Podés elegir el tono y hacerla propia. <br />
              Consultas por WhatsApp para ver más modelos y opciones disponibles.
            </p>
          </div>

          <div className="pgrid">
            {products.map(p => (
              <div key={p.id} className="pcard" onClick={() => onSelectProduct(p)}>
                <div className="pcard-img">
                  <img src={p.image} alt={p.name} />
                  <div className="pcard-overlay">
                    <div className="ov-dots">
                      {p.tones.map(t => <span key={t.id} className="ov-dot" style={{ background: t.background || t.color }} />)}
                    </div>
                    <button className="ov-btn">Ver &amp; Consultar</button>
                  </div>
                  {p.tag && <span className="pcard-tag">{p.tag}</span>}
                </div>
                <div className="pcard-info">
                  <p className="pcard-sub">{p.subtitle}</p>
                  <h3 className="pcard-name">{p.name}</h3>
                  <div className="pcard-row">
                    <span className="pcard-price">{p.price}</span>
                    <div className="pcard-time"><AccessTimeIcon style={{ fontSize: "12px" }} />{p.delay}</div>
                  </div>
                  <div className="pcard-tones">
                    <span className="tone-lbl">Tonos</span>
                    <div className="tone-dots">
                      {p.tones.map(t => (
                        <span key={t.id} className="tone-dot" style={{ background: t.background || t.color }} title={t.label} />
                      ))}
                    </div>
                    <span className="tone-cnt">({p.tones.length})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cat-footer">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola! Me gustaría ver más modelos disponibles.")}`} target="_blank" rel="noopener noreferrer" className="link-more">
              CONSULTAS Y DETALLES POR WHATSAPP. <ChevronRightIcon style={{ fontSize: "14px" }} />
            </a>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="process">
        <div className="process-inner">
          <p className="proc-eyebrow">Proceso</p>
          <h2 className="proc-h2">Sin apuro. <br /> Así nace cada pieza.</h2>
          <div className="steps">
            {[
              { n: "01", icon: <ShoppingBagIcon style={{ fontSize: "20px" }} />, t: "Tu idea", d: "Elegís modelo, tono y tamaño. Lo charlamos y lo dejo a tu gusto." },
              { n: "02", icon: <Inventory2Icon style={{ fontSize: "20px" }} />, t: "Manos a la mezcla", d: "Preparo cada pieza de forma artesanal. No hay dos iguales." },
              { n: "03", icon: <SpaIcon style={{ fontSize: "20px" }} />, t: "Tiempo de secado", d: "El concreto necesita su tiempo. Acá no apuro el proceso." },
              {
                n: "04", icon: <LocalShippingIcon style={{ fontSize: "20px" }} />, t: "Llega a vos", d: "La envuelvo con cuidado y coordinamos la entrega."
              },
            ].map(s => (
              <div key={s.n} className="step">
                <div className="step-circle">{s.icon}</div>
                <p className="step-n">{s.n}</p>
                <h3 className="step-title">{s.t}</h3>
                <p className="step-desc">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="proc-quote">
            <FavoriteIcon style={{ fontSize: "18px", color: "#9c8c82", marginBottom: "14px" }} />
            <p>CÓMO CUIDAR LAS PIEZAS <br />
              Cada pieza está pensada para acompañar lo cotidiano.<br />
              Podés limpiarla con un paño húmedo <br />
              y usarla con alimentos secos. <br /><br />
              Los floreros son decorativos,<br />
              para flores secas o de tela.<br /><br />
              No llevan agua ni líquidos.<br />
            </p>
            <span>— Puraflor Deco</span>
          </div>
        </div>
      </section>
    </>
  );
}