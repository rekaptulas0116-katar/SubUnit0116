// script.js

// Fungsi untuk menampilkan galeri
async function loadGallery() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    const photoContainer = document.getElementById('photo-gallery');
    const videoContainer = document.getElementById('video-gallery');

    // Tampilkan foto
    data.photos.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo;
      img.alt = "Kegiatan SubUnit0116";
      img.classList.add('gallery-photo');
      photoContainer.appendChild(img);
    });

    // Tampilkan video
    data.videos.forEach(video => {
      const vid = document.createElement('video');
      vid.controls = true;
      vid.src = video;
      vid.classList.add('gallery-video');
      videoContainer.appendChild(vid);
    });
  } catch (error) {
    console.error("Gagal memuat data.json:", error);
  }
}

// Jalankan fungsi
document.addEventListener('DOMContentLoaded', loadGallery);
