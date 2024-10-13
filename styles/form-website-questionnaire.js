// website questionnaire form

document.addEventListener('DOMContentLoaded', function () {
    // console.log("Website Questionnaire script is running");
  
    const form = document.getElementById("website");
    const result = document.getElementById("result");
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm-email');
    const emailInvalid = document.getElementById('email-invalid');
    const confirmEmailInvalid = document.getElementById('confirm-email-invalid');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const styleCheckboxes = document.querySelectorAll('.website-style-checkbox');
    const extrasCheckboxes = document.querySelectorAll('.website-extras-checkbox');
    const styleHiddenInput = document.getElementById('website-style-hidden');
    const extrasHiddenInput = document.getElementById('website-extras-hidden');
  
    // List of form fields to validate
    const fields = [
      { input: document.getElementById("name"), id: "name-invalid" },
      { input: document.getElementById("business-name"), id: "business-name-invalid" },  
      { input: document.getElementById("what-does-your-business-do"), id: "business-1-invalid" },
      { input: document.getElementById("do-you-have-a-website"), id: "business-2-invalid" },
      { input: document.getElementById("potential-customers"), id: "business-3-invalid" },
      { input: document.getElementById("differ-from-competitors"), id: "business-4-invalid" },
      { input: document.getElementById("main-competitors"), id: "business-5-invalid" },
      { input: document.getElementById("website-purpose"), id: "website-1-invalid" },
      { input: document.getElementById("website-logo"), id: "website-2-invalid" },
      { input: document.getElementById("website-content"), id: "website-3-invalid" },
      { input: document.getElementById("website-hosting"), id: "website-4-invalid" },
      { input: document.getElementById("website-likes-1"), id: "website-5-invalid" },
      { input: document.getElementById("website-likes-2"), id: "website-6-invalid" },
      { input: document.getElementById("website-likes-3"), id: "website-7-invalid" },
      { input: document.getElementById("brand-guide"), id: "website-8-invalid" },
      { input: document.getElementById("seo-ranking"), id: "website-9-invalid" },
      { input: document.getElementById("launch-date"), id: "website-10-invalid" },
      { input: document.getElementById("website-budget"), id: "website-11-invalid" }
    ];
  
    // Real-time validation for the required fields
    fields.forEach(({ input, id }) => {
      input.addEventListener('input', function () {
        const errorElement = document.getElementById(id);
        if (input.value.trim() !== "") {
          errorElement.style.display = "none";
          input.classList.remove('error-border');  // Remove red border in real-time
        }
      });
    });
  
    // Add error-border class for invalid fields
    function markInvalid(input) {
      input.classList.add('error-border');
    }
  
    // Scroll to first error field
    function scrollToFirstError() {
      const firstInvalidField = document.querySelector('.error-border');
      if (firstInvalidField) {
        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  
    // Validation of all fields, including emails
    function validateAllFields() {
      let isValid = true;
  
      // Validate email and confirm email fields
      if (!email.value || !emailPattern.test(email.value)) {
        emailInvalid.style.display = 'block';
        email.setCustomValidity('Please enter a valid email address.');
        markInvalid(email);
        isValid = false;
      } else {
        emailInvalid.style.display = 'none';
        email.setCustomValidity('');
      }
  
      if (email.value !== confirmEmail.value) {
        confirmEmailInvalid.style.display = 'block';
        confirmEmail.setCustomValidity('Email addresses do not match.');
        markInvalid(confirmEmail);
        isValid = false;
      } else {
        confirmEmailInvalid.style.display = 'none';
        confirmEmail.setCustomValidity('');
      }
  
      // Validate the other form fields
      fields.forEach(({ input, id }) => {
        const errorElement = document.getElementById(id);
        if (!input.value.trim()) {
          errorElement.style.display = "block";
          markInvalid(input);  // Add red border for invalid field
          isValid = false;
        } else {
          errorElement.style.display = "none";
          input.classList.remove('error-border');  // Remove red border if corrected
        }
      });
  
      return isValid;
    }
  
    // Checkbox selection function
    function collectCheckedValues(checkboxes, hiddenInput) {
      const selected = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
      hiddenInput.value = selected.join(", ");
    }
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent page refresh
  
      let isValid = validateAllFields();  // Check all validations together
  
      collectCheckedValues(styleCheckboxes, styleHiddenInput);
      collectCheckedValues(extrasCheckboxes, extrasHiddenInput);
  
      if (!isValid) {
        scrollToFirstError();  // Scroll to the first error field
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
          Accept: "application/json"
        },
        body: json,
      })
      .then(async (response) => {
        const jsonResponse = await response.json();
        if (response.status === 200) {
          result.innerHTML = "Thanks, your message has been submitted! We'll get back to you as soon as possible.";
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
