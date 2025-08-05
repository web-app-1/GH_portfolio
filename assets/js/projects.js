function openGallery(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeGallery() {
  const galleries = document.querySelectorAll(".gallery-modal");
  galleries.forEach(gallery => gallery.classList.add("hidden"));
}

function openVideoModal(youtubeUrl) {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-frame");
  iframe.src = youtubeUrl;
  modal.classList.remove("hidden");
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-frame");
  iframe.src = "";
  modal.classList.add("hidden");
}
