function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'heart-love.gif';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

displayCat();

const customCursor = document.querySelector('.custom-cursor');
const clickableElements = document.querySelectorAll('.clickable-element');

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.pageX}px`;
  customCursor.style.top = `${e.pageY}px`;
});

clickableElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    customCursor.classList.add('transition');
    setTimeout(() => {
      customCursor.classList.remove('transition');
    }, 1000);
  });
});

function createFireworks() {
    const fireworks = new Image();
    fireworks.src = 'fireworks.gif';
    fireworks.classList.add('fireworks');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    fireworks.style.left = `${x}px`;
    fireworks.style.top = `${y}px`;

    document.body.appendChild(fireworks);

    setTimeout(() => {
        fireworks.remove();
    }, 3000);
}

window.addEventListener('load', () => {
    setInterval(createFireworks, 500);
});