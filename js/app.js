//Prevent default
const btn = document.querySelector(".formulario")
btn.addEventListener('click', e =>{
    e.preventDefault()
})

//Animacion al .header
ScrollReveal().reveal('.header',{
    duration: 2000,
    origin: 'top',
    distance: '100px'
})

//Animacion al .hero
ScrollReveal().reveal('.hero-img',{
    delay: 500,
    duration: 2000,
    origin: 'left',
    distance: '0'
})

//Animaciones al texto del hero
ScrollReveal().reveal('.hero-text_h1',{
    delay: 700,
    origin: 'left',
    distance: '100px',
    duration: 2000
})

//Animacion al parrafo del hero
ScrollReveal().reveal('.hero-text_p', {
    
    origin: 'left',
    distance: '100px',
    delay: 900,
    duration: 2000
})

//Animacion al btn del hero
ScrollReveal().reveal('.btn', {
    origin: 'left',
    distance: '100px',
    delay: 1100,
    duration: 2000
})
   

//Animacion al h2 de galeria
ScrollReveal().reveal('.scroll-h2', {
    delay: 200,
    duration: 2000,
})

//Animacion a imagenes de galeria

ScrollReveal().reveal('.scroll-right', {
    origin: 'right',
    distance: '200px',
    duration: 1000,
    delay: 700,
})

ScrollReveal().reveal('.scroll-left', {
    origin: 'left',
    distance: '200px',
    duration: 1000,
    delay: 700,
})

//Animacion al formulario
ScrollReveal().reveal('.formulario', {
    delay: 500,
    duration: 2000
})

//Animacion al footer
ScrollReveal().reveal('.contenido-footer', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000
})
