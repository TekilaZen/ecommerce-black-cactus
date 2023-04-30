const user = JSON.parse(localStorage.getItem('currentUser'));

if (!user || user.role !== 'ADMIN_ROLE') {
    // para sacar o redireccionar al usuario si no esta logueado o no es admin. es para cuidar que no ingese nadie a la ruta.
    window.location.href = '/'
}
