import { Table, Armchair, Archive, Library, BedDouble, Sparkles } from 'lucide-react'

/** Formatea precios de forma neutra: 1290 -> "$1.290" */
export const formatPrice = (value) => `$${value.toLocaleString('es-ES')}`

export const categories = [
  {
    id: 'mesas',
    name: 'Mesas',
    icon: Table,
    tone: 'roble',
    description:
      'Mesas de comedor, centro y apoyo construidas en madera maciza con ensambles tradicionales.',
  },
  {
    id: 'sillas',
    name: 'Sillas y Bancas',
    icon: Armchair,
    tone: 'fresno',
    description:
      'Asientos acogedores con estructuras reforzadas, ideales para comedores y casas de campo.',
  },
  {
    id: 'armarios',
    name: 'Armarios y Alacenas',
    icon: Archive,
    tone: 'nogal',
    description:
      'Guardarropas y vitrinas con herrajes forjados y acabados a mano, pieza por pieza.',
  },
  {
    id: 'estanterias',
    name: 'Estanterías',
    icon: Library,
    tone: 'litre',
    description:
      'Repisas y bibliotecas que resaltan la veta natural de cada tablón de madera noble.',
  },
  {
    id: 'camas',
    name: 'Camas y Cabeceros',
    icon: BedDouble,
    tone: 'cedro',
    description:
      'Dormitorios completos con estructuras robustas, pensadas para durar décadas.',
  },
  {
    id: 'decoracion',
    name: 'Decoración',
    icon: Sparkles,
    tone: 'teca',
    description:
      'Espejos, bandejas y detalles en madera que llevan el campo dentro de tu hogar.',
  },
]

export const woods = [
  { name: 'Roble', description: 'Duro, con veta marcada: el clásico de los muebles de herencia.' },
  { name: 'Nogal', description: 'Tonos profundos y chocolate, con un brillo cálido inconfundible.' },
  { name: 'Cedro', description: 'Ligero, aromático y naturalmente resistente a la humedad.' },
  { name: 'Teca', description: 'Rica en aceites naturales, ideal para terrazas y quinchos.' },
  { name: 'Fresno', description: 'Claro y elástico, perfecto para asientos y curvas suaves.' },
  { name: 'Peral', description: 'Densa y de veta fina, con un acabado luminoso al envejecer.' },
  { name: 'Litre', description: 'Madera nativa de veta expresiva, muy querida en la carpintería rústica.' },
  { name: 'Haya', description: 'Uniforme y clara, excelente para tallados y piezas escultóricas.' },
]

