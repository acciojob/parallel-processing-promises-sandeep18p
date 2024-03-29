const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", downloadAndDisplayImages);

function downloadAndDisplayImages() {
    Promise.all(images.map(downloadImage))
        .then((imageElements) => {
            output.innerHTML = ''; // Clear previous content
            imageElements.forEach((img) => {
                output.appendChild(img);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

function downloadImage(image) {
    return new Promise((resolve) => {
        const img = document.createElement('img');
        img.src = image.url;
        resolve(img);
    });
}
