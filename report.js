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

  uploadBox.addEventListener("dragleave", () => uploadBox.classList.remove("dragover"));

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

// ===== Form Submit & Confetti =====
const reportForm = document.getElementById("reportForm");
if (reportForm) {
  reportForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Report submitted successfully!");
    confetti();
    reportForm.reset();
    if (preview) preview.innerHTML = "";
  });
}

function confetti() {
  for(let i=0;i<100;i++){
    const div=document.createElement('div');
    div.style.position='fixed';
    div.style.width='8px';
    div.style.height='8px';
    div.style.background=['#1E90FF','#00CFFF','#FFD700','#FF69B4'][Math.floor(Math.random()*4)];
    div.style.top='50%';
    div.style.left='50%';
    div.style.borderRadius='50%';
    div.style.zIndex='1000';
    div.style.opacity='0.9';
    div.style.transform=`translate(${Math.random()*400-200}px,${Math.random()*400-200}px) rotate(${Math.random()*360}deg)`;
    document.body.appendChild(div);
    setTimeout(()=>div.remove(),1000+Math.random()*1000);
  }
}
