import { Star, Leaf, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice, getProductCategory } from '../data/products.js'

export default function ProductCard({ product, index = 0 }) {
  const category = getProductCategory(product.category)
  const Icon = category?.icon

  return (
    <article
      className="product-card animate__animated animate__fadeInUp"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={`product-card__visual tone-${product.tone}`}>
        {Icon ? <Icon size={68} strokeWidth={1.15} aria-hidden="true" /> : null}
        <span className="product-card__wood">
          <Leaf size={12} aria-hidden="true" />
          {product.wood}
        </span>
      </div>

      <div className="product-card__body">
        <div className="product-card__rating">
          <Star size={14} aria-hidden="true" />
          <strong>{product.rating.toFixed(1)}</strong>
          <span>({product.reviews} reseñas)</span>
        </div>

        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          <Link
            to={`/productos?cat=${product.category}`}
            className="btn btn--outline btn--small"
            aria-label={`Ver ${product.name} en ${category?.name ?? 'productos'}`}
          >
            Ver pieza
            <ChevronRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
