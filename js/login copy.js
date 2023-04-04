//1 a. guardo el formulario en una variable

const loginForm = document.getElementById('loginForm')

//1 . obtener los datos del formulario
loginForm.addEventListener('submit', (event) => {
    event.preventDefault() //evita que se actualiza, debemos hacer siempre
    // console.dir(loginForm)
    const { email, password } = loginForm.elements
    
    console.log(email.value, password.value)


    //2. chequear usuario y contrasena con usuarios que tengo
    //2.i obtener usuarios almacenados
    const users = JSON.parse(localStorage.getItem('users')) || []
    // =======> usaria find ya que cuando encuentra lo guarda.
    const user = users.find((usr) => {
        if (usr.email === email.value) {
            return true
        }

        // return false si no lo pongo retorna undefined que se toma como falso.
    }) // {name , password, email}

    // == metodo 1 

    // if (!user) {
    //     alert(`los datos ingresados no son correctos`);
    //     return;
    // }

    // if (user.password === password) {
    //     localStorage.setItem('currentUser', JSON.stringify(user)) //guardamos en el local storage los datos del usuario
    //     alert(`Login Correcto`)
    // } else {
    //     alert(`los datos ingresados no son correctos`);
    //     return
    // }

    // == metodo 2 ========== preferible usar este

    if (!user || user.password === password) {
        alert(`los datos ingresados no son correctos`);
        return;
    }

    if (user.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(user)) //guardamos en el local storage los datos del usuario
        alert(`Login Correcto`)
    }

    console.log(user);




})

    //a. el email que  ingreso existe?
    //b. la contrasena es la correcta?


//3. guardar en el localStorage un registro que va a ser currentUser - user para guardar los datos de la persona que esta logueada en ese momento. usos: por ejemplo para habilitarle la compra solo si esta logueado, o pintar algun boton en especifico.

//function logout

//1. Borrar el registro del localStorage.