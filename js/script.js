$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:true,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 1000,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive:[
      {
        breakpoint: 1000,
        settings:{
          slidesToShow: 3
        }
      },  
      {
        breakpoint: 850,
        settings:{
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings:{
          slidesToShow: 1
        }
      }
    ]
  });
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 90, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// Initialize and add the map
      function initMap() {
        // The location of Uluru
        const uluru = { lat: 53.7148275, lng: 4209609 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 8,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 1000) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




$(document).ready(function() {
  $('.header_burger').click(function(event) {
    $('.header_burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});
$('.menu').click(function(){
       $('.header_burger, .menu').removeClass('active');
       $('body').removeClass('lock');
});