const badgeHTML = document.getElementById('cart-count')
let order = {
    products: [
        {
            productName: 'XBOX',
            cantidad: 2,
            price: 20000
        },
        {
            productName: 'SWITCH',
            cantidad: 2,
            price: 10000 
        }
    ],
    user: 'user@email.com',
    total: 30000
}

function actualizarBadge() {
    //itero en order.products
    badgeHTML.innerText = order.products.reduce((acc, producto) => {
        return acc += producto.cantidad
    },0)

    // metodo 2

    // let count = 0
    // order.products.forEach(prod => {
    //     count += prod.cantidad
    // })

    // badgeHTML.innertext = count

}

actualizarBadge()




//? agregar elemento // se guarda el order.

function addToOrder(index) {
    

    //tener la posiibilidad ed que cuando apriete el boton se a;ada el elemento al array dentro de order.products.

    // ante de hacer un push
    // deberia verificar si el producto con un fin o findIndex si el producto ya se encuentra, si se encuentra, incremento en ese producto su cantidad ++ si no hago un push de ese elemento.
    // (( como no tenemos index usemos el nombre del producto.)) 
    // si no hago un push de ese elemento.
        
    // incrementar el total
    // volver a guardar en el podemos usar un sessionStorage.
    actualizarBadge()
}
        
//? eliminar elemento

    // pintamos en el voton de mi orden el index de el array order.products y lo eliminamos con un splice.
    
    //ante de eliminarlo, Guardar el precio del producto por la cantidad y restarselo al total
    
    //actualizar el sessionStorage
    
//? Listar order

    //pintar los elementos en una nueva pagina. crear tabla etc etc.
    

    //! hacer un badge =  css fontawesome badge. ver que onda esto! para ir sumando la cantidad de articulos. solo contando cantidad de elementos del array order.products