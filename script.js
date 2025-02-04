function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat-kitty.gif';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

displayCat();

function displayBeggingCat() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catBeggingImage = new Image();
    catBeggingImage.src = 'begging-cat.gif';
    catBeggingImage.onload = function() {
        imageContainer.appendChild(catBeggingImage);
    };
}

document.getElementById('yes-button').addEventListener("click", function() {
    window.location.href = "yes.html"
})

function selectOption(option) {
    if (option === 'yes') {

    } else if (option === 'no') {
        displayBeggingCat();
        document.getElementById('no-button').innerText = 'you sure.?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

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