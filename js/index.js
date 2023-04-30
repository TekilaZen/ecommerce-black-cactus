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

const user = JSON.parse(localStorage.getItem('currentUser'))

const cardContainer = document.querySelector('.cards-master-container')

const productsLS = JSON.parse(localStorage.getItem('products'))

function renderizarProductos(products) {
    
    cardContainer.innerHTML = ``
    
  products.forEach((product,index) => {

    const card = document.createElement('div');
    card.classList.add('cards-container');
    card.innerHTML = `
    <article class="card">
        
        <div class="card__header">
          <div class="card__productCategory">Abrigos</div>
          <div class="card__title">${product.productName}</div>
        </div>
        
        <div class="card__body">
        
          <div class="card__bodyContainer">
          <a id='img' href="/pages/product-detail/product-detail.html?id=${index}"
            >
            <div class="card__body">
        
              <div class="card__bodyOverlay">
                Ver Producto!
              </div>
        
              <div class="card__img"><img
                src="${product.productImg}"
                alt="${product.productName}"
                class="card__img"
            />
          </div>
              
        </div>
        
            </div></a>
          <p class="card__description">${product.productDescription}</p>
        </div>
          <div class="card__footer">
            <div class="card__price">${product.productPrice}</div>


            <button type="button" class="card__btn-container" onclick='addToOrder(${index})' ${user ? "" : "disabled"} >
  <a href="#" class="card__btn">Comprar</a>
</button>
          </div>
          </article>`
          
      
    cardContainer.appendChild(card)
    })
}

renderizarProductos(productsLS)