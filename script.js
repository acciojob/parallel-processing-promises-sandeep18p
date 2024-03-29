const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", downloadDisplayImages);

function downloadDisplayImages() {
    Promise.all(images.map(downloadImg))
        .then((imageElements) => {
            output.innerHTML = "";
            imageElements.forEach((img) => {
                output.appendChild(img);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

function downloadImg(image) {
    return new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
        img.src = image.url;
    });
}
