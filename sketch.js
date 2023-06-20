// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the width of the sidebar-nav element
  var sidebarNav = document.getElementById("sidebar-nav");
  var sidebarNavWidth = sidebarNav.offsetWidth;

  // Set the width of the sidebar element
  var sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.width = sidebarNavWidth + "px";

  // Show and hide the sidebar on menu button click
  var menuButton = document.querySelector(".menu-button");
  var sidebar = document.querySelector(".sidebar");

  menuButton.addEventListener("mouseenter", function() {
    sidebar.classList.add("show");
  });

  sidebar.addEventListener("mouseleave", function() {
    sidebar.classList.remove("show");
  });

  // Truncate long text in sidebar
  var sidebarLinks = document.querySelectorAll(".sidebar a");
  sidebarLinks.forEach(function(link) {
    var linkText = link.textContent;
    var linkWidth = link.offsetWidth;

    while (link.scrollWidth > linkWidth) {
      linkText = linkText.slice(0, -1);
      link.textContent = linkText + "...";
    }
  });
});

// Rest of the code...

// Variables for p5.js sketch
var canvas;
var backgroundColor = "#333";

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("myCanvas");
}

function draw() {
  background(backgroundColor);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}