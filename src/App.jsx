import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Chatbot from './components/Chatbot.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Categories from './pages/Categories.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main className="app-main">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
