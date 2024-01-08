// Initialize tsparticles with the 'stars' preset
tsParticles.load("Background", {
  "particles": {
    "number": {
      "value": 100
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star"
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 2
    },
    "move": {
      "enable": true,
      "speed": 0.5
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  },
  "background": {
    "color": {
      "value": "#000000"
    }
  },
  "preset": "stars"
});
