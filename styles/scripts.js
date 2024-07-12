// Hide the element. Doing this here will prevent the elements from disappering if JS is disabled.
$('.fade-content > *').css({'opacity':'0', 'transform': 'translateY(' + 2 + 'em)'});

// Trigger fade in as window scrolls
$(window).on('scroll load', function(){
  $('.fade-content > *').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight()/8;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object ){  
      $(this).css({'opacity':'1', 'transform': 'translateY(' + 0 + 'em)'});        
    } else {
      $(this).css({'opacity':'0', 'transform': 'translateY(' + 2 + 'em)'});
    }
  });
});

// mobile nav icon

$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
  });
});

// mobile nav toggle

const navIcon = document.getElementById("nav-icon");
const navbar = document.querySelector(".navbar");

navIcon.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
});

// services card hover
// uses too many resources

// const $primary = document.querySelector(".primary");

// /**
//  * return a value that has been rounded to a set precision
//  * @param {Number} value the value to round
//  * @param {Number} precision the precision (decimal places), default: 3
//  * @returns {Number}
//  */
// const round = (value, precision = 3) => parseFloat(value.toFixed(precision));

// /**
//  * return a value that has been limited between min & max
//  * @param {Number} value the value to clamp
//  * @param {Number} min minimum value to allow, default: 0
//  * @param {Number} max maximum value to allow, default: 100
//  * @returns {Number}
//  */
// const clamp = (value, min = 0, max = 100) => {
//   return Math.min(Math.max(value, min), max);
// };

// /**
//  * return a value that has been re-mapped according to the from/to
//  * - for example, adjust(10, 0, 100, 100, 0) = 90
//  * @param {Number} value the value to re-map (or adjust)
//  * @param {Number} fromMin min value to re-map from
//  * @param {Number} fromMax max value to re-map from
//  * @param {Number} toMin min value to re-map to
//  * @param {Number} toMax max value to re-map to
//  * @returns {Number}
//  */
// const adjust = (value, fromMin, fromMax, toMin, toMax) => {
//   return round(
//     toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin)
//   );
// };

// const cardUpdate = (e) => {
//   // normalise touch/mouse
//   var pos = [e.clientX, e.clientY];
//   e.preventDefault();
//   if (e.type === "touchmove") {
//     pos = [e.touches[0].clientX, e.touches[0].clientY];
//   }
//   var dimensions = $primary.getBoundingClientRect();
//   var l = pos[0] - dimensions.left;
//   var t = pos[1] - dimensions.top;
//   var h = dimensions.height;
//   var w = dimensions.width;
//   var px = clamp(Math.abs((100 / w) * l), 0, 100);
//   var py = clamp(Math.abs((100 / h) * t), 0, 100);

//   $primary.setAttribute(
//     "style",
//     `
//       --pointer-x: ${px}%;
//       --pointer-y: ${py}%;
//     `
//   );
// };

// $primary.addEventListener("mousemove", cardUpdate);
// $primary.addEventListener("touchmove", cardUpdate);

// FAQ

// Get all elements with the class "closed" or "open"
const faqElements = document.querySelectorAll(".closed, .open");

// Add a click event listener to each element
faqElements.forEach((element) => {
  element.addEventListener("click", function () {
    // Toggle the "closed" and "open" classes on the clicked element
    this.classList.toggle("closed");
    this.classList.toggle("open");

    // Close all other open elements
    faqElements.forEach((otherElement) => {
      if (otherElement !== this && otherElement.classList.contains("open")) {
        otherElement.classList.remove("open");
        otherElement.classList.add("closed");
      }
    });
  });
});

// portfolio hover

const portfolioContainers = document.querySelectorAll(".portfolio-image");

