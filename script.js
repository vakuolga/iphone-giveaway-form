document.addEventListener("DOMContentLoaded", () => {
  const modalTriggers = document.querySelectorAll(".footer-link");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".modal-close");

  modals.forEach((modal) => {
    modal.style.display = "none";
  });

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const modalId = event.target.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "flex";
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modals.forEach((modal) => (modal.style.display = "none"));
    });
  });

  window.addEventListener("click", (event) => {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

const form = document.getElementById("main-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const addressNo = document.getElementById("address-no");
  const street = document.getElementById("street");
  const postcode = document.getElementById("postcode");
  const suburb = document.getElementById("suburb");
  const phone = document.getElementById("phone");
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");

  let isValid = true;

  addressNo.setCustomValidity("");
  street.setCustomValidity("");
  postcode.setCustomValidity("");
  suburb.setCustomValidity("");
  phone.setCustomValidity("");
  day.setCustomValidity("");
  month.setCustomValidity("");
  year.setCustomValidity("");

  if (!addressNo.value.trim()) {
    addressNo.setCustomValidity("Please enter Address No.");
    isValid = false;
  }

  if (!street.value.trim()) {
    street.setCustomValidity("Please enter Street.");
    isValid = false;
  }

  if (!postcode.value.trim() || !/^\d{4,6}$/.test(postcode.value.trim())) {
    postcode.setCustomValidity("Postcode must be 4-6 digits.");
    isValid = false;
  }

  if (!suburb.value.trim()) {
    suburb.setCustomValidity("Please enter Suburb.");
    isValid = false;
  }

  if (!phone.value.trim() || !/^\d{10}$/.test(phone.value.trim())) {
    phone.setCustomValidity("Phone must be a 10-digit number.");
    isValid = false;
  }

  if (!day.value.trim() || !month.value.trim() || !year.value.trim()) {
    day.setCustomValidity("Please enter a valid date.");
    isValid = false;
  } else {
    const dayNum = parseInt(day.value.trim(), 10);
    const monthNum = parseInt(month.value.trim(), 10);
    const yearNum = parseInt(year.value.trim(), 10);
    if (
      dayNum < 1 ||
      dayNum > 31 ||
      monthNum < 1 ||
      monthNum > 12 ||
      yearNum < 1900 ||
      yearNum > new Date().getFullYear()
    ) {
      day.setCustomValidity("Date is out of range.");
      isValid = false;
    }
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  } else {
    form.reportValidity();
  }
});
