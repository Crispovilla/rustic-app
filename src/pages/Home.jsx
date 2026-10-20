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
  Award,
} from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import { whatsappLink } from '../data/contact.js'
import { products, categories } from '../data/products.js'

const featured = products.filter((product) => product.featured)

const craftPoints = [
  {
    icon: Hammer,
    title: 'Ensambles tradicionales',
    text: 'Cola de golondrina, espigas y tarugos: nada de clavos ni chapas.',
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
  { icon: Award, value: '10 años', label: 'de garantía' },
]

export default function Home() {
  return (
    <div className="page">
      {/* ---------------------------------- HERO --------------------------------- */}
      <section className="hero">
        <div className="hero__content">
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
                <Icon size={19} aria-hidden="true" />
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__cue" aria-hidden="true">
          <span className="hero__cue-line" />
          Descubre
        </div>
      </section>

      {/* ------------------------------- EL TALLER ------------------------------- */}
      <section className="section story">
        <div className="story__inner">
          <div className="story__media animate__animated animate__fadeInLeft">
            <img
              src="/story-rustic.jpg"
              alt="Mueble rústico de madera maciza junto a una pared de ladrillo blanco"
              loading="lazy"
            />
            <span className="story__stamp">
              <Award size={16} aria-hidden="true" />
              Taller familiar · desde 1987
            </span>
          </div>

          <div className="story__body animate__animated animate__fadeInRight">
            <p className="section__eyebrow section__eyebrow--left">
              <TreePine size={15} aria-hidden="true" />
              El taller
            </p>
            <h2 className="section__title">
              Cada pieza lleva el pulso de quien la trabaja
            </h2>
            <p className="story__text">
              Seleccionamos el tablón, respetamos su veta y dejamos que el tiempo haga el resto.
              No fabricamos en serie: cada mueble se corta, se ensambla y se encera a mano en
              nuestro taller de Valles del Sur.
            </p>

            <ul className="story__points">
              {craftPoints.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="story__point-icon">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/categorias" className="btn btn--outline">
              Conocer nuestras maderas
              <ChevronRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------- PIEZAS DESTACADAS -------------------------- */}
      <section className="section section--tinted">
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

      {/* -------------------------------- CATEGORÍAS ------------------------------ */}
      <section className="section">
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

      {/* -------------------------------- TESTIMONIO ----------------------------- */}
      <section className="section section--tinted">
        <figure className="quote animate__animated animate__fadeIn">
          <Quote size={40} aria-hidden="true" />
          <blockquote>
            “Pedimos la mesa del comedor con medidas especiales. Nos la entregaron con la veta
            hermosa y una tarjeta escrita a mano del carpintero que la hizo. Se nota el oficio.”
          </blockquote>
          <figcaption>— Familia Cárdenas, clientes desde 2019</figcaption>
        </figure>
      </section>

      {/* ---------------------------------- CTA ---------------------------------- */}
      <section className="cta-banner">
        <div className="cta-banner__inner">
          <div>
            <h2 className="cta-banner__title">¿Necesitas una pieza a medida?</h2>
            <p className="cta-banner__text">
              Trabajamos encargos especiales: medidas, madera y terminación según tu espacio.
            </p>
          </div>
          <div className="cta-banner__actions">
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
        </div>
      </section>
    </div>
  )
}
