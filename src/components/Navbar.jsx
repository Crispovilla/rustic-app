import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Trees, House, Package, LayoutGrid, Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { to: '/', label: 'Inicio', icon: House, end: true },
  { to: '/productos', label: 'Productos', icon: Package, end: false },
  { to: '/categorias', label: 'Categorías', icon: LayoutGrid, end: false },
]

const getInitialTheme = () => {
  try {
    const stored = window.localStorage.getItem('rustic-theme')
    if (stored === 'dark' || stored === 'light') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem('rustic-theme', theme)
    } catch {
      /* almacenamiento no disponible */
    }
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand__mark">
            <Trees size={26} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="brand__text">
            <span className="brand__name">Rústica</span>
            <span className="brand__tagline">Maderas Nobles</span>
          </span>
        </Link>

        <div className="navbar__tools">
          <button
            type="button"
            className="navbar__theme"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            title={theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}
          >
            {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav className={`navbar__menu ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul className="navbar__links">
            {links.map(({ to, label, icon: Icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenu}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  <Icon size={17} strokeWidth={1.9} aria-hidden="true" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/productos" className="btn btn--primary btn--small navbar__cta" onClick={closeMenu}>
            Ir a la tienda
          </Link>
        </nav>
      </div>
    </header>
  )
}
