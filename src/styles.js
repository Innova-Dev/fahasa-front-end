let listSlide = document.querySelector('.list-slide');
let items = document.querySelectorAll('.item');
let currentIndex = 0;
let slideWidth = items[0].offsetWidth;

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlidePosition();
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlidePosition();
}

function updateSlidePosition() {
    let newPosition = -currentIndex * slideWidth;
    listSlide.style.transform = 'translateX(' + newPosition + 'px)';
}
setInterval(nextSlide, 3000);


function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}


document.addEventListener("DOMContentLoaded", function() {
    var minusButton = document.querySelector(".button-minus");
    var plusButton = document.querySelector(".button-plus");
    var quantityField = document.querySelector(".quantity-field");

    minusButton.addEventListener("click", function() {
        if (parseInt(quantityField.value) > 1) {
            quantityField.value = parseInt(quantityField.value) - 1;
        }
    });

    plusButton.addEventListener("click", function() {
        quantityField.value = parseInt(quantityField.value) + 1;
    });
});
