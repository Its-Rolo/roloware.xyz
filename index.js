document.addEventListener("DOMContentLoaded", function() {
  const textContainer = document.getElementById("SubTitle");
  const texts = ["Best ShellShock.io Cheat", "Best ShellShock.io Hack", "Best ShellShock.io Mod"];
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

  // Initial call
  changeText(); // Start the text change function
});

