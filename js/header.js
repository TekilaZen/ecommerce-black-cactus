const signIn = document.getElementById("sign-in");
const navbarList = document.getElementById("navbar-list");

function renderHeaderLinks() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (currentUser) {

        const link = document.createElement('div')
        link.classList.add("navbar__nav-link")
        link.setAttribute('onclick', 'logout()')
        link.innerText = 'Logout'
        signIn.replaceChildren(link)


    if (currentUser.role === "ADMIN_ROLE") {
      const adminProductLink = createListItemElements(
        "admin-product",
        "Admin Product",
        "li"
      );
      const adminUserLink = createListItemElements(
        "admin-user",
        "Admin Users",
        "li"
      );

      navbarList.appendChild(adminProductLink);
      navbarList.appendChild(adminUserLink);
    }
  } else {
    const link = createLinkElement("login", "Login");

    signIn.replaceChildren(link);
  }
}

//  ================================================

function createListItemElements(path, text) {
  const listItem = document.createElement("li");
    listItem.classList.add("navbar__nav-item");
    // le asigno atributo ID
  listItem.setAttribute("id", path);
    link = createLinkElement(path, text);
    
  listItem.appendChild(link);
  return listItem;
}

function createLinkElement(path, text) {
  const link = document.createElement("a");
  link.classList.add("navbar__nav-link");
  link.href = `/pages/${path}/${path}.html`;
  link.innerText = text;

  return link;
}

function logout() {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (currentUser.role === 'ADMIN_ROLE') {
    
    document.getElementById(`admin-product`).remove()
    document.getElementById(`admin-user`).remove()
  }
  
    localStorage.removeItem("currentUser");
    renderHeaderLinks();
}

renderHeaderLinks();
