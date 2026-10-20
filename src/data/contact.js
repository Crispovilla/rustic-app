/**
 * Configuración de contacto directo con WhatsApp.
 * Reemplaza WHATSAPP_NUMBER por el número real del taller (formato internacional sin + ni espacios).
 */
export const WHATSAPP_NUMBER = '56942125573'

/** Genera el enlace wa.me con el mensaje precargado según el contexto. */
export const whatsappLink = (topic = '') => {
  const base = '¡Hola Rústica! Vengo desde su página web.'
  const text = topic ? `${base} ${topic}` : `${base} ¿Me pueden ayudar?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
