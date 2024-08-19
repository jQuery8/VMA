// Function to generate photo grid
function generateGallery() {
    const gallery = document.querySelector('.gallery');
    const photos = [
        { src: 'img/1.jpg', alt: 'Photo 1' },
        { src: 'img/2.jpg', alt: 'Photo 2' },
        { src: 'img/3.jpg', alt: 'Photo 3' },
        // Add more photos as needed
    ];

    const grid = document.createElement('div');
    gallery.appendChild(grid);

    photos.forEach((photo) => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.alt;
        grid.appendChild(img);
    });
}

// Call the generateGallery function when the page loads
document.addEventListener('DOMContentLoaded', generateGallery);
