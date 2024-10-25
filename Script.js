const formEl = document.getElementById("form");
const nameEl = document.getElementById("formName");
const emailEl = document.getElementById("formEmail");
const messageEl = document.getElementById("formMessage");
const nameErrMsgEl = document.getElementById("nameErrMsg");
const emailErrMsgEl = document.getElementById("emailErrMsg");
const messageErrMsgEl = document.getElementById("messageErrMsg");
const submitButtonEl = document.getElementById("submitButton");
const successMessageEl = document.getElementById("successMessage");

nameEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "*Required";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

emailEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "*Required";
  } else {
    emailErrMsgEl.textContent = "";
  }
});
messageEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    messageErrMsgEl.textContent = "*Required";
  } else {
    messageErrMsgEl.textContent = "";
  }
});

function onSuccessPage() {
  successMessageEl.textContent = "Your message has been sent successfully!";
  successMessageEl.style.display = "block";
  formEl.style.display = "none";
}

submitButtonEl.onclick = function () {
  successMessageEl.style.display = "none";
  if (nameEl.value === "" && emailEl.value === "" && messageEl.value === "") {
    nameErrMsgEl.textContent = "*Required";
    emailErrMsgEl.textContent = "*Required";
    messageErrMsgEl.textContent = "*Required";
  } else if (
    nameEl.value === "" ||
    emailEl.value === "" ||
    messageEl.value === ""
  ) {
    if (nameEl.value === "") {
      nameErrMsgEl.textContent = "*Required";
    } else {
      nameErrMsgEl.textContent = "";
    }
    if (emailEl.value === "") {
      emailErrMsgEl.textContent = "*Required";
    } else {
      emailErrMsgEl.textContent = "";
    }
    if (messageEl.value === "") {
      messageErrMsgEl.textContent = "*Required";
    } else {
      messageErrMsgEl.textContent = "";
    }
  } else {
    nameErrMsgEl.textContent = "";
    emailErrMsgEl.textContent = "";
    messageErrMsgEl.textContent = "";
    onSuccessPage();
  }
};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
});
