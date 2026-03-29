import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import Home from "./pages/Home";
// Asegurate de importar el CSS global
import "./index.css"; 

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="app">
      <Navbar />
      
      <Home onSelectProduct={setSelectedProduct} />
      
      <Footer />
      
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}