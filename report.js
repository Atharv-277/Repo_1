// ===== Drag & Drop Upload =====
const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("imageUpload");
const preview = document.getElementById("preview");

if (uploadBox && fileInput) {
  uploadBox.addEventListener("click", () => fileInput.click());

  uploadBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadBox.classList.add("dragover");
  });

  uploadBox.addEventListener("dragleave", () => {
    uploadBox.classList.remove("dragover");
  });

  uploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadBox.classList.remove("dragover");
    fileInput.files = e.dataTransfer.files;
    showPreview(fileInput.files[0]);
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files[0]) showPreview(fileInput.files[0]);
  });

  function showPreview(file) {
    preview.innerHTML = "";
    if (!file) return;
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
  }
}

// ===== Form Submit =====
const reportForm = document.getElementById("reportForm");
if (reportForm) {
  reportForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Report submitted successfully!");
    reportForm.reset();
    if (preview) preview.innerHTML = "";
  });
}
