function collapse() {
  var x = document.getElementsByClassName("collapse");
  var y = document.getElementsByClassName("filterplus");
  var z = document.getElementsByClassName("filterminus");

  if (x[0].style.display === "none") {
    x[0].style.display = "block";
    y[0].style.display = "none";
    z[0].style.display = "block";
  } else {
    x[0].style.display = "none";
    y[0].style.display = "block";
    z[0].style.display = "none";
  }
}