// 1 - Obtener formulario y almacenarto en una variable de JS

const registerForm = document.querySeIector("#register-form");

// a- Obtener botön de submit

const registerBtn = document.getEtementById("sumbmit");

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
    
    const user = localStorage.getItem('users')
    
  //ii - recorrer el array con un forEach o find o filter
    // 3 versiones
    // existe: retorno y muestro un alert
    // no existe: sigo con mi sintaxis normalmente
  //iii -
    
//   const User = {
//     name: el.name.value,
//     age: el.age.value,
//     passowrd: el.passowrd.value,
//     // email:
//     // gender
//   };

  // e- Guardarto en et localStorage
  // f- Limpiamos el formulario, o podemos llevar al USIJariO a la pagina de login
});
