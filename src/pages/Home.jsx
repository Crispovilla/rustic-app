import { Link } from 'react-router-dom'
import {
  TreePine,
  Hammer,
  Leaf,
  ShieldCheck,
  Truck,
  Users,
  Gem,
  LayoutGrid,
  ChevronRight,
  Quote,
  Phone,
} from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import { whatsappLink } from '../data/contact.js'
import { products, categories } from '../data/products.js'

const featured = products.filter((product) => product.featured)

const features = [
  {
    icon: Hammer,
    title: 'Hecho a mano',
    text: 'Cada pieza se arma con ensambles tradicionales, sin chapas ni atajos.',
  },
  {
    icon: Leaf,
    title: 'Maderas certificadas',
    text: 'Nogal, roble, cedro y teca de bosques de manejo responsable.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía de 10 años',
    text: 'Respaldamos la estructura de cada mueble que sale del taller.',
  },
  {
    icon: Truck,
    title: 'Envío a todo el país',
    text: 'Embalaje en madera y entrega agendada en la puerta de tu casa.',
  },
]

const stats = [
  { icon: Users, value: '+40', label: 'años de oficio' },
  { icon: Gem, value: '8', label: 'maderas nobles' },
  { icon: TreePine, value: '+2.500', label: 'piezas entregadas' },
]

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero__inner">
          <p className="hero__badge animate__animated animate__fadeInDown">
            <TreePine size={16} aria-hidden="true" />
            Artesanales desde 1987
          </p>

          <h1 className="hero__title animate__animated animate__fadeInDown">
            Maderas nobles que <em>perduran</em> generaciones
          </h1>

          <p className="hero__lead animate__animated animate__fadeInUp">
            Mesas, sillas, armarios y camas construidas con madera maciza seleccionada a mano.
            El carácter de la veta natural, la firmeza del ensamble y el calor de lo hecho con
            tiempo.
          </p>

          <div className="hero__actions animate__animated animate__fadeInUp">
            <Link to="/productos" className="btn btn--primary">
              Ver productos
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/categorias" className="btn btn--ghost">
              <LayoutGrid size={17} aria-hidden="true" />
              Explorar categorías
            </Link>
          </div>

          <ul className="hero__stats animate__animated animate__fadeInUp">
            {stats.map(({ icon: Icon, value, label }) => (
              <li key={label} className="hero__stat">
                <Icon size={20} aria-hidden="true" />
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="features">
        <div className="features__inner">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="feature">
              <span className="feature__icon">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="feature__title">{title}</h3>
                <p className="feature__text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Piezas destacadas"
          title="Las favoritas del taller"
          subtitle="Selección de muebles que mejor cuentan lo que hacemos: madera maciza, proporciones generosas y acabados a cera."
        />
        <div className="grid">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        <div className="section__cta">
          <Link to="/productos" className="btn btn--outline">
            Ver todos los productos
            <ChevronRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section section--tinted">
        <SectionTitle
          eyebrow="Categorías"
          title="¿Qué pieza buscas?"
          subtitle="Desde el comedor completo hasta el detalle que transforma una habitación."
        />
        <div className="grid grid--categories">
          {categories.map(({ id, name, icon: Icon, tone, description }) => (
            <Link
              key={id}
              to={`/productos?cat=${id}`}
              className="cat-tile animate__animated animate__fadeInUp"
            >
              <span className={`cat-tile__icon tone-${tone}`}>
                <Icon size={30} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <span className="cat-tile__body">
                <span className="cat-tile__name">{name}</span>
                <span className="cat-tile__desc">{description}</span>
              </span>
              <ChevronRight className="cat-tile__arrow" size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <figure className="quote animate__animated animate__fadeIn">
          <Quote size={40} aria-hidden="true" />
          <blockquote>
            “Pedimos la mesa del comedor con medidas especiales. Nos la entregaron con la veta
            hermosa y una tarjeta escrita a mano del carpentero que la hizo. Se nota el oficio.”
          </blockquote>
          <figcaption>— Familia Cárdenas, clientes desde 2019</figcaption>
        </figure>
      </section>

      <section className="cta-banner">
        <div className="cta-banner__inner">
          <div>
            <h2 className="cta-banner__title">¿Necesitas una pieza a medida?</h2>
            <p className="cta-banner__text">
              Trabajamos encargos especiales: medidas, madera y terminación según tu espacio.
            </p>
          </div>
          <a href="tel:+56942125573" className="btn btn--primary">
            <Phone size={17} aria-hidden="true" />
            Hablar con el taller
          </a>
          <a
            href={whatsappLink('Quiero hacer una consulta desde la página web.')}
            target="_blank"
            rel="noreferrer"
            className="btn btn--whatsapp"
          >
            <WhatsAppIcon size={17} aria-hidden="true" />
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
