// progressing loading with fade-content

// Hide the element. Doing this here will prevent the elements from disappering if JS is disabled.

$(".fade-content > *").css({
  opacity: "0",
  transform: "translateY(" + 2 + "em)",
});

// Trigger fade in as window scrolls
$(window).on("scroll load", function () {
  $(".fade-content > *").each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 8;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
      $(this).css({ opacity: "1", transform: "translateY(" + 0 + "em)" });
    } else {
      $(this).css({ opacity: "0", transform: "translateY(" + 2 + "em)" });
    }
  });
});

// loads the phone conversation

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateElements() {
  const elements = document.querySelectorAll(".phone-element");
  let delay = 0;

  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      setTimeout(() => {
        element.style.opacity = "1";
      }, delay);
      delay += 1000;
    }
  });
}

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateElements();
      // observer.unobserve(entry.target); // Stop observing the element after animation
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);
const elements = document.querySelectorAll(".phone-element");

elements.forEach((element) => {
  observer.observe(element);
});

//dropdown nav

const dropdownMenus = document.querySelectorAll("li > ul");
let timeout;
const mediaQuery = window.matchMedia("(max-width: 800px)");

function toggleDropdownMenu(e) {
  if (e.matches) {
    dropdownMenus.forEach(function (dropdown) {
      dropdown.classList.remove("show");
      const parentLi = dropdown.parentElement;
      parentLi.removeEventListener("mouseenter", showDropdown);
      parentLi.removeEventListener("mouseleave", hideDropdown);
    });
  } else {
    dropdownMenus.forEach(function (dropdown) {
      const parentLi = dropdown.parentElement;
      parentLi.addEventListener("mouseenter", showDropdown);
      parentLi.addEventListener("mouseleave", hideDropdown);
    });
  }
}

function showDropdown() {
  clearTimeout(timeout);
  this.querySelector("ul").classList.add("show");
}

function hideDropdown() {
  const dropdown = this.querySelector("ul");
  timeout = setTimeout(function () {
    dropdown.classList.remove("show");
  }, 1000); // 1000 milliseconds = 1 second
}

mediaQuery.addListener(toggleDropdownMenu);
toggleDropdownMenu(mediaQuery);


// sticky nav

// let prevScrollPos = window.scrollY;
// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//   const currentScrollPos = window.scrollY;

//   if (prevScrollPos > currentScrollPos && currentScrollPos >= 100) {
//     // Scrolling up and scrolled at least 15px
//     navbar.classList.add('sticky');
//   } else {
//     // Scrolling down or scrolled less than 15px
//     navbar.classList.remove('sticky');
//   }

//   prevScrollPos = currentScrollPos;
// });

let prevScrollPos = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos - currentScrollPos > 40) {
    // Scrolling up more than 40px
    navbar.classList.add("sticky");
  } else if (currentScrollPos - prevScrollPos > 40) {
    // Scrolling down more than 40px
    navbar.classList.remove("sticky");
    navLinks.classList.remove("show-menu");
  }

  prevScrollPos = currentScrollPos;
});

// mobile nav icon

$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
  });
});

// mobile nav toggle

const navIcon = document.getElementById("nav-icon");
const navLinks = document.querySelector(".links ul");
const menuSlide = document.getElementById("show-menu");

navIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");
  navLinks.style.transform = "translateX(0px)";
});

// switch payment type

function translatePaymentTypeMonthly() {
  const paymentTypes = document.querySelectorAll(".payment-type");
  const contractTypes = document.querySelectorAll(".card-extras");

  paymentTypes.forEach(function (paymentType) {
    const monthly = paymentType.querySelector(".monthly");
    const oneOff = paymentType.querySelector(".one-off");
    monthly.style.transform = "translateX(0)";
    oneOff.style.transform = "translateX(500px)";
  });

  contractTypes.forEach(function (contractType) {
    const monthlyContracts = contractType.querySelectorAll(".monthly-contract");
    const oneOffDeposits = contractType.querySelectorAll(".one-off-deposit");

    monthlyContracts.forEach(function (monthlyContract) {
      monthlyContract.style.display = "block";
    });

    oneOffDeposits.forEach(function (oneOffDeposit) {
      oneOffDeposit.style.display = "none";
    });
  });
}

