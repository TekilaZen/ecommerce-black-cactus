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
  // c- Verificar si hay en el locatStorage algun usuario guardado ya con ese email
    
  //i - obtener los usuarios guardados
    
    // const user = JSON.parse(localStorage.getItem('users')) || []; //si es null le agrego un array vacio, uqe el mismo ya posee el metodo para recorrerlos.
    
     const user = JSON.parse(localStorage.getItem('users')) || [];

    const userExist1 = checkIfUserExist( user , el.email.value);
    
    if (userExist1) {
        return;
    }



    // ====================================== lo hago funcion =================================================
    
    
    // let userEmailExist = false; //creo una variable

  //ii - recorrer el array con un forEach o find o filter  || el forEach recorre todo por mas que encuentre el item
  
//     // !========================== OPCION 1 FOREACH NO INDICADA ==========================

//     //// users.forEach(usr => {
//     ////     if (usr.email === el.email.value) { //verificar si los emails son iguales
//     ////         userEmailExist = true; 
//     ////     } 
//     //// })

//     //// if (userEmailExist) {
//     ////     console.warn(`el usuario ya existe`)
//     ////     return 
//     //// }
//  // *========================== OPCION 2 FIND ==========================
//     //cuando find encuentra un true, lo guarda en el userExist. cuando retorna el true, agarra el usuario que estaba iterando, el usuario completo y lo guarda.
    
//     const userExist = users.find(user => {
//         if (user.email === el.email.value) {
//             return true;
//         }
//         //return false //* puede no colocarse ya que si no coloca, returna undefined que se considera false value.
//     })  

//     if (userExist) {
//         console.warn(`el usuario ya existe`)
//         return
//     }

//  // *========================== OPCION 3 findIndex ==========================
    
//     const indexoOfUser = user.findIndex(usuario => {
//         if (usuario.email === el.email.value) {
//             return true
//         }

//         //si el index of user es 0, el resultado del if es false por lo qe no se ejecutaria el codigo. si el primero elemento del array es 0, puede pasar!  por eso uso >=0 o si es === -1 YA QUE SI FIND INDEX NO ENCUENTRA NADA, EL VALOR ES -1

//         if (indexOfUser === -1) {
//             console.warn(`el usuario ya existe findIndex`)
//             return
//         }
//     });

//     // 3 versiones
//     // existe: retorno y muestro un alert
//     // no existe: sigo con mi sintaxis normalmente
//   //iii -
    
  const User = {
    name: el.name.value,
    age: el.age.value,
    password: el.password.value,
      email: el.email.value,
      gender: el.gender.value,
  };

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
