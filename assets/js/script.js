document.addEventListener("DOMContentLoaded", function () {

    const btnBuka = document.getElementById("btnBuka");
    const isi = document.getElementById("isiUndangan");
    const cover = document.getElementById("cover");
    const music = document.getElementById("bgMusic");

    function playMusic() {
        music.play().catch(() => {});
    }

    playMusic();

    document.body.addEventListener("click", function firstClick() {
        music.play();
        document.body.removeEventListener("click", firstClick);
    });

    btnBuka.addEventListener("click", function () {
        isi.classList.remove("d-none");
        cover.style.display = "none";
        isi.scrollIntoView({ behavior: "smooth" });
        music.play();
    });

    /* =========================
       BACKGROUND SLIDER FIX
    ========================== */

    const layers = document.querySelectorAll(".bg-layer");

    const images = [
        "assets/bg/bg_1.jpeg",
        "assets/bg/bg_2.jpeg",
        "assets/bg/bg_3.JPG",
        "assets/bg/bg_4.JPG",
        "assets/bg/bg_5.JPG"
        ];

    let current = 0;
    let activeLayer = 0;

    // set awal
    layers[0].style.backgroundImage = `url('${images[0]}')`;
    layers[0].classList.add("active");

    setInterval(() => {

        let next = (current + 1) % images.length;
        let nextLayer = activeLayer === 0 ? 1 : 0;

        layers[nextLayer].style.backgroundImage = `url('${images[next]}')`;

        layers[nextLayer].classList.add("active");
        layers[activeLayer].classList.remove("active");

        current = next;
        activeLayer = nextLayer;

    }, 3000);

});


    function copyRekening() {
        const rekening = "003901137928502";
        navigator.clipboard.writeText(rekening);
        alert("Nomor rekening PRISCHA MAYLIETA telah disalin!");
    }
    function copyRekening2() {
        const rekening = "169601004344539";
        navigator.clipboard.writeText(rekening);
        alert("Nomor rekening SKHANA telah disalin!");
    }
    