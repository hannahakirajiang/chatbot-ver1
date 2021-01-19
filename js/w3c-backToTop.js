// JavaScript Document

//back to top button

/*******************
Back To Top Button Reference:  
*	Title: How TO - Scroll Back To Top Button
*	Author: w3schools.com
*	Date: 12/2020
*	Availability: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
***********************/


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
