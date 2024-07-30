function search() {
    const query = document.querySelector('input[type="text"]').value;
    alert(`Searching for: ${query}`);
}

let currentImageIndex = 0;
const backgroundImages = ['background1.jpg', 'background2.jpg', 'background3.jpg'];

function changeBackgroundImage(direction) {
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
    }
    document.body.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
}

document.querySelectorAll('header button')[0].addEventListener('click', () => changeBackgroundImage('prev'));
document.querySelectorAll('header button')[1].addEventListener('click', () => changeBackgroundImage('next'));
