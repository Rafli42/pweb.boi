// Toggle menu responsif
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});

// Slider otomatis untuk banner
let bannerIndex = 0;
const bannerImages = [
    "gambar/cuci-mobil1.jpg",
    "gambar/cuci-mobil2.jpg",
    "gambar/cuci-mobil3.jpg"
];

function changeBannerImage() {
    const bannerImg = document.getElementById("welcomeImage");
    bannerIndex = (bannerIndex + 1) % bannerImages.length;
    bannerImg.src = bannerImages[bannerIndex];
}

// Ganti gambar setiap 3 detik
setInterval(changeBannerImage, 3000);

// Animasi pergantian gambar pada kartu layanan
document.querySelectorAll(".slide-image").forEach((img) => {
    const images = img.dataset.images.split(",");
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        img.src = images[currentIndex];
    }, 2500);
});
