
// FUNCIONES PARA ARMAR ENLACES

// Foto de Unsplash a partir de su código.
// foto ya recortada (fit=crop) y comprimida (q=60).
export const foto = (codigo: string, ancho = 700): string =>
  `https://images.unsplash.com/${codigo}?auto=format&fit=crop&w=${ancho}&q=60`

// Foto de perfil genérica (número del 1 al 70).
export const avatar = (numero: number): string => `https://i.pravatar.cc/200?img=${numero}`

//youTube
export const miniatura = (idVideo: string): string => `https://i.ytimg.com/vi/${idVideo}/hqdefault.jpg`
export const videoEmbebido = (idVideo: string): string => `https://www.youtube.com/embed/${idVideo}?autoplay=1`
export const videoEnYoutube = (idVideo: string): string => `https://www.youtube.com/watch?v=${idVideo}`

//whatsApp
export const telefonoWhatsApp = '529334063995'
export const whatsapp = (mensaje: string): string =>
  `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`

//precio
export const precio = (cantidad: number): string =>
  cantidad === 0 ? 'Gratis' : `$${cantidad.toLocaleString('es-MX')} MXN`
