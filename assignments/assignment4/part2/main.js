const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltTexts = {
  'pic1.jpg': 'Alt text for pic1',
  'pic2.jpg': 'Alt text for pic2',
  'pic3.jpg': 'Alt text for pic3',
  'pic4.jpg': 'Alt text for pic4',
  'pic5.jpg': 'Alt text for pic5'
};

/* Looping through images */
imageFilenames.forEach((filename, index) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', imageAltTexts[filename]);
  thumbBar.appendChild(newImage);

  // Create a closure to capture the value of filename for each iteration
  newImage.addEventListener('click', (event) => {
    const clickedImage = event.target;
    displayedImage.setAttribute('src', clickedImage.getAttribute('src'));
    displayedImage.setAttribute('alt', clickedImage.getAttribute('alt'));
  });

  // Set the initial big image to match the last small image
  if (index === imageFilenames.length - 1) {
    displayedImage.setAttribute('src', `images/${filename}`);
    displayedImage.setAttribute('alt', imageAltTexts[filename]);
  }
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
