// Importing code from navBar.html
  function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    element.innerHTML = req.responseText;
  }

load("navBar.html", document.getElementById("runNavBar"));

document.getElementById("burgerMenu").addEventListener("click", loadBurgerMenu);

function loadBurgerMenu() {
  var x = document.getElementById("navLinks");
  if (x.className === "navBar") {
    x.className += " mobile";
    document.getElementById("burgerMenu").innerHTML = "&#10005;";
    document.getElementById("burgerMenu").setAttribute("aria-label", "Close menu");
  } else {
    x.className = "navBar";
    document.getElementById("burgerMenu").innerHTML = "&#9776";
    document.getElementById("burgerMenu").setAttribute("aria-label", "Open menu");
  }
}
