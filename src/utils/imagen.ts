export const foto = (codigo: string, ancho = 800): string =>
  `https://images.unsplash.com/${codigo}?auto=format&fit=crop&w=${ancho}&q=70`

// Foto de perfil de una persona (número del 1 al 70).
export const avatar = (numero: number): string => `https://i.pravatar.cc/160?img=${numero}`

export const buscarVideos = (texto: string): string =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(texto)}`

//si no carga la foto se oculta
export const ocultarImagen = (evento: Event): void => {
  ;(evento.target as HTMLImageElement).style.display = 'none'
}
