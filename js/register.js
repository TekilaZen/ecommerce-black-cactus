// 1 - Obtener formulario y almacenarto en una variable de JS

const registerForm = document.querySelector("#register-form");

// a- Obtener botön de submit

const registerBtn = document.getElementById("submit");

//2- Vamos a escuchar eL evento directamente en JS

registerForm.addEventListener("submit", (event) => {
  console.log("Submit event");

  // a- preventDefauIt
  event.preventDefault();

  // b- Tomar los datos y armar eL objeto USUariO

  const el = event.target.elements;
  console.log(el);

  // d- Verificar que los datos ingresador de passwordl y password2

  if (el.password.value !== el.rpassword.value) {
    console.warn("password no coincide");
    return;
  }
    
     const user = JSON.parse(localStorage.getItem('users')) || [];

    const userExist1 = checkIfUserExist( user , el.email.value);
    
    if (userExist1) {
        return;
    }
    
  const User = {
    name: el.name.value,
    age: el.age.value,
    password: el.password.value,
      email: el.email.value,
    gender: el.gender.value,
    role: 'USER-ROLE'
  };
  
  // POR DEFECTO HACER QE EL USER ROLE SEA POR DEFECTO.
  // EL ADMIN ROLE LE DOY POR MONGO O ALGO ASI.
  // ADMIN SOLO LO PUEDE DAR EL SUPERADMIN - 

    // insertar en el array de usuarios el nuevo user
    user.push(User)
  // e- Guardarto en et localStorage
    localStorage.setItem('users', JSON.stringify(user)) //con un usuaio mas, lo debo guardar como texto, stringyfy
  // f- Limpiamos el formulario, o podemos llevar al USIJariO a la pagina de login
    // registerForm.reset()


    
//     setTimeout(() => {

//         alertDialog.classList.add('hidden')}, 3000)
   
});


function checkIfUserExist( usuario , emailToSearch) {
    const userExist = usuario.find(user => {
        if (user.email === emailToSearch) {
            return true;
        }
        //return false //* puede no colocarse ya que si no coloca, returna undefined que se considera false value.
    })  

    if (userExist) {
      console.warn(`el usuario ya existe`)

        return
    }
}

showAlert('Solo Textito','warning')

function showAlert(text, type = 'success') {
    // * HACEMOS EL ALERT CUSTOM
    //crea un html node
    const alertDialog = document.createElement('div');

    //agrega una clase
    alertDialog.classList.add('alert-dialog')
    // alertDialog.innerHTML = 'Se agrego el usuario correctamente!'
    alertDialog.innerHTML = text


  document.querySelector('body').appendChild(alertDialog)  //agrego el alert dialog al body
  
  if (type === 'error') {
    alertDialog.style.backgroundColor = 'red';

  }
  if (type === 'warning') {
    alertDialog.style.backgroundColor = 'orange';

  }
  
  // para demorar la aparicion luego de crearlo con document create element
  
  setTimeout(() => alertDialog.classList.add('show'), 10)

    setTimeout(() => {
        alertDialog.classList.remove('show');

        setTimeout(() => {
            alertDialog.remove();
        }, 1000)
        // window.location.href = '/pages/login/login.html'     
    }, 3000);


}

// siempre los parametros respetan el orden.

// function namedParameters(color, size, weight) {
  
//   const divTexto = document.createElement('p')

//   divTexto.innerText = 'Un textito a modificar'

//   // divTexto.style.color = color ? color : 'blue';
//   divTexto.style.color = color || 'blue'; // la alternativa mas piola de lo de arriba 

//   divTexto.style.fontSize = size || '1rem'

//   divTexto.style.weight = weight ? weight : 500

//   document.body.appendChild(divTexto)

// }

// ============================== parametros nombrado para que sea mas piola todo

function namedParameters({color, size, weight},otro) {
  
  const divTexto = document.createElement('p')

  divTexto.innerText = 'Un textito a modificar'

  // divTexto.style.color = color ? color : 'blue';
  divTexto.style.color = color || 'blue'; // la alternativa mas piola de lo de arriba 

  divTexto.style.fontSize = size || '1rem'

  divTexto.style.weight = weight ? weight : 500

  document.body.appendChild(divTexto)

}