export const products = [
  {
    id: 'mesa-roble-del-valle',
    name: 'Mesa Comedor "Roble del Valle"',
    category: 'mesas',
    wood: 'Roble macizo',
    tone: 'roble',
    price: 1290,
    rating: 4.9,
    reviews: 38,
    featured: true,
    description:
      'Mesa de comedor para 8 comensales con patas biseladas y tablero de veta abierta encerada a mano.',
  },
  {
    id: 'mesa-centro-sendero',
    name: 'Mesa Centro "Sendero"',
    category: 'mesas',
    wood: 'Nogal',
    tone: 'nogal',
    price: 690,
    rating: 4.8,
    reviews: 24,
    featured: false,
    description:
      'Bajo centro de líneas simples que deja hablar a las vetas del nogal americano.',
  },
  {
    id: 'mesa-larga-patagonia',
    name: 'Mesa Larga "Patagonia"',
    category: 'mesas',
    wood: 'Teca',
    tone: 'teca',
    price: 1590,
    rating: 5.0,
    reviews: 17,
    featured: false,
    description:
      'Mesa de 3 metros con acabado en aceite natural, hecha para quinchos y casas de campo.',
  },
  {
    id: 'sillas-cabana',
    name: 'Silla Rústica "Cabaña" · set de 4',
    category: 'sillas',
    wood: 'Roble',
    tone: 'roble',
    price: 340,
    rating: 4.7,
    reviews: 52,
    featured: true,
    description:
      'Respaldo de barrotes torneados y asiento anatómico tallado en aserrío de roble.',
  },
  {
    id: 'banca-encuentro',
    name: 'Banca Larga "Encuentro"',
    category: 'sillas',
    wood: 'Fresno',
    tone: 'fresno',
    price: 520,
    rating: 4.8,
    reviews: 21,
    featured: false,
    description:
      'Banco de 2,20 m con refuerzo central, perfecto para entradas, terrazas y fogones.',
  },
  {
    id: 'sillon-rivera',
    name: 'Sillón "Ribera"',
    category: 'sillas',
    wood: 'Haya',
    tone: 'haya',
    price: 780,
    rating: 4.9,
    reviews: 19,
    featured: false,
    description:
      'Sillón envolvente de estructura en haya y cuero natural curtido al vegetal.',
  },
  {
    id: 'armario-casona',
    name: 'Armario "Casona"',
    category: 'armarios',
    wood: 'Nogal',
    tone: 'nogal',
    price: 1890,
    rating: 4.9,
    reviews: 29,
    featured: true,
    description:
      'Armario de dos puertas con ensamble de cola de golondrina y estantes de altura regulable.',
  },
  {
    id: 'alacena-despensa',
    name: 'Alacena "La Despensa"',
    category: 'armarios',
    wood: 'Cedro',
    tone: 'cedro',
    price: 780,
    rating: 4.7,
    reviews: 33,
    featured: false,
    description:
      'Alacena con puertas enrejadas y el aroma natural del cedro, ideal para vajilla y granos.',
  },
  {
    id: 'biblioteca-roble',
    name: 'Estantería "Biblioteca del Roble"',
    category: 'estanterias',
    wood: 'Roble',
    tone: 'roble',
    price: 960,
    rating: 4.8,
    reviews: 26,
    featured: true,
    description:
      'Estantería alta de cinco niveles con anclaje oculto y baldes macizas de borde vivo.',
  },
  {
    id: 'repisa-tronco',
    name: 'Repisa "Tronco Vivo"',
    category: 'estanterias',
    wood: 'Litre',
    tone: 'litre',
    price: 210,
    rating: 4.6,
    reviews: 41,
    featured: false,
    description:
      'Repisa flotante fabricada con tablón de litro de canto natural y soportes de fierro.',
  },
  {
    id: 'cama-cazador',
    name: 'Cama "Descanso del Cazador"',
    category: 'camas',
    wood: 'Nogal',
    tone: 'nogal',
    price: 1450,
    rating: 4.9,
    reviews: 22,
    featured: true,
    description:
      'Cama king con cabecero de tablones cruzados y vigas reforzadas de doble travesaño.',
  },
  {
    id: 'cabecero-bosque',
    name: 'Cabecero "Bosque"',
    category: 'camas',
    wood: 'Peral',
    tone: 'peral',
    price: 620,
    rating: 4.7,
    reviews: 15,
    featured: false,
    description:
      'Cabecero de líneas rústicas en peral, con acabado mate envejecido a cera caliente.',
  },
  {
    id: 'espejo-nogal-viejo',
    name: 'Espejo "Nogal Viejo"',
    category: 'decoracion',
    wood: 'Nogal recuperado',
    tone: 'nogal',
    price: 380,
    rating: 4.8,
    reviews: 47,
    featured: true,
    description:
      'Marco de nogal recuperado con bisagras forjadas a mano y pátina de humo de leña.',
  },
  {
    id: 'bandeja-montana',
    name: 'Bandeja "Mañana de Montaña"',
    category: 'decoracion',
    wood: 'Haya',
    tone: 'haya',
    price: 190,
    rating: 4.6,
    reviews: 30,
    featured: false,
    description:
      'Bandeja de servir con asas talladas a cuchillo y fondo antideslizante de corcho.',
  },
]

export const getProductCategory = (categoryId) =>
  categories.find((category) => category.id === categoryId)
