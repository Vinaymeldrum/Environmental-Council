function load(url, element) {
  req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send(null);
  element.innerHTML = req.responseText;
}

load("header.html", document.getElementById("loadHeader"));
load("footer.html", document.getElementById("loadFooter"));

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

var currentLink = window.location.href;
console.log(currentLink);
 if (currentLink.includes("goals.html")) {
   document.getElementById("goalsLink").style.color = "white";
   console.log("hi");
 }
