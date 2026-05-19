import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { WHATSAPP_NUMBER } from "../utils/constants";
import "../styles/ProductModal.css";

// Función auxiliar para construir la URL de WhatsApp
function buildWAUrl(product, toneId) {
  const selectedTone = toneId ? product.tones.find((t) => t.id === toneId) : null;
  
  const toneName = selectedTone
    ? selectedTone.id === "marmolado" ? "Marmolado Real (Vetas Negras/Blancas)" : selectedTone.label
    : "sin especificar aún";

  const text = `Hola! Me interesa encargar:\n\n*${product.name}*\n🎨 Tono: ${toneName}\n💰 Precio: ${product.price}\n⏱ Producción: ${product.delay}\n\n¿Podés darme más información?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ProductModal({ product, onClose }) {
  const [selectedTone, setSelectedTone] = useState(null);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        backgroundColor: "rgba(20,14,10,0.65)",
        backdropFilter: "blur(8px)",
        animation: "mFadeIn 0.2s ease",
      }}
    >
      <div
        className="modal-grid"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#faf8f5", maxWidth: "780px", width: "100%", maxHeight: "90vh", overflowY: "auto",
          boxShadow: "0 40px 100px rgba(0,0,0,0.25)", position: "relative",
          animation: "mSlideUp 0.28s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "14px", right: "14px", zIndex: 10,
            width: "32px", height: "32px", background: "#1c1612", color: "#faf8f5", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <CloseIcon style={{ fontSize: "16px" }} />
        </button>

        <div style={{ position: "relative", overflow: "hidden", minHeight: "360px" }}>
          <img
            src={product.image} alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "360px", display: "block" }}
          />
          {product.tag && (
            <span style={{
              position: "absolute", top: "14px", left: "14px", background: "#1c1612", color: "#faf8f5",
              fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", padding: "5px 10px",
            }}>{product.tag}</span>
          )}
        </div>

        <div style={{ padding: "2.25rem 2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <div>
            <p style={{ fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#9c8c82", marginBottom: "5px" }}>
              {product.subtitle}
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 400, color: "#1c1612", lineHeight: 1.18, marginBottom: "5px" }}>
              {product.name}
            </h2>
            <p style={{ fontSize: "1.3rem", color: "#1c1612", fontWeight: 300 }}>{product.price}</p>
          </div>

          <p style={{ fontSize: "13px", color: "#6b5d54", lineHeight: 1.8 }}>{product.description}</p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
            {product.details.map((d, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#6b5d54" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c4b5a8", flexShrink: 0 }} />
                {d}
              </li>
            ))}
          </ul>

          <div>
            <p style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#1c1612", fontWeight: 600, marginBottom: "10px" }}>
              Elegí tu tono · {product.tones.length} opciones
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {product.tones.map((tone) => (
                <button
                  key={tone.id} 
                  onClick={() => setSelectedTone(tone.id === selectedTone ? null : tone.id)} 
                  title={tone.label}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}
                >
                  <span style={{
                    display: "block", 
                    width: "38px", 
                    height: "38px", 
                    borderRadius: "50%", 
                    
                    /* REFACTORIZADO: Forzamos la propiedad 'background' unificada eliminando la función externa */
                    background: tone.background || tone.color,
                    
                    border: selectedTone === tone.id ? "2.5px solid #1c1612" : "2.5px solid transparent",
                    outline: selectedTone === tone.id ? "none" : "1px solid rgba(0,0,0,0.13)",
                    boxShadow: selectedTone === tone.id ? "0 0 0 3px rgba(28,22,18,0.1)" : "none",
                    transition: "all 0.18s",
                  }} />
                  <span style={{ fontSize: "9px", color: "#9c8c82", maxWidth: "48px", textAlign: "center", lineHeight: 1.3 }}>
                    {tone.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f0ebe3", padding: "10px 14px" }}>
            <AccessTimeIcon style={{ fontSize: "16px", color: "#9c8c82" }} />
            <span style={{ fontSize: "11px", color: "#6b5d54" }}>Producción: <strong style={{ color: "#1c1612" }}>{product.delay}</strong></span>
          </div>

          <a
            href={buildWAUrl(product, selectedTone)} target="_blank" rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
              background: "#25d366", color: "#fff", padding: "14px 20px", textDecoration: "none", fontSize: "11px",
              fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", transition: "background 0.18s",
            }}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}