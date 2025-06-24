// Typing Effect
const typed = new Typed(".typed-text", {
  strings: ["Muneeb Fayaz", "Front-End Developer", "Creative Coder"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scroll / height) * 100;
  document.getElementById("progress-bar").style.width = `${scrolled}%`;
});

// Floating Hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 20 + "px";
  document.querySelector(".hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 400);
