const params = window.location.search

// const index = params.split('id=')[1]

console.log(params)

// si mando mas params y quiero seprar por id se complica el tema, a futuro trae errores.
 //metodo 1 
 
const index = params.split('id=')[1].split('&')[0]

    
// `?id=1`.split('id=')  // ver en consola desp


// metodo 2 (mas prolijo)

const paramsUrl = new URLSearchParams(params)

const paramsEntries = Object.fromEntries(paramsUrl)

const id = paramsEntries.id 

const products = JSON.parse(localStorage.getItem('products'))

const product = products[id]

document.body.innerText = JSON.stringify(product) // agregar aca el parrafo y todo el div etc etc de la pagina