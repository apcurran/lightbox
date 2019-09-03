"use strict";

const gallery = (() => {
    const lightbox = document.createElement("div");
    const images = document.querySelectorAll(".grid-img");

    lightbox.classList.add("lightbox");
    document.body.append(lightbox);

    images.forEach(image => {
        image.addEventListener("click", (event) => {
            lightbox.classList.add("active");
            while(lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }

            const img = document.createElement("img");
            img.src = image.src;
            lightbox.append(img);
        });
    });

    function hideLightbox(event) {
        if (event.target !== event.currentTarget) return;
        lightbox.classList.remove("active");
    }

    lightbox.addEventListener("click", hideLightbox);
})();