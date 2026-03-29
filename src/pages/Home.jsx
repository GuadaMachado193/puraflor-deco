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

export default function Home({ onSelectProduct }) {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Decoración artesanal de concreto" />
        </div>
        <div className="hero-body">
          <div className="hero-content">
            <p className="hero-eyebrow">Objetos con alma · Hecho a mano en Argentina</p>
            <h1 className="hero-h1">El concreto <em>como</em><br />poesía visual.</h1>
            <p className="hero-p">Piezas únicas de concreto y arcilla, moldeadas con paciencia para transformar cualquier espacio en algo memorable.</p>
            <div className="btn-row">
              <a href="#catalogo" className="btn-primary">Ver Catálogo <ArrowForwardIcon style={{ fontSize: "14px" }} /></a>
              <a href="#proceso" className="btn-ghost">Cómo trabajamos</a>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="about">
        <div className="about-inner">
          <div>
            <p className="about-eyebrow">Quiénes somos</p>
            <h2 className="about-h2">Hacemos objetos que<br /><em>cuentan historias.</em></h2>
            <p className="about-p">Somos un taller familiar. Nos enamoramos del concreto y la arcilla porque son materiales honestos: no esconden sus imperfecciones, las celebran. Cada textura y cada pequeña irregularidad es parte de lo que hace única a tu pieza.</p>
            <p className="about-p">No tenemos stock porque no queremos fabricar en serie. Cuando hacés un pedido, lo creamos para vos, con el tono que elegiste. Eso lleva tiempo, y ese tiempo vale la pena.</p>
            <div className="about-stats">
              {[{num:"+500",lbl:"Piezas creadas"},{num:"4",lbl:"Tonos por pieza"},{num:"100%",lbl:"Artesanal"}].map(s => (
                <div key={s.lbl}><p className="stat-n">{s.num}</p><p className="stat-l">{s.lbl}</p></div>
              ))}
            </div>
          </div>
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Proceso artesanal" />
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
            {icon:<SpaIcon style={{ fontSize: "18px" }} />, s:"100% Artesanal", d:"Sin moldes industriales"},
            {icon:<AccessTimeIcon style={{ fontSize: "18px" }} />, s:"Trabajamos por encargo", d:"Cada pieza se crea para vos"},
            {icon:<LocalShippingIcon style={{ fontSize: "18px" }} />, s:"Envíos a todo el país", d:"Embalaje especial para cada pieza"},
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
            <p className="sec-eyebrow">Nuestras creaciones</p>
            <h2 className="sec-h2">Catálogo</h2>
            <div className="sec-rule" />
            <p className="sec-desc">Todo se produce a pedido. Hacé clic en cualquier pieza para ver los tonos disponibles y consultar por WhatsApp.</p>
          </div>

          <div className="pgrid">
            {products.map(p => (
              <div key={p.id} className="pcard" onClick={() => onSelectProduct(p)}>
                <div className="pcard-img">
                  <img src={p.image} alt={p.name} />
                  <div className="pcard-overlay">
                    <div className="ov-dots">
                      {p.tones.map(t => <span key={t.id} className="ov-dot" style={{ backgroundColor: t.color }} />)}
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
                        <span key={t.id} className="tone-dot" style={{ backgroundColor: t.color }} title={t.label} />
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
              Ver más modelos por WhatsApp <ChevronRightIcon style={{ fontSize: "14px" }} />
            </a>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="process">
        <div className="process-inner">
          <p className="proc-eyebrow">Nuestro proceso</p>
          <h2 className="proc-h2">El valor del <em>tiempo.</em></h2>
          <p className="proc-desc">No somos una fábrica. Cada pieza nace el día que hacés el pedido. Mezclamos, vertemos, esperamos el fraguado natural, lijamos y sellamos a mano.</p>
          <div className="steps">
            {[
              {n:"01", icon:<ShoppingBagIcon style={{ fontSize: "20px" }} />, t:"Tu encargo", d:"Elegís modelo, tono y tamaño. Confirmás con seña o pago total."},
              {n:"02", icon:<Inventory2Icon style={{ fontSize: "20px" }} />, t:"Preparamos la mezcla", d:"Mezclamos el material según tu pedido. Cada receta es distinta."},
              {n:"03", icon:<SpaIcon style={{ fontSize: "20px" }} />, t:"Curado natural", d:"7 a 10 días para que el concreto fragüe con su tiempo natural."},
              {n:"04", icon:<LocalShippingIcon style={{ fontSize: "20px" }} />, t:"Entrega", d:"Embalamos con cuidado y coordinamos retiro o envío a domicilio."},
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
            <p>"La paciencia es parte del proceso. Y eso se nota en cada pieza."</p>
            <span>— El equipo de Puraflor Deco</span>
          </div>
        </div>
      </section>
    </>
  );
}