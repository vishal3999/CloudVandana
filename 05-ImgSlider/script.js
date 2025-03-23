const images = [
    "img/1st.jpeg",
    "img/2nd.jpeg",
    "img/3rd.jpeg",
    "img/4rt.jpeg"
];

let index = 0;
const slider = document.getElementById("slider");

function showImage() {
    slider.src = images[index];
}

// Next Button
document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage();
});

// Previous Button
document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage();
});

// Initialize first image
showImage();
