import { Link } from 'react-router-dom'
import { Trees, MapPin, Phone, Mail, Clock, House, Package, LayoutGrid } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { whatsappLink } from '../data/contact.js'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__brand-col">
          <div className="brand brand--footer">
            <span className="brand__mark">
              <Trees size={24} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="brand__text">
              <span className="brand__name">Rústica</span>
              <span className="brand__tagline">Maderas Nobles</span>
            </span>
          </div>
          <p className="footer__about">
            Taller familiar de carpintería rústica. Seleccionamos maderas nobles de bosques
            certificados y las trabajamos a mano, como lo hacían nuestros abuelos.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Navegación</h3>
          <ul className="footer__links">
            <li>
              <Link to="/" className="footer__link">
                <House size={15} aria-hidden="true" /> Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" className="footer__link">
                <Package size={15} aria-hidden="true" /> Productos
              </Link>
            </li>
            <li>
              <Link to="/categorias" className="footer__link">
                <LayoutGrid size={15} aria-hidden="true" /> Categorías
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Contacto</h3>
          <ul className="footer__contact">
            <li>
              <MapPin size={15} aria-hidden="true" />
              <span>Camino del Roble km 4, Valles del Sur</span>
            </li>
            <li>
              <Phone size={15} aria-hidden="true" />
              <a href="tel:+56942125573">+56 9 421 2557</a>
            </li>
            <li>
              <WhatsAppIcon size={15} aria-hidden="true" />
              <a
                href={whatsappLink('Hola, vengo desde su página web.')}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp directo
              </a>
            </li>
            <li>
              <Mail size={15} aria-hidden="true" />
              <a href="mailto:hola@rustica.cl">hola@rustica.cl</a>
            </li>
            <li>
              <Clock size={15} aria-hidden="true" />
              <span>Lun a Sáb · 9:00 a 19:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} Rústica · Maderas Nobles. Hecho a mano con madera certificada.</p>
      </div>
    </footer>
  )
}
