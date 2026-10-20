import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Send, Trees, ChevronRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { whatsappLink } from '../data/contact.js'

/* --------------------------- Respuestas del bot --------------------------- */

const WELCOME = {
  text: '¡Hola! 👋 Soy Rumi, el asistente del taller Rústica. Trabajamos maderas nobles: mesas, sillas, armarios, estanterías, camas y decoración. ¿En qué te puedo ayudar hoy?',
  options: [
    { label: '🪑 Ver productos', topic: 'Me interesan sus muebles y productos.', reply: 'PRODUCTS' },
    { label: '✏️ Pedido a medida', topic: 'Quiero cotizar un mueble a medida.', reply: 'CUSTOM' },
    { label: '🚚 Envíos y plazos', topic: 'Consulta sobre envíos y plazos de entrega.', reply: 'SHIPPING' },
    { label: '📍 Ubicación y horarios', topic: 'Consulta sobre ubicación y horarios.', reply: 'LOCATION' },
    { label: '💬 Hablar con una persona', topic: 'Quiero hablar con una persona del taller.', reply: 'HUMAN' },
  ],
}

const REPLIES = {
  PRODUCTS: {
    text: 'Tenemos 14 piezas en catálogo: mesas de comedor y centro, sillas y bancas, armarios, estanterías, camas y decoración. Todas en madera maciza: nogal, roble, cedro, teca, fresno, peral, litro y haya.',
    link: { to: '/productos', label: 'Ver catálogo completo' },
    whatsapp: 'Me interesa conocer más detalles de sus productos.',
    options: [
      { label: '✏️ Cotizar a medida', topic: 'Quiero cotizar un mueble a medida.', reply: 'CUSTOM' },
      { label: '🚚 Envíos y plazos', topic: 'Consulta sobre envíos y plazos de entrega.', reply: 'SHIPPING' },
    ],
  },
  CUSTOM: {
    text: '¡Hacemos encargos a medida! Tú defines medidas, madera y terminación, y te cotizamos sin compromiso. Escríbenos por WhatsApp contándonos tu idea y te respondemos el mismo día.',
    whatsapp: 'Quiero cotizar un mueble a medida. Mi idea es: ',
    options: [
      { label: '🪑 Ver productos', topic: 'Me interesan sus muebles y productos.', reply: 'PRODUCTS' },
      { label: '📍 Visitar el taller', topic: 'Quiero visitar el taller.', reply: 'LOCATION' },
    ],
  },
  SHIPPING: {
    text: 'Despachamos a todo el país con embalaje en madera. Los plazos van de 2 a 5 semanas según la pieza y la madera elegida. El envío se agenda directamente con el taller.',
    whatsapp: 'Tengo una consulta sobre envíos y plazos de entrega.',
    options: [
      { label: '🪑 Ver productos', topic: 'Me interesan sus muebles y productos.', reply: 'PRODUCTS' },
      { label: '💬 Hablar con una persona', topic: 'Quiero hablar con una persona del taller.', reply: 'HUMAN' },
    ],
  },
  LOCATION: {
    text: 'Estamos en Camino del Roble km 4, Valles del Sur. Taller abierto de lunes a sábado, de 9:00 a 19:00. ¡Te esperamos con café! ☕',
    whatsapp: 'Quiero coordinar una visita al taller.',
  },
  HUMAN: {
    text: 'Por supuesto, te conecto con el equipo del taller. Escríbenos por WhatsApp y te atiende una persona real de lunes a sábado (9:00–19:00).',
    whatsapp: 'Vengo del chat de la web y quiero hablar con una persona del taller.',
  },
  PRICE: {
    text: 'Cada pieza tiene su precio según madera y tamaño: desde $190 por bandejas y repisas, hasta cerca de $1.900 por armarios de nogal. Puedes ver los valores en el catálogo.',
    link: { to: '/productos', label: 'Ver catálogo con precios' },
    whatsapp: 'Quiero una cotización formal.',
  },
  GREETING: {
    text: '¡Hola! Qué bueno tenerte por aquí. Puedo ayudarte con productos, pedidos a medida, envíos o la ubicación del taller. ¿Por dónde empezamos?',
    options: [
      { label: '🪑 Ver productos', topic: 'Me interesan sus muebles y productos.', reply: 'PRODUCTS' },
      { label: '✏️ Pedido a medida', topic: 'Quiero cotizar un mueble a medida.', reply: 'CUSTOM' },
    ],
  },
}

const INTENTS = [
  {
    test: /(medida|personaliz|encargo|especial|cotiz)/i,
    reply: 'CUSTOM',
  },
  {
    test: /(env[ií]o|env[ií]os|entrega|plazo|despacho|llega)/i,
    reply: 'SHIPPING',
  },
  {
    test: /(ubicaci|direcci|d[oó]nde|horario|visita|taller|mapa)/i,
    reply: 'LOCATION',
  },
  {
    test: /(precio|cu[aá]nto|valor|costo|cuesta)/i,
    reply: 'PRICE',
  },
  {
    test: /(producto|mueble|cat[aá]logo|mesa|silla|banca|armario|alacena|estante|estanter|cama|cabecero|espejo|bandeja)/i,
    reply: 'PRODUCTS',
  },
  {
    test: /(humano|persona|asesor|vendedor|hablar)/i,
    reply: 'HUMAN',
  },
  {
    test: /(hola|buenas|hey|saludos|qui[eé]n eres)/i,
    reply: 'GREETING',
  },
]

