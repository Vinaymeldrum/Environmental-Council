// Importing code from navBar.html
  function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    element.innerHTML = req.responseText;
  }

load("navBar.html", document.getElementById("runNavBar"));ar
