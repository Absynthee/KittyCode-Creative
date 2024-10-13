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
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);
const elements = document.querySelectorAll(".phone-element");

elements.forEach((element) => {
  observer.observe(element);
});

// dropdown nav
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

// Toggle theme between light & dark
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlElement = document.documentElement;

const preferredTheme = localStorage.getItem("theme") || "light";
htmlElement.classList.add(
  preferredTheme === "dark" ? "dark-theme" : "light-theme"
);

themeToggle.addEventListener("click", () => {
  console.log("Theme toggled");
  htmlElement.classList.toggle("light-theme");
  htmlElement.classList.toggle("dark-theme");

  const newTheme = htmlElement.classList.contains("dark-theme")
    ? "dark"
    : "light";
  localStorage.setItem("theme", newTheme);

});

// top-banner
document.addEventListener('DOMContentLoaded', function() {
  const banner = document.querySelector('.top-banner');
  const content = document.querySelector('.top-banner-content');
  let isPaused = false;

  // Clone the content to ensure a seamless loop
  function duplicateContent() {
      const contentWidth = content.offsetWidth;
      const bannerWidth = banner.offsetWidth;
      
      while (content.offsetWidth < bannerWidth * 2) {
          content.appendChild(content.firstElementChild.cloneNode(true));
      }
  }

  // Animate the banner
  function animateBanner() {
      if (!isPaused) {
          if (content.offsetLeft <= -content.offsetWidth / 2) {
              content.style.left = '0px';
          }
          content.style.left = (content.offsetLeft - 1) + 'px';
      }
      requestAnimationFrame(animateBanner);
  }

  // Pause animation on hover/touch
  banner.addEventListener('mouseenter', () => isPaused = true);
  banner.addEventListener('mouseleave', () => isPaused = false);
  banner.addEventListener('touchstart', () => isPaused = true, {passive: true});
  banner.addEventListener('touchend', () => isPaused = false);

  // Initialize
  duplicateContent();
  animateBanner();
});
