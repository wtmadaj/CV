/* Open when clicking on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100px";
  document.getElementById("body").style.marginLeft = "100px";
  document.getElementById("menu-button-area").style.marginLeft = "20px";
  document.getElementById("menu-button").style.color = "red"; // make the button stay red
  document.getElementById("menu-button").style.transform = "scale(1.5)"; // make the button stay enlarged to show that it's active
}

/* Close when clicking on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("body").style.marginLeft = "0%";
  document.getElementById("menu-button-area").style.marginLeft = "0%";
  document.getElementById("menu-button").style.color = ""; // reset the styling to normal per stylesheet
  document.getElementById("menu-button").style.transform = ""; // reset the styling to normal per stylesheet
}