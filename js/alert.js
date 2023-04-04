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