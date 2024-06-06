var myNav = $("#nav");
$(".panel.top").css("background-color", "black");

var flkty = new Flickity('.carousel', {
    imagesLoaded: true,
    percentPosition: false,
    pageDots: false
  });
  var carouselStatus = document.querySelector('.carousel-status');
  var caption = document.querySelector('.caption');
  
  function updateStatus() {
    var slideNumber = flkty.selectedIndex + 1;
    carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
  }
  flkty.on( 'select', function() {
    caption.textContent = flkty.selectedElement.children[0].alt;
  });
  updateStatus();
  
  flkty.on( 'select', updateStatus );
  