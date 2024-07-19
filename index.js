distanceESPvideo = document.getElementById("distanceESPvideo");
recoilVideo = document.getElementById("recoilVideo");
zoomVideo = document.getElementById("zoomVideo");

document.addEventListener("DOMContentLoaded", function() {
  const fadeElement = document.getElementById("Title");
  
  // Add the 'fade-in' class to trigger the CSS animation
  fadeElement.classList.add("fade-in");

  const textContainer = document.getElementById("SubTitle");
  const texts = ["Cheapest Rust Script", "Cheapest Rust Utility", "Cheapest Rust Software"];
  let currentIndex = 0;

  function changeText() {
    textContainer.classList.add("hidden"); // Start fade-out effect
    setTimeout(() => {
      textContainer.innerText = texts[currentIndex]; // Change text
      currentIndex = (currentIndex + 1) % texts.length; // Update index
      textContainer.classList.remove("hidden"); // Start fade-in effect
    }, 1500); // Wait for 1.5 seconds (equal to the transition duration)
    setTimeout(changeText, 3000); // Repeat after 3 seconds
  }

  distanceESPvideo.volume = 0;
  distanceESPvideo.play();
  distanceESPvideo.loop = true;

  recoilVideo.volume = 0;
  recoilVideo.play();
  recoilVideo.loop = true;

  zoomVideo.volume = 0;
  zoomVideo.play();
  zoomVideo.loop = true;

  // Initial call
  changeText(); // Start the text change function
});