const matchReply = (text) => {
  const intent = INTENTS.find(({ test }) => test.test(text))
  if (intent) return REPLIES[intent.reply]
  return {
    text: 'Con gusto te ayudamos con eso. Para darte una respuesta precisa, te conecto con el equipo del taller por WhatsApp 👇',
    whatsapp: `Consulta desde el chat de la web: "${text}"`,
    options: [
      { label: '🪑 Ver productos', topic: 'Me interesan sus muebles y productos.', reply: 'PRODUCTS' },
      { label: '📍 Ubicación y horarios', topic: 'Consulta sobre ubicación y horarios.', reply: 'LOCATION' },
    ],
  }
}

/* ------------------------------- Widget ---------------------------------- */

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ id: 0, from: 'bot', ...WELCOME }])
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')

  const nextIdRef = useRef(1)
  const timersRef = useRef([])
  const logRef = useRef(null)
  const inputRef = useRef(null)

  // Limpia los timers pendientes al desmontar
  useEffect(() => () => timersRef.current.forEach((timer) => clearTimeout(timer)), [])

  // Auto-scroll al final de la conversación
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight
    }
  }, [messages, typing, open])

  // Enfoca el input al abrir y cierra con Escape
  useEffect(() => {
    if (!open) return undefined
    inputRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const pushBot = (reply, delay = 950) => {
    setTyping(true)
    const timer = setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { id: nextIdRef.current++, from: 'bot', ...reply }])
    }, delay)
    timersRef.current.push(timer)
  }

  const handleOption = (option) => {
    setMessages((prev) => [
      ...prev,
      { id: nextIdRef.current++, from: 'user', text: option.label },
    ])
    const reply = typeof option.reply === 'string' ? REPLIES[option.reply] : option.reply
    if (reply) pushBot(reply)
  }

  const handleSend = (event) => {
    event.preventDefault()
    const text = input.trim()
    if (!text || typing) return
    setInput('')
    setMessages((prev) => [...prev, { id: nextIdRef.current++, from: 'user', text }])
    pushBot(matchReply(text))
  }

  const lastMessage = messages[messages.length - 1]

  return (
    <>
      {/* Botón flotante */}
      <button
        type="button"
        className="chat-fab"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Cerrar asistente' : 'Abrir asistente de WhatsApp'}
        aria-expanded={open}
      >
        <span className="chat-fab__pulse" aria-hidden="true" />
        {open ? <X size={26} aria-hidden="true" /> : <WhatsAppIcon size={28} />}
        {!open && <span className="chat-fab__label">¿Te ayudo?</span>}
      </button>

      {/* Ventana de chat */}
      {open && (
        <aside className="chat animate__animated animate__slideInUp" aria-label="Asistente Rústica">
          <header className="chat__header">
            <span className="chat__header-icon">
              <Trees size={20} aria-hidden="true" />
            </span>
            <div className="chat__header-text">
              <strong>Rumi · Asistente Rústica</strong>
              <span className="chat__status">
                <i aria-hidden="true" /> En línea · responde al instante
              </span>
            </div>
            <button
              type="button"
              className="chat__close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
            >
              <X size={17} aria-hidden="true" />
            </button>
          </header>

          <div className="chat__log" ref={logRef} role="log" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={`chat__msg chat__msg--${message.from}`}>
                {message.from === 'bot' && (
                  <span className="chat__avatar">
                    <Trees size={13} aria-hidden="true" />
                  </span>
                )}
                <div className="chat__bubble">
                  <p>{message.text}</p>

                  {message.link && (
                    <Link to={message.link.to} className="chat__link">
                      {message.link.label}
                      <ChevronRight size={14} aria-hidden="true" />
                    </Link>
                  )}

                  {message.whatsapp && (
                    <a
                      className="chat__wa"
                      href={whatsappLink(message.whatsapp)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppIcon size={15} aria-hidden="true" />
                      Continuar en WhatsApp
                    </a>
                  )}

                  {message === lastMessage && message.options && (
                    <div className="chat__options">
                      {message.options.map((option) => (
                        <button
                          key={option.label}
                          type="button"
                          onClick={() => handleOption(option)}
                          disabled={typing}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="chat__msg chat__msg--bot" aria-label="Escribiendo…">
                <span className="chat__avatar">
                  <Trees size={13} aria-hidden="true" />
                </span>
                <div className="chat__typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>

          <form className="chat__composer" onSubmit={handleSend}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe tu consulta…"
              aria-label="Mensaje para el asistente"
            />
            <button type="submit" aria-label="Enviar mensaje" disabled={typing || !input.trim()}>
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </aside>
      )}
    </>
  )
}
