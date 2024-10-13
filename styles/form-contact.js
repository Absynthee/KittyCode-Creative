// contact form

document.addEventListener("DOMContentLoaded", function () {
  // console.log("Contact form script is running");

  const form = document.getElementById("contact");
  const result = document.getElementById("result");
  const email = document.getElementById("email");
  const emailInvalid = document.getElementById("email-invalid");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // List of form fields to validate
  const fields = [
    { input: document.getElementById("name"), id: "name-invalid" },
    { input: document.getElementById("subject"), id: "subject-invalid" },
    { input: document.getElementById("message"), id: "message-invalid" },
  ];

  // Real-time validation for the required fields
  fields.forEach(({ input, id }) => {
    if (input) {
      // Ensure input exists before adding event listener
      input.addEventListener("input", function () {
        const errorElement = document.getElementById(id);
        if (input.value.trim() !== "") {
          errorElement.style.display = "none";
          input.classList.remove("error-border"); // Remove red border in real-time
        }
      });
    }
  });

  // Add error-border class for invalid fields
  function markInvalid(input) {
    input.classList.add("error-border");
  }

  // Validation of all fields, including emails
  function validateAllFields() {
    let isValid = true;

    // Validate email and confirm email fields
    if (!email.value || !emailPattern.test(email.value)) {
      emailInvalid.style.display = "block";
      email.setCustomValidity("Please enter a valid email address.");
      markInvalid(email);
      isValid = false;
    } else {
      emailInvalid.style.display = "none";
      email.setCustomValidity("");
    }

    // Validate the other form fields
    fields.forEach(({ input, id }) => {
      if (input && !input.value.trim()) {
        const errorElement = document.getElementById(id);
        errorElement.style.display = "block";
        markInvalid(input); // Add red border for invalid field
        isValid = false;
      } else {
        const errorElement = document.getElementById(id);
        errorElement.style.display = "none";
        input.classList.remove("error-border"); // Remove red border if corrected
      }
    });

    return isValid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    let isValid = validateAllFields(); // Check all validations together

    if (!isValid) {
      console.log("Form submission prevented due to validation errors");
      return;
    }

    console.log("Form is valid, preparing to submit...");

    // Proceed with form submission
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
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
        const jsonResponse = await response.json();
        if (response.status === 200) {
          result.innerHTML =
            "Thanks, your message has been submitted! We'll get back to you as soon as possible.";
        } else {
          result.innerHTML = jsonResponse.message || "Something went wrong!";
        }
      })
      .catch((error) => {
        result.innerHTML = "Something went wrong!";
        console.error("Fetch error:", error);
      })
      .finally(() => {
        form.reset();
        setTimeout(() => {
          result.style.display = "none";
        }, 10000);
      });
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
