// ================== THEME TOGGLE ==================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// ================== QUOTE ANIMATION ==================
const quotes = document.querySelectorAll(".quote-card");
const quoteObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

// Observe each quote
quotes.forEach(quote => quoteObserver.observe(quote));

// ================== TIMELINE ANIMATION ==================
const containers = document.querySelectorAll(".container");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  containers.forEach(container => {
    const containerTop = container.getBoundingClientRect().top;
    if (containerTop < triggerBottom) container.classList.add("visible");
  });
});

// ================== TIMELINE CLICK EFFECT ==================
const timelineSteps = document.querySelectorAll(".how-it-works .content");
timelineSteps.forEach(step => {
  step.addEventListener("click", () => {
    step.classList.add("active");
    setTimeout(() => step.classList.remove("active"), 500);
  });
});

// ================== NAVBAR SLIDE-IN ON LOAD ==================
window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  setTimeout(() => navbar.classList.add("show"), 200);

  // Make all timeline containers and quotes visible immediately
  containers.forEach(c => c.classList.add("visible"));
  quotes.forEach(q => q.classList.add("visible"));
});

// ================== NAVBAR SHRINK ON SCROLL ==================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "0.5rem 2rem";
    navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    navbar.style.transition = "all 0.3s ease";
  } else {
    navbar.style.padding = "0.8rem 2rem";
    navbar.style.boxShadow = "none";
  }
});
