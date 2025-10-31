<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Karang Taruna Rekaptulas</title>
  <style>
    /* ====== GAYA DASAR ====== */
    body {
      font-family: Tahoma, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
      color: #fff;
      background-image: url('images/IMG_20250902_142459[2].jpg');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }

    /* ====== HEADER ====== */
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      padding: 1.5rem 0;
    }

    .logo-container {
      width: 140px;
      height: 140px;
      overflow: hidden;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
    }

    .logo {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h1 {
      text-align: center;
      font-size: 1.7rem;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
    }

    /* ====== NAVIGASI ====== */
    nav {
      display: flex;
      justify-content: center;
      background: rgba(0, 0, 0, 0.7);
      padding: 10px 0;
      gap: 20px;
      flex-wrap: wrap;
    }

    nav a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
    }

    nav a:hover {
      color: #ffd700;
    }

    /* ====== SECTION ====== */
    section {
      background: rgba(0, 0, 0, 0.6);
      margin: 30px auto;
      padding: 20px;
      max-width: 900px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(255,255,255,0.2);
    }

    section h2 {
      text-align: center;
      color: #ffd700;
    }

    /* ====== GALERI ====== */
    .galeri-buttons {
      text-align: center;
      margin-bottom: 20px;
    }

    .galeri-buttons button {
      background: #ffd700;
      color: #000;
      border: none;
      padding: 10px 20px;
      margin: 0 10px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
    }

    .galeri-buttons button:hover {
      background: #e0b800;
    }

    .galeri-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      justify-items: center;
    }

    .galeri-container img, .galeri-container video {
      width: 100%;
      height: 200px;
      border-radius: 10px;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .galeri-container img:hover, .galeri-container video:hover {
      transform: scale(1.05);
    }

    /* ====== LIGHTBOX ====== */
    .lightbox {
      display: none;
      position: fixed;
      z-index: 999;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      justify-content: center;
      align-items: center;
    }

    .lightbox-content {
      max-width: 80%;
      max-height: 80%;
      border-radius: 10px;
    }

    .close {
      position: absolute;
      top: 20px;
      right: 40px;
      color: #fff;
      font-size: 40px;
      cursor: pointer;
    }

    /* ====== KONTAK ====== */
    #kontak ul {
      list-style: none;
      padding: 0;
    }

    #kontak li {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .icon-sosmed {
      width: 22px;
      height: 22px;
      vertical-align: middle;
      filter: brightness(0) invert(1);
      transition: transform 0.2s, filter 0.3s;
    }

    .icon-sosmed:hover {
      transform: scale(1.1);
      filter: brightness(1) invert(0.2);
    }

    /* ====== FOOTER ====== */
    footer {
      text-align: center;
      padding: 15px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      margin-top: 20px;
    }

    a {
      color: #ffd700;
    }

    a:hover {
      text-decoration: underline;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      header {
        padding: 1rem;
      }
      .logo-container {
        width: 110px;
        height: 110px;
      }
      h1 {
        font-size: 1.3rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="logo-container">
      <img src="images/IMG_20250902_142459[2].jpg" alt="Logo Karang Taruna" class="logo" />
    </div>
    <h1>KARANG TARUNA REKAPTULAS</h1>
  </header>

  <nav>
    <a href="#tentang">Tentang</a>
    <a href="#alamat">Alamat</a>
    <a href="#kontak">Kontak</a>
    <a href="#galeri">Galeri</a>
  </nav>

  <section id="tentang">
    <h2>Tentang Kami</h2>
    <p>
      Karang Taruna Rekaptulas merupakan wadah bagi generasi muda desa untuk
      mengembangkan potensi, kreativitas, dan semangat kebersamaan dalam membangun masyarakat.
    </p>
  </section>

  <section id="alamat">
    <h2>Alamat</h2>
    <p>Jl. Kp Cilangkap Rt 001 Rw 016, Kelurahan Cilangkap, Kecamatan Tapos, Kota Depok</p>
  </section>

  <section id="kontak">
    <h2>Kontak</h2>
    <ul>
      <li>
        <img src="icons/email.png" class="icon-sosmed" alt="Email">
        Email: <a href="mailto:rekaptulas0116@gmail.com">rekaptulas0116@gmail.com</a>
      </li>
      <li>
        <img src="icons/whatsapp.png" class="icon-sosmed" alt="WhatsApp">
        WhatsApp: <a href="https://wa.me/6281281948632" target="_blank">0812-8194-8632</a>
      </li>
      <li>
        <img src="icons/instagram.png" class="icon-sosmed" alt="Instagram">
        Instagram: <a href="https://instagram.com/rekaptulas_id" target="_blank">@rekaptulas_id</a>
      </li>
      <li>
        <img src="icons/tiktok.png" class="icon-sosmed" alt="TikTok">
        TikTok: <a href="https://tiktok.com/@rekaptulas_id" target="_blank">@rekaptulas_id</a>
      </li>
    </ul>
  </section>

  <section id="galeri">
    <h2>Galeri Kegiatan</h2>

    <div class="galeri-buttons">
      <button onclick="tampilkanGaleri('foto')">📸 Foto</button>
      <button onclick="tampilkanGaleri('video')">🎥 Video</button>
    </div>

    <div class="galeri-container foto" id="galeri-foto">
      <img src="images/IMG_3280.JPG" alt="Kegiatan 1">
      <img src="images/IMG_3416.JPG" alt="Kegiatan 2">
      <img src="images/IMG_3186.JPG" alt="Kegiatan 3">
      <img src="images/IMG_3288.JPG" alt="Kegiatan 4">
      <img src="images/IMG_3444.JPG" alt="Kegiatan 5">
      <img src="images/IMG_3453.JPG" alt="Kegiatan 6">
      <img src="images/IMG_3455.JPG" alt="kegiatan 7">
      <img src="images/IMG_3358.JPG" alt="kegiatan 8">
      <img src="images/IMG_3249.JPG" alt="kegiatan 9">
    </div>

    <div class="galeri-container video" id="galeri-video" style="display:none;">
      <video controls>
        <source src="videos/MVI_3114.MOV" type="video/mp4">
      </video>
      <video controls>
        <source src="videos/MVI_3118.MOV" type="video/mp4">
      </video>
      <video controls>
        <source src="videos"
      </video>  
      </video>
    </div>
  </section>

  <footer>
    <p>© 2025 Karang Taruna Rekaptulas</p>
  </footer>

  <!-- LIGHTBOX -->
  <div id="lightbox" class="lightbox">
    <span class="close">&times;</span>
    <img class="lightbox-content" id="lightbox-img" alt="Foto diperbesar">
  </div>

  <script>
    // Lightbox
    const images = document.querySelectorAll('.galeri-container.foto img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
    });

    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.style.display = 'none';
    });

    // Tombol Foto / Video
    function tampilkanGaleri(tipe) {
      const foto = document.getElementById('galeri-foto');
      const video = document.getElementById('galeri-video');

      if (tipe === 'foto') {
        foto.style.display = 'grid';
        video.style.display = 'none';
      } else {
        foto.style.display = 'none';
        video.style.display = 'grid';
      }
    }
  </script>
</body>
</html>
# SubUnit0116
