// For each carousel on the page
document.querySelectorAll('.project-image-carousel').forEach(function(carousel) {
  // Get images from data-images attribute
  const images = carousel.getAttribute('data-images').split(',');
  const descriptions = carousel.getAttribute('data-descriptions').split('|');
  let current = 0;
  const imgTag = carousel.querySelector('.carousel-img');
  const leftArrow = carousel.querySelector('.carousel-arrow.left');
  const rightArrow = carousel.querySelector('.carousel-arrow.right');
  // Find the next .project-description sibling
  const descriptionTag = carousel.parentElement.querySelector('.project-description');

  function showImage(idx) {
    imgTag.src = images[idx].trim();
    if (descriptionTag && descriptions[idx]) {
      descriptionTag.innerHTML = descriptions[idx].trim().replace(/\\n/g, '<br>');
    }
  }

  leftArrow.addEventListener('click', function() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  rightArrow.addEventListener('click', function() {
    current = (current + 1) % images.length;
    showImage(current);
  });

  // Initialize
  showImage(current);

  // Hide arrows if there's only one image
  if (images.length === 1) {
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  }
});