/* Open when clicking on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "250px";
  document.getElementById("body").style.marginLeft = "250px";
  document.getElementById("icon-area").style.marginLeft = "20px";
  document.getElementById("nav-button").style.color = "red"; // make the button stay red
  document.getElementById("nav-button").style.transform = "scale(1.5)"; // make the button stay enlarged to show that it's active
}

/* Close when clicking on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("body").style.marginLeft = "0%";
  document.getElementById("icon-area").style.marginLeft = "0%";
  document.getElementById("nav-button").style.color = ""; // reset the styling to normal per stylesheet
  document.getElementById("nav-button").style.transform = ""; // reset the styling to normal per stylesheet
}