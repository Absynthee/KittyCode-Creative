// nav icon 

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

// services card hover


const $primary = document.querySelector(".primary");

/**
 * return a value that has been rounded to a set precision
 * @param {Number} value the value to round
 * @param {Number} precision the precision (decimal places), default: 3
 * @returns {Number}
 */
const round = (value, precision = 3) => parseFloat(value.toFixed(precision));

/**
 * return a value that has been limited between min & max
 * @param {Number} value the value to clamp
 * @param {Number} min minimum value to allow, default: 0
 * @param {Number} max maximum value to allow, default: 100
 * @returns {Number}
 */
const clamp = (value, min = 0, max = 100) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * return a value that has been re-mapped according to the from/to
 * - for example, adjust(10, 0, 100, 100, 0) = 90
 * @param {Number} value the value to re-map (or adjust)
 * @param {Number} fromMin min value to re-map from
 * @param {Number} fromMax max value to re-map from
 * @param {Number} toMin min value to re-map to
 * @param {Number} toMax max value to re-map to
 * @returns {Number}
 */
const adjust = (value, fromMin, fromMax, toMin, toMax) => {
  return round(
    toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin)
  );
};

const cardUpdate = (e) => {
  // normalise touch/mouse
  var pos = [e.clientX, e.clientY];
  e.preventDefault();
  if (e.type === "touchmove") {
    pos = [e.touches[0].clientX, e.touches[0].clientY];
  }
  var dimensions = $primary.getBoundingClientRect();
  var l = pos[0] - dimensions.left;
  var t = pos[1] - dimensions.top;
  var h = dimensions.height;
  var w = dimensions.width;
  var px = clamp(Math.abs((100 / w) * l), 0, 100);
  var py = clamp(Math.abs((100 / h) * t), 0, 100);

  $primary.setAttribute(
    "style",
    `
      --pointer-x: ${px}%;
      --pointer-y: ${py}%;
    `
  );
};

$primary.addEventListener("mousemove", cardUpdate);
$primary.addEventListener("touchmove", cardUpdate);


// FAQ

// Get all elements with the class "closed" or "open"
const faqElements = document.querySelectorAll('.closed, .open');

// Add a click event listener to each element
faqElements.forEach(element => {
  element.addEventListener('click', function() {
    // Toggle the "closed" and "open" classes on the clicked element
    this.classList.toggle('closed');
    this.classList.toggle('open');

    // Close all other open elements
    faqElements.forEach(otherElement => {
      if (otherElement !== this && otherElement.classList.contains('open')) {
        otherElement.classList.remove('open');
        otherElement.classList.add('closed');
      }
    });
  });
});


// portfolio hover

const portfolioContainers = document.querySelectorAll('.portfolio-image');

portfolioContainers.forEach(container => {
  const img = container.querySelector('img');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const containerX = rect.left + rect.width / 2;
    const containerY = rect.top + rect.height / 2;
    const x = e.clientX - containerX;
    const y = e.clientY - containerY;
    const containerWidth = rect.width;
    const containerHeight = rect.height;

    // Adjust the transform origin based on container dimensions
    const adjustedX = Math.min(Math.max(x, -containerWidth / 2), containerWidth / 2);
    const adjustedY = Math.min(Math.max(y, -containerHeight / 2), containerHeight / 2);

    img.style.transformOrigin = `${adjustedX + containerWidth / 2}px ${adjustedY + containerHeight / 2}px`;
  });

  container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = 'center center';
  });
});

//portfolio image hover 

const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioImages.forEach(img => {
  img.addEventListener('mouseenter', () => {
    portfolioImages.forEach(otherImg => {
      if (otherImg !== img) {
        otherImg.style.filter = 'brightness(0.5) saturate(0) contrast(1.2)';
      }
    });
  });

  img.addEventListener('mouseleave', () => {
    portfolioImages.forEach(otherImg => {
      otherImg.style.filter = 'none';
    });
  });
});



// testimonials

function fade($ele) {
  $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
      var $next = $(this).next('.quote');
      fade($next.length > 0 ? $next : $(this).parent().children().first());
 });
}
fade($('.quoteLoop > .quote').first());
