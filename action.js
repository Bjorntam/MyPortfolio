document.addEventListener("DOMContentLoaded", function() {
  var images = ["image/bjorno.jpg", "image/bjorno2.jpg",
                "image/bjorno3.jpg","image/bjorno4.jpg",
                "image/bjorno5.jpg","image/bjorno6.jpg"]; // Add paths to your images here
  var index = 0;
  var imageElement = document.getElementById("image");

  setInterval(function() {
    imageElement.style.opacity = 0; // Fade out the current image
    setTimeout(function() {
      index = (index + 1) % images.length; // Increment index and loop back to 0 when it reaches the end
      imageElement.src = images[index]; // Change the src attribute of the image
      imageElement.style.opacity = 1; // Fade in the new image
    }, 1000); // Wait for 1 second before changing the image (to allow for the fade-out effect)
  }, 10000); // Change picture every 10 seconds (10,000 milliseconds)
});

