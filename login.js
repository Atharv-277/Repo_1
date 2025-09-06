const userBtn = document.getElementById("userBtn");
const adminBtn = document.getElementById("adminBtn");
const adminIdGroup = document.getElementById("adminIdGroup");

// Default: User Login (Admin ID hidden)
adminIdGroup.style.display = "none";

userBtn.addEventListener("click", () => {
  userBtn.classList.add("active");
  adminBtn.classList.remove("active");
  adminIdGroup.style.display = "none"; // hide admin ID
});

adminBtn.addEventListener("click", () => {
  adminBtn.classList.add("active");
  userBtn.classList.remove("active");
  adminIdGroup.style.display = "block"; // show admin ID
});
