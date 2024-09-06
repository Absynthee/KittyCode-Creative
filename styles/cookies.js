function acceptCookies() {
  // Get the current date
  const currentDate = new Date();

  // Add one year to the current date
  const expirationDate = new Date(
    currentDate.getTime() + 365 * 24 * 60 * 60 * 1000 // 1 year
  );

  // Set the cookie with the calculated expiration date
  document.cookie =
    "cookiesAccepted=true; expires=" +
    expirationDate.toUTCString() +
    "; path=/";
  console.log("Cookies accepted");
  document.querySelector(".cookie-policy").style.display = "none";
}

function checkCookiesAccepted() {
  // Get all cookies
  const cookies = document.cookie.split(";");
  console.log(cookies);
  // Check if the 'cookiesAccepted' cookie exists
  const cookiesAccepted = cookies.some((cookie) =>
    cookie.trim().startsWith("cookiesAccepted=true")
  );

  if (cookiesAccepted) {
    document.querySelector(".cookie-policy").style.display = "none";
  } else {
    document.querySelector(".cookie-policy").style.display = "flex";
  }
}

// Call the function on page load
window.addEventListener("load", checkCookiesAccepted);
