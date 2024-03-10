document.addEventListener("DOMContentLoaded", function() {
  var images = ["image/bjorno.jpg", "image/bjorno2.jpg",
                "image/bjorno3.jpg","image/bjorno4.jpg",
                "image/bjorno5.jpg","image/bjorno6.jpg"]; 
  var index = 0;
  var imageElement = document.getElementById("image");

  setInterval(function() {
    imageElement.style.opacity = 0; 
    setTimeout(function() {
      index = (index + 1) % images.length; 
      imageElement.src = images[index]; 
      imageElement.style.opacity = 1; 
    }, 1000);
  }, 10000); 
});


$(document).on("scroll", function(){
  if($(document).scrollTop() > 86)
  {
    $("#navbar").addClass("sticky");
    $("#nav-logo").addClass("color-white");
    $(".nav-custom-link").addClass("color-white");
    $(".navbar-btn").addClass("nav-btn-icon");
  }
  else
  {
      $("#navbar").removeClass("sticky");
      $("#nav-logo").removeClass("color-white");
      $(".nav-custom-link").removeClass("color-white");
      $(".navbar-btn").removeClass("nav-btn-icon");
  }
});