function translatePaymentTypeOneOff() {
  const paymentTypes = document.querySelectorAll(".payment-type");
  const contractTypes = document.querySelectorAll(".card-extras");

  paymentTypes.forEach(function (paymentType) {
    const monthly = paymentType.querySelector(".monthly");
    const oneOff = paymentType.querySelector(".one-off");
    monthly.style.transform = "translateX(-500px)";
    oneOff.style.transform = "translateX(-225px)";
  });

  contractTypes.forEach(function (contractType) {
    const monthlyContracts = contractType.querySelectorAll(".monthly-contract");
    const oneOffDeposits = contractType.querySelectorAll(".one-off-deposit");

    monthlyContracts.forEach(function (monthlyContract) {
      monthlyContract.style.display = "none";
    });

    oneOffDeposits.forEach(function (oneOffDeposit) {
      oneOffDeposit.style.display = "block";
    });
  });
}

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

// contact form

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script is running");

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

// logo questionnaire form

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script is running");

  const form = document.getElementById("logo");
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

    const businessname = document.getElementById("business-name").value;
    if (!businessname) {
      document.getElementById("business-name-invalid").style.display = "block";
      isValid = false;
      console.log("Business name is invalid");
    } else {
      document.getElementById("business-name-invalid").style.display = "none";
    }

    // Email validation
    const email = document.getElementById("email").value;
    const confirmemail = document.getElementById("confirm-email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      document.getElementById("email-invalid").style.display = "block";
      isValid = false;
      console.log("Email is invalid");
    } else {
      document.getElementById("email-invalid").style.display = "none";
    }

    if (email.value !== confirmemail.value) {
      document.getElementById("confirm-email-invalid").style.display = "block";
      isValid = false;
      console.log("Email confirmation is invalid");
    } else {
      document.getElementById("confirm-email-invalid").style.display = "none";
    }

    // Message validation
    const businessmessage1 = document.getElementById(
      "what-does-your-business-do"
    ).value;
    const businessmessage2 = document.getElementById(
      "what-does-your-logo-achieve"
    ).value;
    const businessmessage3 = document.getElementById(
      "potential-customers"
    ).value;
    const businessmessage4 = document.getElementById(
      "differ-from-competitors"
    ).value;
    const businessmessage5 = document.getElementById("main-competitors").value;
    const logomessage1 = document.getElementById("logo-idea").value;
    const logomessage2 = document.getElementById("logo-colours").value;
    const logomessage3 = document.getElementById("logo-tagline").value;
    const logomessage4 = document.getElementById("logo-emotions").value;
    const logomessage5 = document.getElementById("logo-type").value;
    const logomessage6 = document.getElementById("logo-appeal").value;
    const logomessage7 = document.getElementById("logo-budget").value;

    if (!businessmessage1) {
      document.getElementById("business-1-invalid").style.display = "block";
      isValid = false;
      console.log("Business Message 1 is invalid");
    } else {
      document.getElementById("business-1-invalid").style.display = "none";
    }

    if (!businessmessage2) {
      document.getElementById("business-2-invalid").style.display = "block";
      isValid = false;
      console.log("Business Message 2 is invalid");
    } else {
      document.getElementById("business-2-invalid").style.display = "none";
    }

    if (!businessmessage3) {
      document.getElementById("business-3-invalid").style.display = "block";
      isValid = false;
      console.log("Business Message 3 is invalid");
    } else {
      document.getElementById("business-3-invalid").style.display = "none";
    }

    if (!businessmessage4) {
      document.getElementById("business-4-invalid").style.display = "block";
      isValid = false;
      console.log("Business Message 4 is invalid");
    } else {
      document.getElementById("business-4-invalid").style.display = "none";
    }

    if (!businessmessage5) {
      document.getElementById("business-5-invalid").style.display = "block";
      isValid = false;
      console.log("Business Message 5 is invalid");
    } else {
      document.getElementById("business-5-invalid").style.display = "none";
    }

    if (!logomessage1) {
      document.getElementById("logo-1-invalid").style.display = "block";
      isValid = false;
      console.log("Logo Message 1 is invalid");
    } else {
      document.getElementById("logo-1-invalid").style.display = "none";
    }

    if (!logomessage2) {
      document.getElementById("logo-2-invalid").style.display = "block";
      isValid = false;
      console.log("Logo Message 2 is invalid");
    } else {
      document.getElementById("logo-2-invalid").style.display = "none";
    }

    if (!logomessage3) {
      document.getElementById("logo-3-invalid").style.display = "block";
      isValid = false;
      console.log("Logo Message 3 is invalid");
    } else {
      document.getElementById("logo-3-invalid").style.display = "none";
    }

    if (!logomessage4) {
      document.getElementById("logo-4-invalid").style.display = "block";
      isValid = false;
      console.log("Logo Message 4 is invalid");
    } else {
      document.getElementById("logo-4-invalid").style.display = "none";
    }

    if (!logomessage5) {
      document.getElementById("logo-5-invalid").style.display = "block";
      isValid = false;
      console.log("Logo Message 5 is invalid");
    } else {
      document.getElementById("logo-5-invalid").style.display = "none";
    }

    if (!logomessage6) {
      document.getElementById("logo-6-invalid").style.display = "block";
      isValid = false;
      console.log("Logo Message 6 is invalid");
    } else {
      document.getElementById("logo-6-invalid").style.display = "none";
    }

    if (!logomessage7) {
      document.getElementById("logo-7-invalid").style.display = "block";
      isValid = false;
      console.log("Logo Message 7 is invalid");
    } else {
      document.getElementById("logo-7-invalid").style.display = "none";
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
      console.log("Form is invalid. Make sure to fill out all fields.");
    }
  });
});

