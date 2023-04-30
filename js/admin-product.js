// =================  GENERAR EL OBJETO USUARIOS Y GUARDARLO EN LOCALSTORAGE ==================

let products = JSON.parse(localStorage.getItem("products")) || [];

// ================= OBTENER EL BODY DE LA TABLA ==================

const tableBody = document.querySelector("#table__body");

// ================= OBTENER OTROS VALORES DEL HTML ===============

const submitBtn = document.querySelector('#submit')

const productForm = document.querySelector('#product-form')

// ================= GENERAR VARIABLES ===============

let editIndex;

// ================= RENDERIZADO DE TABLA =========================

function renderizarTabla() {

  tableBody.innerHTML = "";

  submitBtn.innerText = 'Cargar';

  if (products.length === 0) {
    tableBody.innerHTML = `<p class=disabled> no hay productos cargados</p>`;
  }

  // 3) Iterar el array para acceder a cada producto
  
  products.forEach((productIterado, index) => {
    // 4 - Introducir dentro del tbody una fila por producto con sus respectivas celdas
    const tableRow = `
                                  <tr class='product'>

                                  <td class="product__img"> <img class="img_product" src=" ${productIterado.productImg}" alt="${productIterado.productName}"> </td>

                                  <td class="product__name">${productIterado.productName}</td>
                                  <td
                                  class="product__description">${productIterado.productDescription}</td>
                                  <td
                                  class="product__price">${productIterado.productPrice}</td>
                                  
                                  <td class="product__action">
                                  
                                  <button class="product__action-btnEdit" onclick='editProduct(${index})'><i class="fa-solid fa-pen-to-square"></i></button>

                                  <button class="product__action-btnDelete" onclick='deleteProduct(${index})'><i class="fa-solid fa-trash"></i></button>
                                  </td>

                                  </tr>`;
    tableBody.innerHTML += tableRow;
  });
}

// =============== ADD ======================

function addProduct(evt) {

    evt.preventDefault();
    
  // guardamos los elementos, para guardar los valores de cada item
    
  const elements = evt.target.elements;

  const newProduct = {
    productImg: evt.target.elements.productImg.value ,
    productName: capitalize(evt.target.elements.productName.value) ,
    productDescription: capitalize(evt.target.elements.productDescription.value),
    productPrice: evt.target.elements.productPrice.valueAsNumber,
  };

    // AGREGO  LA EDICION DE LOS ELEMENTOS
  
  if (editIndex >= 0) {
    products[editIndex] = newProduct;
  } else {
    products.push(newProduct);
  }

  localStorage.setItem("products", JSON.stringify(products));

    // RESETEO LOS CAMPOS DEL FORM
  
    editIndex = undefined;
  
    renderizarTabla();

    evt.target.reset();
    
    elements.productName.focus();
    
    renderizarTabla();
}

// =============== EDIT ======================

function editProduct(idx) {
  
  submitBtn.innerText = 'Editar';

  let product = products[idx];

  editIndex = idx;

  const elem = productForm.elements;

  Object.keys(product).forEach((key) => {
    if (typeof product[key] !== 'boolean') {
      elem[key].value = product[key];
    }
  })
  



}
// =============== DELETE ======================

function deleteProduct(index) {
  
  if (confirm(`¿Esta seguro que desea borrar el el usuario?`) === true) {

    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
  }

    renderizarTabla();
}
  
// =============== CLEAR TABLE ======================
function clearTable() {
  
  let captcha = numRandom().join("").toString()

  swal.fire({
    title: 'Ingrese el código de confirmación ' + captcha,
    text: 'Por favor ingrese el código:',
    input: 'text',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel',
    cancelButtonColor: '#d33',
    inputValidator: (value) => {
      if (!value || value !== captcha) {
        return 'Ingrese el código de forma correcta!'
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('products')
      products = []
      renderizarTabla();
    } else {
      swal.fire(
        'Cancelado!'
      )
    }
  });

}

// =============== EJECUCION DE RENDERIZADO DE TABLA ======================

renderizarTabla();

// =============== AUX FUNCTIONS======================

// =============== capitalize ======================

function capitalize(word) {
  return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
}

// =============== random function ======================

function numRandom() {
  const array = []
  for (let i = 0; i < 10; i++){
    array.push(Math.floor(Math.random() * 10))
  }
  return array
}