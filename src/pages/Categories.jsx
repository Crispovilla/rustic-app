import { Link } from 'react-router-dom'
import { Layers, Boxes, ChevronRight, Leaf } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { categories, products, woods } from '../data/products.js'

export default function Categories() {
  return (
    <div className="page">
      <header className="page-header">
        <div className="page-header__inner animate__animated animate__fadeInDown">
          <p className="section__eyebrow section__eyebrow--light">
            <Layers size={15} aria-hidden="true" />
            Nuestro catálogo
          </p>
          <h1 className="page-header__title">Categorías</h1>
          <p className="page-header__subtitle">
            Seis familias de muebles, todas en madera maciza y terminadas a mano con cera natural.
          </p>
        </div>
      </header>

      <section className="section section--compact">
        <div className="grid grid--categories">
          {categories.map(({ id, name, icon: Icon, tone, description }) => {
            const count = products.filter((product) => product.category === id).length
            return (
              <Link
                key={id}
                to={`/productos?cat=${id}`}
                className="cat-card animate__animated animate__fadeInUp"
              >
                <span className={`cat-card__visual tone-${tone}`}>
                  <Icon size={44} strokeWidth={1.25} aria-hidden="true" />
                </span>
                <span className="cat-card__body">
                  <span className="cat-card__row">
                    <span className="cat-card__name">{name}</span>
                    <span className="cat-card__count">
                      <Boxes size={13} aria-hidden="true" />
                      {count} {count === 1 ? 'pieza' : 'piezas'}
                    </span>
                  </span>
                  <span className="cat-card__desc">{description}</span>
                  <span className="cat-card__link">
                    Ver productos
                    <ChevronRight size={15} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="section section--tinted">
        <SectionTitle
          eyebrow="Materia prima"
          title="Las maderas que trabajamos"
          subtitle="Elegimos cada tablón por su veta, su densidad y su historia. Estas son las ocho maderas nobles del taller."
        />
        <ul className="woods-list">
          {woods.map(({ name, description }) => (
            <li key={name} className="wood-chip animate__animated animate__fadeInUp">
              <span className="wood-chip__icon">
                <Leaf size={16} aria-hidden="true" />
              </span>
              <div>
                <strong>{name}</strong>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
