import imgPlatoElena from "../assets/elegidos/florero_elena.jpeg";
import imgMiniCopa from "../assets/elegidos/mini_copa.jpeg";
import imgFlor from "../assets/elegidos/plato_flor.jpeg";
import imgPlatoOndas from "../assets/elegidos/plato_ondas.jpeg";
import imgPosavasos from "../assets/elegidos/posavasos.jpeg";
import imgFloreroMagnus from "../assets/elegidos/florero_magnus.jpeg";
import imgVelaCopon from "../assets/elegidos/vela_copon.jpeg";
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
    name: "Florero Elena",
    subtitle: "Concreto artesanal",
    price: "$14.500", // Agregado un precio estimado de referencia
    image: imgPlatoElena,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Pequeña copa de concreto de diseño minimalista. Perfecta para lucir como centro de mesa, porta velas o para darle un toque especial a tus estantes. Su textura artesanal la hace única.",
    details: ["Diámetro: 10 cm", "Altura: 7 cm"],
    tones: [
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Gris", label: "Gris", color: "#BFC6C4" },
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
{
    id: 2,
    name: "Mini Copa",
    subtitle: "Arcilla quemada",
    price: "$12.000",
    image: imgMiniCopa,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Delicada copa de arcilla quemada con bordes orgánicos inspirados en los pétalos de una flor. Ideal para exhibir tus joyas favoritas, pequeñas velas o como centro decorativo de gran calidez.",
    details: ["Diámetro superior: 12 cm", "Altura: 6,5 cm", "Textura rústica al tacto", "Uso interior recomendado"],
tones: [
    { id: "gris-oscuro", label: "Gris Oscuro", color: "#BFC6C4" },
    { id: "blanco-pulido", label: "Blanco Pulido", color: "#FAFAFA" },
{ 
  id: "marmolado", 
  label: "Marmolado Real", 
  color: "#2c2b29", // Color base por si acaso
  background: "linear-gradient(215deg, transparent 40%, rgba(255,255,255,0.15) 41%, rgba(255,255,255,0.2) 43%, transparent 45%), linear-gradient(35deg, transparent 60%, rgba(0,0,0,0.4) 61%, rgba(0,0,0,0.5) 63%, transparent 65%), linear-gradient(125deg, transparent 30%, rgba(255,255,255,0.1) 31%, rgba(255,255,255,0.15) 34%, transparent 37%), #323336"
},
    ],
  },
  {
    id: 3,
    name: "Plato Flor",
    subtitle: "Concreto · Set x3",
    price: "$9.200",
    image: imgFlor,
    tag: "Mis elegidos",
    delay: "5 a 7 días hábiles",
    description: "Set de tres piezas de concreto con diseño de ondas suaves. Su fluidez visual aporta movimiento y modernidad a cualquier espacio. Perfectos para usar juntos o distribuidos en distintos rincones.",
    details: ["Diámetro superior: 12 cm", "Altura: 6,5 cm"],
    tones: [
        { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
        { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  },
  {
    id: 4,
    name: "Plato Ondas",
    subtitle: "Yeso y detalle de mármol",
    price: "$15.500",
    image: imgPlatoOndas,
    tag: "Mis elegidos",
    delay: "10 a 15 días hábiles",
    description: "Elegante bandeja escultural que destaca por su diseño de ondas fluidas. Una pieza central de alto impacto que aporta sofisticación a tu living o recibidor, ideal para organizar tus esenciales con estilo.",
    details: ["Diámetro: 15 cm",],
    tones: [
     { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
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
    details: ["Diámetro: 9 cm", "Espesor: 1 cm", "Set por 4 posavasos"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA   " },
    ],
  },
  {
    id: 6,
    name: "Florero Magnus",
    subtitle: "Concreto texturado · Individual",
    price: "$18.000",
    image: imgFloreroMagnus,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Florero escultural de gran presencia y líneas nórdicas. Magnus está diseñado para ser el protagonista de tu estantería o mesa ratona, destacando la belleza cruda y contemporánea del concreto.",
    details: ["Altura: 9 cm", "Ancho: 11,5 cm", "Apto para flores secas y follaje", "Peso sólido y estable"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  },
  {
    id: 7,
    name: "Vela Copón",
    subtitle: "Cera de soja en cuenco",
    price: "$18.000",
    image: imgVelaCopon,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Vela aromática vertida a mano en un copón artesanal de concreto pigmentado. Una pieza que aromatiza tus espacios con notas delicadas mientras aporta una luz cálida y ambiental única.",
    details: ["Altura: 9 cm", "Ancho: 9 cm"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  },
  {
    id: 8,
    name: "Set Ana",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgAna,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Una combinación de piezas pensada para acompañar espacios desde la simpleza. Su composición une texturas, formas y pequeños detalles decorativos que aportan calidez y armonía a cualquier rincón. Ideal para centro de mesa.",
    details: ["Plato: Largo 27 cm x Ancho 11,5 cm", "Florero: Diámetro 7 cm x Alto 10 cm", "Vela Caracol: Largo 12 cm"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  },
  {
    id: 9,
    name: "Set Bruna",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgBruna,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Set diseñado para aportar armonía desde la simpleza, este set combina piezas artesanales de líneas suaves y formas orgánicas que se integran fácilmente a cualquier ambiente. Ideal para espacios chicos.",
    details: ["Plato: Largo 21 cm x Ancho 12 cm"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  },
  {
    id: 10,
    name: "Set Carmela",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgCarmela,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Una composición pensada para aportar calidez y personalidad a distintos espacios del hogar. La combinación de la bandeja ovalada, la vela y el florero rostro crea un rincón delicado y artesanal, ideal para mesas de luz, livings o recibidores.",
    details: ["Plato: Largo 24 cm x Ancho 12 cm"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  },
  {
    id: 11,
    name: "Set Dina",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgDina,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "La combinación de líneas orgánicas y piezas funcionales da vida a un set decorativo cálido y versátil. Ideal para sumar un detalle sutil y artesanal en distintos rincones de la casa.",
    details: ["Plato: Largo 23,5 cm x Ancho 12 cm"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  },
  {
    id: 12,
    name: "Set Gala",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgGala,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "La unión de texturas, formas orgánicas y detalles delicados da vida a un set pensado para crear espacios serenos y llenos de personalidad. Ideal para cómodas, mesas auxiliares o rincones decorativos del hogar.",
    details: ["Plato: Largo 24 cm x Ancho 16 cm", "Pieza niña: Alto 16 cm"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  },
  {
    id: 13,
    name: "Set Hugo",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgHugo,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Set decorativo, atemporal y clásico que aporta delicadeza y calidez para tus espacios. Ideal para centro de mesa o mesa ratona.",
    details: ["Plato: Diámetro 22 cm"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  },
  {
    id: 14,
    name: "Set Kai",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgKai,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Set que aporta calidez y un toque minimalista. Combina perfecto con estilos modernos y naturales. Ideal para mesas de luz, estantes o recibidores.",
    details: ["Plato: Largo 17 cm x Ancho 12 cm", "Vela Caracol: Largo 12 cm"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  },
  {
    id: 15,
    name: "Set Lis",
    subtitle: "Concreto pigmentado · Par",
    price: "$18.000",
    image: imgLis,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Set artesanal que tiene una combinación delicada y cálida. La bandeja texturada le suma un toque natural y elegante para lucir en cualquier espacio. Ideal para mesa ratona o recibidor.",
    details: ["Plato: Largo 20 cm x Ancho 15 cm", "Vela Caracol: Largo 12 cm"],
    tones: [
      { id: "natural", label: "Gris Oscuro", color: "#BFC6C4" },
      { id: "blanco", label: "Blanco Pulido", color: "#FAFAFA" },
    ],
  }
];