portfolioContainers.forEach((container) => {
  const img = container.querySelector("img");

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const containerX = rect.left + rect.width / 2;
    const containerY = rect.top + rect.height / 2;
    const x = e.clientX - containerX;
    const y = e.clientY - containerY;
    const containerWidth = rect.width;
    const containerHeight = rect.height;

    // Adjust the transform origin based on container dimensions
    const adjustedX = Math.min(
      Math.max(x, -containerWidth / 2),
      containerWidth / 2
    );
    const adjustedY = Math.min(
      Math.max(y, -containerHeight / 2),
      containerHeight / 2
    );

    img.style.transformOrigin = `${adjustedX + containerWidth / 2}px ${
      adjustedY + containerHeight / 2
    }px`;
  });

  container.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
  });
});

//portfolio image hover

const portfolioImages = document.querySelectorAll(".portfolio-image");

portfolioImages.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    portfolioImages.forEach((otherImg) => {
      if (otherImg !== img) {
        otherImg.style.filter = "brightness(0.5) saturate(0) contrast(1.2)";
      }
    });
  });

  img.addEventListener("mouseleave", () => {
    portfolioImages.forEach((otherImg) => {
      otherImg.style.filter = "none";
    });
  });
});

// testimonials

function fade($ele) {
  $ele
    .fadeIn(1000)
    .delay(3000)
    .fadeOut(1000, function () {
      var $next = $(this).next(".quote");
      fade($next.length > 0 ? $next : $(this).parent().children().first());
    });
}
fade($(".quoteLoop > .quote").first());

// form

document.addEventListener("DOMContentLoaded", function () {
  console.log('Script is running');

  const form = document.getElementById("contact");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    console.log("Form submit event triggered");
    event.preventDefault(); // Prevent form submission for testing

    // Validation logic
    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value;
    if (!name) {
      document.getElementById("name-invalid").style.display = "block";
      isValid = false;
      console.log("Name is invalid");
    } else {
      document.getElementById("name-invalid").style.display = "none";
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      document.getElementById("email-invalid").style.display = "block";
      isValid = false;
      console.log("Email is invalid");
    } else {
      document.getElementById("email-invalid").style.display = "none";
    }

    // Subject validation
    const subject = document.getElementById("subject").value;
    if (!subject) {
      document.getElementById("subject-invalid").style.display = "block";
      isValid = false;
      console.log("Subject is invalid");
    } else {
      document.getElementById("subject-invalid").style.display = "none";
    }

    // Message validation
    const message = document.getElementById("message").value;
    if (!message) {
      document.getElementById("message-invalid").style.display = "block";
      isValid = false;
      console.log("Message is invalid");
    } else {
      document.getElementById("message-invalid").style.display = "none";
    }

    if (isValid) {
      console.log("Form is valid");
      // Proceed with form submission
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      result.innerHTML = "Please wait...";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML =
              "Thanks, your message has been submitted! We'll get back to you as soon as possible.";
          } else {
            console.log(response);
            result.innerHTML = json.message;
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function () {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 10000);
        });
    } else {
      console.log("Form is invalid");
    }
  });
});

// button enabler

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact");
  const messageField = form.querySelector("fieldset textarea");
  const submitButton = form.querySelector("button[type='submit']");

  function validateMessageLength() {
    const messageValue = messageField.value.trim();
    const wordCount = messageValue.split(/\s+/).length;

    if (wordCount >= 5) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  messageField.addEventListener("input", validateMessageLength);
});

// remove tilt on mobile devices

function isMobileDevice() {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
}

// Function to remove 'data-tilt' attribute from divs
function removeTiltFromDivs() {
  const divs = document.querySelectorAll('div[data-tilt]');
  divs.forEach((div) => {
    div.removeAttribute('data-tilt');
  });
}

// Check if the device is a mobile device on page load
window.addEventListener('load', () => {
  if (isMobileDevice()) {
    removeTiltFromDivs();
  }
});

// Check if the device orientation changes (for mobile devices)
window.addEventListener('orientationchange', () => {
  if (isMobileDevice()) {
    removeTiltFromDivs();
  }
});

