import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, LayoutGrid, Package, X, Armchair } from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('cat') ?? 'todos'
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'todos' || product.category === activeCategory
      const matchesQuery =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.wood.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  const selectCategory = (id) => {
    if (id === 'todos') {
      setSearchParams({})
    } else {
      setSearchParams({ cat: id })
    }
  }

  const clearFilters = () => {
    setQuery('')
    setSearchParams({})
  }

  const chips = [{ id: 'todos', name: 'Todos', icon: LayoutGrid }, ...categories]

  return (
    <div className="page">
      <header className="page-header">
        <div className="page-header__inner animate__animated animate__fadeInDown">
          <p className="section__eyebrow section__eyebrow--light">
            <Armchair size={15} aria-hidden="true" />
            Nuestro catálogo
          </p>
          <h1 className="page-header__title">Muebles Rústicos</h1>
          <p className="page-header__subtitle">
            {products.length} piezas en madera maciza, elaboradas una a una en nuestro taller.
          </p>
        </div>
      </header>

      <section className="section section--compact">
        <div className="toolbar">
          <div className="toolbar__chips" role="group" aria-label="Filtrar por categoría">
            {chips.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                type="button"
                className={`chip${activeCategory === id ? ' active' : ''}`}
                onClick={() => selectCategory(id)}
                aria-pressed={activeCategory === id}
              >
                <Icon size={15} aria-hidden="true" />
                {name}
              </button>
            ))}
          </div>

          <div className="search">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por pieza o madera…"
              aria-label="Buscar productos"
            />
          </div>
        </div>

        <p className="results-count" aria-live="polite">
          {filtered.length === 0
            ? 'Sin resultados'
            : `Mostrando ${filtered.length} de ${products.length} piezas`}
        </p>

        {filtered.length > 0 ? (
          <div className="grid">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="empty-state animate__animated animate__fadeIn">
            <span className="empty-state__icon">
              <Package size={44} strokeWidth={1.3} aria-hidden="true" />
            </span>
            <h2>No encontramos esa pieza</h2>
            <p>Prueba con otra madera o vuelve a ver el catálogo completo.</p>
            <button type="button" className="btn btn--primary" onClick={clearFilters}>
              <X size={16} aria-hidden="true" />
              Limpiar filtros
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
