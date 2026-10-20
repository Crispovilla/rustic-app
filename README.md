# Rústica — Maderas Nobles 🪵

Tienda de muebles rústicos artesanales hechos con maderas nobles. Aplicación web construida con
**React + Vite**.

## Características

- **React Router DOM** con tres páginas: `Inicio`, `Productos` y `Categorías`
- **Catálogo de 14 productos** (mesas, sillas, armarios, estanterías, camas y decoración) con
  filtrado por categoría y búsqueda por texto
- **Iconos Lucide** (`lucide-react`) en navbar, cards, footer y toda la interfaz
- **Transiciones animate.css** en cards (fadeInUp escalonado) y micro-interacciones (tada, swing)
- **Estilo rústico**: paleta de maderas y crema, texturas de vetas en CSS, tipografías
  _Cinzel_ (títulos) y _Lora_ (cuerpo)
- Diseño **responsive** con menú móvil animado

## Tecnologías

| Tecnología         | Uso                          |
| ------------------ | ---------------------------- |
| React 19           | UI                           |
| Vite               | Build y dev server           |
| react-router-dom   | Navegación entre páginas     |
| lucide-react       | Iconos                       |
| animate.css        | Animaciones y transiciones   |

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # desarrollo (http://localhost:5173)
npm run build    # build de producción
npm run preview  # previsualizar build
npm run lint     # lint con oxlint
```

## Estructura

```
src/
├── components/        # Navbar, Footer, ProductCard, SectionTitle
├── data/products.js   # Categorías, maderas y productos del catálogo
├── pages/             # Home, Products, Categories
├── App.jsx            # Rutas y layout
└── index.css          # Tema rústico completo
```
