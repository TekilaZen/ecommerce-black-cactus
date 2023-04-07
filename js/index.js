{/* <article class="card">
<div class="card__header">
  <div class="card__productCategory">Abrigos</div>
  <div class="card__title">Product Name</div>
</div>

<div class="card__body">

  <div class="card__bodyContainer">
  <a id='img' href=""
    >
    <div class="card__body">

      <div class="card__bodyOverlay">
        Ver Producto!
      </div>

      <div class="card__img"><img
        src="/assets/Images/producto_1.jpg"
        alt="Imagen del producto"
        class="card__img"
    />
  </div>
      
</div>

    </div></a>
  <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni inventore molestiae neque iste minima cum omnis itaque optio dicta quia fuga distinctio quasi aperiam rem iusto, earum repudiandae unde.</p>
</div>
  <div class="card__footer">
    <div class="card__price">$15000</div>
    <div class="card__btn-container">
      <a href="#" class="card__btn">Comprar</a>
    </div>
  </div>

</article> */}

const cardContainer = document.querySelector('#cards-container')

const productsLS = JSON.parse(localStorage.getItem('products'))

function renderizarProductos(products) {
    
    cardContainer.innerHTML = ``
    
    products.forEach((product,index) => {
        const card = document.createElement('article');
        card.classList.add('card');
        card.innerHTML = `
        <div class="card__header">
          <div class="card__productCategory">Abrigos</div>
          <div class="card__title">Product Name</div>
        </div>
        
        <div class="card__body">
        
          <div class="card__bodyContainer">
          <a id='img' href="/pages/product-detail/product-detail.html?id=1"
            >
            <div class="card__body">
        
              <div class="card__bodyOverlay">
                Ver Producto!
              </div>
        
              <div class="card__img"><img
                src="${product.image}"
                alt="${product.name}"
                class="card__img"
            />
          </div>
              
        </div>
        
            </div></a>
          <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni inventore molestiae neque iste minima cum omnis itaque optio dicta quia fuga distinctio quasi aperiam rem iusto, earum repudiandae unde.</p>
        </div>
          <div class="card__footer">
            <div class="card__price">${product.price}</div>
            <div class="card__btn-container">
              <a href="#" class="card__btn">Comprar</a>
            </div>
          </div>`
        cardContainer.appendChild(card)
    })
}
renderizarProductos()