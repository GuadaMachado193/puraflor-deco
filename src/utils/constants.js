import imgPlatoOndas from "../assets/elegidos/florero_elena.jpeg";
import imgFlorero from "../assets/elegidos/mini_copa.jpeg";
import imgCopa from "../assets/elegidos/plato_flor.jpeg";
import imgPlatoFlor from "../assets/elegidos/plato_ondas.jpeg";
import imgPosavasos from "../assets/elegidos/posavasos.jpeg";
import imgAna from "../assets/set/ana.jpeg"
import imgBruna from "../assets/set/bruna.jpeg"
import imgCarmela from "../assets/set/carmela.jpeg"
import imgDina from "../assets/set/dina.jpeg"
import imgGala from "../assets/set/gala.jpeg"
import imgHugo from "../assets/set/hugo.jpeg"
import imgKai from "../assets/set/kai.jpeg"
import imgLis from "../assets/set/lis.jpeg"

export const WHATSAPP_NUMBER = "+5493513122876";
// ...


export const products = [
 {
    id: 1,
    name: "Mini Copa",
    subtitle: "Concreto artesanal",
    price: "", // ¡Ojo! Acá te faltó ponerle el precio a este producto
    image: imgFlorero,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Pequeña copa de concreto de diseño minimalista. Perfecta para lucir como centro de mesa, porta velas o para darle un toque especial a tus estantes. Su textura artesanal la hace única.",
    details: ["Diámetro: 12 cm", "Altura: 15 cm", "Tapón de drenaje incluido", "Acabado sellado al agua"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "blanco", label: "Blanco Pulido", color: "#e8e3dd" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
      { id: "terracota", label: "Terracota", color: "#b5613a" },
    ],
  },
  {
    id: 2,
    name: "Plato Flor",
    subtitle: "Arcilla quemada",
    price: "$12.000",
    image: imgCopa,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Delicado plato de arcilla quemada con bordes orgánicos inspirados en los pétalos de una flor. Ideal para exhibir tus joyas favoritas, pequeñas velas o como centro decorativo de gran calidez.",
    details: ["40 × 22 cm", "Apta para interiores", "Resistente a la humedad", "Bordes irregulares (efecto artesanal)"],
    tones: [
      { id: "crudo", label: "Crudo", color: "#d4c5b0" },
      { id: "arena", label: "Arena", color: "#c9b99a" },
      { id: "cafe", label: "Café Oscuro", color: "#6b4c3b" },
    ],
  },
  {
    id: 3,
    name: "Plato Ondas",
    subtitle: "Concreto · Set x3",
    price: "$9.200",
    image: imgPlatoFlor,
    tag: "Mis elegidos",
    delay: "5 a 7 días hábiles",
    description: "Set de tres piezas de concreto con diseño de ondas suaves. Su fluidez visual aporta movimiento y modernidad a cualquier espacio. Perfectos para usar juntos o distribuidos en distintos rincones.",
    details: ["3 tamaños incluidos", "Para velas estándar y de té", "Acabado natural sin sellar", "Peso aprox. 800 g c/u"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "blanco", label: "Blanco", color: "#e8e3dd" },
    ],
  },
  {
    id: 4,
    name: "Florero Elena",
    subtitle: "Yeso y detalle de mármol",
    price: "$15.500",
    image: imgPlatoOndas,
    tag: "Mis elegidos",
    delay: "10 a 15 días hábiles",
    description: "Elegante florero escultural que destaca por su sutil detalle en mármol. Una pieza central de alto impacto que aporta sofisticación a tu living, ideal para lucir arreglos florales secos o minimalistas.",
    details: ["Largo ~45 cm (variable)", "Incluye detalle de mármol", "Requiere cuidados especiales", "Pieza única"],
    tones: [
      { id: "blanco", label: "Blanco Vintage", color: "#f0ebe3" },
      { id: "gris", label: "Gris Perla", color: "#c4bfbb" },
      { id: "marfil", label: "Marfil", color: "#e8dfc8" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
    ],
  },
  {
    id: 5,
    name: "Posavasos",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgPosavasos,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Par de posavasos de concreto pigmentado. Protegen tus superficies con mucho estilo, combinando la firmeza del material con acabados suaves. Un detalle rústico y chic para tus momentos de relax.",
    details: ["Alturas: 22 cm y 17 cm", "Boca estrecha (3 cm)", "Para flores secas o frescas", "Cada par es único"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
      { id: "terracota", label: "Terracota", color: "#b5613a" },
    ],
  },
  {
    id: 6,
    name: "Set Ana",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgAna,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Dúo de jarrones de líneas clásicas y depuradas. El Set Ana está pensado para aportar equilibrio visual a tus ambientes, destacándose por su versatilidad y elegancia atemporal para exhibir flores.",
    details: ["Alturas: 22 cm y 17 cm", "Boca estrecha (3 cm)", "Para flores secas o frescas", "Cada par es único"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
      { id: "terracota", label: "Terracota", color: "#b5613a" },
    ],
  },
  {
    id: 7,
    name: "Set Bruna",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgBruna,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Par de jarrones de siluetas curvas y cálidas. El Set Bruna evoca la textura de la tierra, ideal para crear rincones acogedores con flores secas, pampas o ramas naturales.",
    details: ["Alturas: 22 cm y 17 cm", "Boca estrecha (3 cm)", "Para flores secas o frescas", "Cada par es único"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
      { id: "terracota", label: "Terracota", color: "#b5613a" },
    ],
  },
  {
    id: 8,
    name: "Set Carmela",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgCarmela,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Conjunto de diseño audaz y contemporáneo. Carmela resalta por sus proporciones armónicas y asimétricas, convirtiéndose en el centro de atención de mesas auxiliares o estanterías.",
    details: ["Alturas: 22 cm y 17 cm", "Boca estrecha (3 cm)", "Para flores secas o frescas", "Cada par es único"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
      { id: "terracota", label: "Terracota", color: "#b5613a" },
    ],
  },
  {
    id: 9,
    name: "Set Dina",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgDina,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Dos piezas de concreto de aspecto suave y minimalista. Dina es la elección perfecta para quienes buscan una decoración sutil que transmita paz, orden y frescura en el hogar.",
    details: ["Alturas: 22 cm y 17 cm", "Boca estrecha (3 cm)", "Para flores secas o frescas", "Cada par es único"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
      { id: "terracota", label: "Terracota", color: "#b5613a" },
    ],
  },
 {
    id: 10,
    name: "Set Gala",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgGala,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Un set sofisticado y de gran presencia visual. Gala combina formas escultóricas que capturan la luz y las sombras, aportando un verdadero toque de lujo artesanal a tus espacios favoritos.",
    details: ["Alturas: 22 cm y 17 cm", "Boca estrecha (3 cm)", "Para flores secas o frescas", "Cada par es único"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
      { id: "terracota", label: "Terracota", color: "#b5613a" },
    ],
  },
  {
    id: 11,
    name: "Set Hugo",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgHugo,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Dúo de carácter fuerte y presencia geométrica. El Set Hugo es ideal para ambientes modernos y de estilo industrial, aportando textura, firmeza y mucha personalidad a tu decoración diaria.",
    details: ["Alturas: 22 cm y 17 cm", "Boca estrecha (3 cm)", "Para flores secas o frescas", "Cada par es único"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
      { id: "terracota", label: "Terracota", color: "#b5613a" },
    ],
  },
  {
    id: 12,
    name: "Set Kai",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgKai,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Inspirado en la naturaleza, este par de formas orgánicas fluye con gracia. El Set Kai aporta una sensación de relajación inigualable, perfecto para acompañar con elementos botánicos.",
    details: ["Alturas: 22 cm y 17 cm", "Boca estrecha (3 cm)", "Para flores secas o frescas", "Cada par es único"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
      { id: "terracota", label: "Terracota", color: "#b5613a" },
    ],
  },
  {
    id: 13,
    name: "Set Lis",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgLis,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Conjunto delicado, poético y romántico. Las líneas finas del Set Lis lo convierten en el complemento ideal para dormitorios o rincones de lectura, sumando un detalle de encanto y tranquilidad.",
    details: ["Alturas: 22 cm y 17 cm", "Boca estrecha (3 cm)", "Para flores secas o frescas", "Cada par es único"],
    tones: [
      { id: "natural", label: "Natural", color: "#b5aca0" },
      { id: "negro", label: "Negro Mate", color: "#2c2b29" },
      { id: "terracota", label: "Terracota", color: "#b5613a" },
    ],
  }
];