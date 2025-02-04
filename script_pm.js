function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cats-cat.gif';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

displayCat();

document.getElementById('sup-button').addEventListener("click", function() {
    window.location.href = "main.html"
})

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