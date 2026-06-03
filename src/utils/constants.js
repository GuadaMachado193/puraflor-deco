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

export const WHATSAPP_NUMBER = "+5493518507697";
// ...


export const products = [
  {
    id: 1,
    name: "Florero Elena",
    subtitle: "Pieza de Concreto",
    price: "$10.000", // Agregado un precio estimado de referencia
    image: imgPlatoElena,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Pequeña copa de concreto de diseño minimalista. Perfecta para lucir como centro de mesa, porta velas o para darle un toque especial a tus estantes. Su textura artesanal la hace única.",
    details: ["Diámetro: 10 cm", "Altura: 7 cm"],
    tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
{
    id: 2,
    name: "Mini Copa",
    subtitle: "Pieza de Concreto",
    price: "$7.000",
    image: imgMiniCopa,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Delicada copa de arcilla quemada con bordes orgánicos inspirados en los pétalos de una flor. Ideal para exhibir tus joyas favoritas, pequeñas velas o como centro decorativo de gran calidez.",
    details: ["Diámetro superior: 12 cm", "Altura: 6,5 cm", "Textura rústica al tacto", "Uso interior recomendado"],
tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 3,
    name: "Plato Flor",
    subtitle: "Pieza de Concreto",
    price: "$8.000",
    image: imgFlor,
    tag: "Mis elegidos",
    delay: "5 a 7 días hábiles",
    description: "Set de tres piezas de concreto con diseño de ondas suaves. Su fluidez visual aporta movimiento y modernidad a cualquier espacio. Perfectos para usar juntos o distribuidos en distintos rincones.",
    details: ["Diámetro superior: 12 cm", "Altura: 6,5 cm"],
    tones:  [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 4,
    name: "Plato Ondas",
    subtitle: "Pieza de Concreto",
    price: "$6.000",
    image: imgPlatoOndas,
    tag: "Mis elegidos",
    delay: "10 a 15 días hábiles",
    description: "Elegante bandeja escultural que destaca por su diseño de ondas fluidas. Una pieza central de alto impacto que aporta sofisticación a tu living o recibidor, ideal para organizar tus esenciales con estilo.",
    details: ["Diámetro: 15 cm",],
  tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 5,
    name: "Posavasos",
    subtitle: "Pieza de Concreto",
    price: "$20.000",
    image: imgPosavasos,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Par de posavasos de concreto pigmentado. Protegen tus superficies con mucho estilo, combinando la firmeza del material con acabados suaves. Un detalle rústico y chic para tus momentos de relax.",
    details: ["Diámetro: 9 cm", "Espesor: 1 cm", "Set por 4 posavasos"],
    tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 6,
    name: "Florero Magnus",
    subtitle: "Pieza de Concreto",
    price: "$9.000",
    image: imgFloreroMagnus,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Florero escultural de gran presencia y líneas nórdicas. Magnus está diseñado para ser el protagonista de tu estantería o mesa ratona, destacando la belleza cruda y contemporánea del concreto.",
    details: ["Altura: 9 cm", "Ancho: 11,5 cm", "Apto para flores secas y follaje", "Peso sólido y estable"],
  tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 7,
    name: "Vela Copón",
    subtitle: "Pieza de Concreto",
    price: "$18.000",
    image: imgVelaCopon,
    tag: "Mis elegidos",
    delay: "7 a 10 días hábiles",
    description: "Vela aromática vertida a mano en un copón artesanal de concreto pigmentado. Una pieza que aromatiza tus espacios con notas delicadas mientras aporta una luz cálida y ambiental única.",
    details: ["Altura: 9 cm", "Ancho: 9 cm"],
      tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 8,
    name: "Set Ana",
    subtitle: "Set de Concreto",
    price: "$26.000",
    image: imgAna,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Una combinación de piezas pensada para acompañar espacios desde la simpleza. Su composición une texturas, formas y pequeños detalles decorativos que aportan calidez y armonía a cualquier rincón. Ideal para centro de mesa.",
    details: ["Plato: Largo 27 cm x Ancho 11,5 cm", "Florero: Diámetro 7 cm x Alto 10 cm", "Vela Caracol: Largo 12 cm"],
    tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 9,
    name: "Set Bruna",
    subtitle: "Set de Concreto",
    price: "$22.000",
    image: imgBruna,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Set diseñado para aportar armonía desde la simpleza, este set combina piezas artesanales de líneas suaves y formas orgánicas que se integran fácilmente a cualquier ambiente. Ideal para espacios chicos.",
    details: ["Plato: Largo 21 cm x Ancho 12 cm"],
   tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 10,
    name: "Set Carmela",
    subtitle: "Set de Concreto",
    price: "$23.000",
    image: imgCarmela,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Una composición pensada para aportar calidez y personalidad a distintos espacios del hogar. La combinación de la bandeja ovalada, la vela y el florero rostro crea un rincón delicado y artesanal, ideal para mesas de luz, livings o recibidores.",
    details: ["Plato: Largo 24 cm x Ancho 12 cm"],
     tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 11,
    name: "Set Dina",
    subtitle: "Set de Concreto",
    price: "$24.000",
    image: imgDina,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "La combinación de líneas orgánicas y piezas funcionales da vida a un set decorativo cálido y versátil. Ideal para sumar un detalle sutil y artesanal en distintos rincones de la casa.",
    details: ["Plato: Largo 23,5 cm x Ancho 12 cm"],
  tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 12,
    name: "Set Gala",
    subtitle: "Set de Concreto",
    price: "$25.000",
    image: imgGala,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "La unión de texturas, formas orgánicas y detalles delicados da vida a un set pensado para crear espacios serenos y llenos de personalidad. Ideal para cómodas, mesas auxiliares o rincones decorativos del hogar.",
    details: ["Plato: Largo 24 cm x Ancho 16 cm", "Pieza niña: Alto 16 cm"],
   tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 13,
    name: "Set Hugo",
    subtitle: "Set de Concreto",
    price: "$27.000",
    image: imgHugo,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Set decorativo, atemporal y clásico que aporta delicadeza y calidez para tus espacios. Ideal para centro de mesa o mesa ratona.",
    details: ["Plato: Diámetro 22 cm"],
    tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 14,
    name: "Set Kai",
    subtitle: "Set de Concreto",
    price: "$24.000",
    image: imgKai,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Set que aporta calidez y un toque minimalista. Combina perfecto con estilos modernos y naturales. Ideal para mesas de luz, estantes o recibidores.",
    details: ["Plato: Largo 17 cm x Ancho 12 cm", "Vela Caracol: Largo 12 cm"],
    tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  },
  {
    id: 15,
    name: "Set Lis",
    subtitle: "Set de Concreto",
    price: "$26.000",
    image: imgLis,
    tag: "Set",
    delay: "7 a 10 días hábiles",
    description: "Set artesanal que tiene una combinación delicada y cálida. La bandeja texturada le suma un toque natural y elegante para lucir en cualquier espacio. Ideal para mesa ratona o recibidor.",
    details: ["Plato: Largo 20 cm x Ancho 15 cm", "Vela Caracol: Largo 12 cm"],
    tones: [
      { id: "Gris Oscuro", label: "Gris Oscuro", color: "#454040" },
      { id: "Blanco", label: "Blanco", color: "#FAFAFA" },
      { id: "Marmolado", label: "Marmolado", color: "#323336" },
    ],
  }
];