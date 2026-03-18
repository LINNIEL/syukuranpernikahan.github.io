 // Carousel otomatis berganti tiap 2 detik
    const myCarousel = document.querySelector('#galeriCarousel');
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000,
      ride: 'carousel',
      touch: true
    });

    // Lightbox dengan navigasi
    const thumbnails = document.querySelectorAll('.thumbnail');
    const lightboxModal = new bootstrap.Modal(document.getElementById('lightboxModal'));
    const lightboxImage = document.getElementById('lightboxImage');
    let currentIndex = 0;

    function showImage(index) {
      if (index < 0) index = thumbnails.length - 1;
      if (index >= thumbnails.length) index = 0;
      currentIndex = index;
      lightboxImage.src = thumbnails[currentIndex].src;
    }

    thumbnails.forEach((img, i) => {
      img.addEventListener('click', () => {
        currentIndex = i;
        showImage(currentIndex);
        lightboxModal.show();
      });
    });

    // Tombol panah di lightbox
    document.querySelector('.lightbox-prev').addEventListener('click', () => {
      showImage(currentIndex - 1);
    });
    document.querySelector('.lightbox-next').addEventListener('click', () => {
      showImage(currentIndex + 1);
    });

    // Navigasi keyboard ← → saat modal terbuka
    document.addEventListener('keydown', (e) => {
      const isShown = document.getElementById('lightboxModal').classList.contains('show');
      if (isShown) {
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
      }
    });