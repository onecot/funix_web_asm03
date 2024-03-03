const showBtns = document.querySelectorAll(".show-btn");
const hideBtns = document.querySelectorAll(".hide-btn");
const jobItems = document.querySelectorAll(".job-item");
let isShowedOn = [];

// Check validated email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const hideElement = (e) => {
  e.classList.add("hidden");
};

const showElement = (e) => {
  e.classList.remove("hidden");
};

for (let i = 0; i < jobItems.length; i++) {
  isShowedOn.push(false);
}

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener("click", function () {
    isShowedOn[i] = true;
    showElement(showBtns[i].nextElementSibling); // Show content
    hideElement(showBtns[i]); // Hide the button
    showElement(hideBtns[i]); // Show View less button
  });
}

for (let i = 0; i < hideBtns.length; i++) {
  hideBtns[i].addEventListener("click", function () {
    isShowedOn[i] = false;
    hideElement(hideBtns[i].previousElementSibling); // Hide content
    hideElement(hideBtns[i]); // Hide the button
    showElement(showBtns[i]); // Show View more button
  });
}

// Hide/show button whether mouse over or not
for (let i = 0; i < jobItems.length; i++) {
  jobItems[i].addEventListener("mouseover", function () {
    if (isShowedOn[i]) return;
    showElement(showBtns[i]);
  });
  jobItems[i].addEventListener("mouseout", function () {
    if (isShowedOn[i]) return;
    hideElement(showBtns[i]);
  });
}

const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");
const emailSubmit = document.getElementById("email-submit");

// Handle email submit
emailSubmit.addEventListener("click", function () {
  if (validateEmail(emailInput.value)) {
    hideElement(document.querySelector(".alert-warning"));
    hideElement(emailForm);
    showElement(document.getElementById("personal-info--detail"));
  } else {
    showElement(document.querySelector(".alert-warning"));
  }
});
