function showAlert(text, type = 'success') {
    // * HACEMOS EL ALERT CUSTOM

    const alertDialog = document.createElement('div');

    alertDialog.classList.add('alert-dialog')

    alertDialog.innerHTML = text


  document.querySelector('body').appendChild(alertDialog)
  
  if (type === 'error') {
    alertDialog.style.backgroundColor = 'red';

  }
  if (type === 'warning') {
    alertDialog.style.backgroundColor = 'orange';

  }
  
  setTimeout(() => alertDialog.classList.add('show'), 10)

    setTimeout(() => {
        alertDialog.classList.remove('show');

        setTimeout(() => {
            alertDialog.remove();
        }, 1000)
    }, 3000);


}