// website questionnaire form

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script is running");

  const form = document.getElementById("website");
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

    const businessname = document.getElementById("business-name").value;
    if (!businessname) {
      document.getElementById("business-name-invalid").style.display = "block";
      isValid = false;
      console.log("Business name is invalid");
    } else {
      document.getElementById("business-name-invalid").style.display = "none";
    }

    // Email validation
    const email = document.getElementById("email").value;
    const confirmemail = document.getElementById("confirm-email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      document.getElementById("email-invalid").style.display = "block";
      isValid = false;
      console.log("Email is invalid");
    } else {
      document.getElementById("email-invalid").style.display = "none";
    }

    if (email.value !== confirmemail.value) {
      document.getElementById("confirm-email-invalid").style.display = "block";
      isValid = false;
      console.log("Email confirmation is invalid");
    } else {
      document.getElementById("confirm-email-invalid").style.display = "none";
    }

    // Message validation
    const businessmessage1 = document.getElementById(
      "what-does-your-business-do"
    ).value;
    const businessmessage2 = document.getElementById(
      "do-you-have-a-website"
    ).value;
    const businessmessage3 = document.getElementById(
      "potential-customers"
    ).value;
    const businessmessage4 = document.getElementById(
      "differ-from-competitors"
    ).value;
    const businessmessage5 = document.getElementById("main-competitors").value;
    const websitemessage1 = document.getElementById("website-purpose").value;
    const websitemessage2 = document.getElementById("website-logo").value;
    const websitemessage3 = document.getElementById("website-content").value;
    const websitemessage4 = document.getElementById("website-hosting").value;
    const websitemessage5 = document.getElementById("website-likes-1").value;
    const websitemessage6 = document.getElementById("website-likes-2").value;
    const websitemessage7 = document.getElementById("website-likes-3").value;
    const websitemessage8 = document.getElementById("brand-guide").value;
    const websitemessage9 = document.getElementById("seo-ranking").value;
    const websitemessage10 = document.getElementById("launch-date").value;
    const websitemessage11 = document.getElementById("website-budget").value;

    if (!businessmessage1) {
      document.getElementById("business-1-invalid").style.display = "block";
      isValid = false;
      console.log("Business Message 1 is invalid");
    } else {
      document.getElementById("business-1-invalid").style.display = "none";
    }

    if (!businessmessage2) {
      document.getElementById("business-2-invalid").style.display = "block";
      isValid = false;
      console.log("Business Message 2 is invalid");
    } else {
      document.getElementById("business-2-invalid").style.display = "none";
    }

    if (!businessmessage3) {
      document.getElementById("business-3-invalid").style.display = "block";
      isValid = false;
      console.log("Business Message 3 is invalid");
    } else {
      document.getElementById("business-3-invalid").style.display = "none";
    }

    if (!businessmessage4) {
      document.getElementById("business-4-invalid").style.display = "block";
      isValid = false;
      console.log("Business Message 4 is invalid");
    } else {
      document.getElementById("business-4-invalid").style.display = "none";
    }

    if (!businessmessage5) {
      document.getElementById("business-5-invalid").style.display = "block";
      isValid = false;
      console.log("Business Message 5 is invalid");
    } else {
      document.getElementById("business-5-invalid").style.display = "none";
    }

    if (!websitemessage1) {
      document.getElementById("website-1-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 1 is invalid");
    } else {
      document.getElementById("website-1-invalid").style.display = "none";
    }

    if (!websitemessage2) {
      document.getElementById("website-2-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 2 is invalid");
    } else {
      document.getElementById("website-2-invalid").style.display = "none";
    }

    if (!websitemessage3) {
      document.getElementById("website-3-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 3 is invalid");
    } else {
      document.getElementById("website-3-invalid").style.display = "none";
    }

    if (!websitemessage4) {
      document.getElementById("website-4-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 4 is invalid");
    } else {
      document.getElementById("website-4-invalid").style.display = "none";
    }

    if (!websitemessage5) {
      document.getElementById("website-5-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 5 is invalid");
    } else {
      document.getElementById("website-5-invalid").style.display = "none";
    }

    if (!websitemessage6) {
      document.getElementById("website-6-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 6 is invalid");
    } else {
      document.getElementById("website-6-invalid").style.display = "none";
    }

    if (!websitemessage7) {
      document.getElementById("website-7-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 7 is invalid");
    } else {
      document.getElementById("website-7-invalid").style.display = "none";
    }

    if (!websitemessage8) {
      document.getElementById("website-8-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 8 is invalid");
    } else {
      document.getElementById("website-8-invalid").style.display = "none";
    }

    if (!websitemessage9) {
      document.getElementById("website-9-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 9 is invalid");
    } else {
      document.getElementById("website-9-invalid").style.display = "none";
    }

    if (!websitemessage10) {
      document.getElementById("website-10-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 10 is invalid");
    } else {
      document.getElementById("website-10-invalid").style.display = "none";
    }

    if (!websitemessage11) {
      document.getElementById("website-11-invalid").style.display = "block";
      isValid = false;
      console.log("website Message 11 is invalid");
    } else {
      document.getElementById("website-11-invalid").style.display = "none";
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
      console.log("Form is invalid. Make sure to fill out all fields.");
    }
  });
});

// button enabler

document.addEventListener("DOMContentLoaded", function () {
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
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// Function to remove 'data-tilt' attribute from divs
function removeTiltFromDivs() {
  const divs = document.querySelectorAll("div[data-tilt]");
  divs.forEach((div) => {
    div.removeAttribute("data-tilt");
  });
}

// Check if the device is a mobile device on page load
window.addEventListener("load", () => {
  if (isMobileDevice()) {
    removeTiltFromDivs();
  }
});

// Check if the device orientation changes (for mobile devices)
window.addEventListener("orientationchange", () => {
  if (isMobileDevice()) {
    removeTiltFromDivs();
  }
});
