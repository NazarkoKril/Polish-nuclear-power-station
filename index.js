$(document).ready(function() {
    const swiper = new Swiper(".image-slider", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
 
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1500,
});

document.getElementById("myForm").addEventListener("submit", function(event) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    var namePattern = '/^[A-Za-zА-Яа-яЁёІіЇїЄє]+$/';
    var emailPattern = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/';
    var phonePattern = '/^\d{10}$/';
    
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
        alert("Proszę wpisać poprawne imię i nazwisko.");
        event.preventDefault();
    }
    
    if (!emailPattern.test(email)) {
        alert("Proszę wpisać aktualny adres e-mail.");
        event.preventDefault();
    }
    
    if (!phonePattern.test(phone)) {
        alert("Proszę wprowadzić prawidłowy numer telefonu.");
        event.preventDefault();
    }
});


  var $range = $(".js-range-slider");
var $input = $(".js-input");
var instance;
var min = 1100;
var max = 500000;
var multiplier = 6.54;

$range.ionRangeSlider({
    skin: "round",
    type: "single",
    min: min,
    max: max,
    from: 500,
    onStart: function(data) {
        $input.prop("value", data.from * multiplier + " PLN"); // Додаємо "PLN" до значення
    },
    onChange: function(data) {
        $input.prop("value", data.from * multiplier + " PLN"); // Додаємо "PLN" до значення
    }
});

instance = $range.data("ionRangeSlider");

$input.on("input", function() {
    var val = $(this).prop("value") / multiplier; // Розділити введене значення на множник

    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val
    });

    // Додаємо "PLN" до значення
    $input.prop("value", val + " PLN");
});

    
    
    

});




