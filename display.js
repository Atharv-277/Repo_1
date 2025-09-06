// Sidebar highlight
document.querySelectorAll(".sidebar li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
    item.classList.add("active");
  });
});

// Smooth scroll to awareness
document.addEventListener("DOMContentLoaded", () => {
  const awarenessLink = document.getElementById("awareness-link");
  const awarenessSection = document.getElementById("awareness");

  if (awarenessLink && awarenessSection) {
    awarenessLink.addEventListener("click", (e) => {
      e.preventDefault();
      awarenessSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});
