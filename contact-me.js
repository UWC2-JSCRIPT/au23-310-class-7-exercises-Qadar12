// TODO
document.addEventListener("DOMContentLoaded", function () {
  const dropDown = document.getElementById("reason");
  const job = document.getElementById("jobInfo");
  const talk = document.getElementById("talkInfo");

  dropDown.addEventListener("change", function () {
    const selectedValue = dropDown.value;

    // Check the selected value and show/hide the input fields
    if (selectedValue === "job opportunity") {
      job.classList.remove("hidden");
    } else {
      job.classList.add("hidden");
    }
    if (selectedValue === "talk code") {
      talk.classList.remove("hidden");
    } else {
      talk.classList.add("hidden");
    }
  });

  const submit = document.getElementById("submit");
  const form = document.getElementById("contactForm");

  // form.checkValidity()
  submit.addEventListener("click", function () {
    if (form.checkValidity()) {
      console.log("All form fields are valid");
    } else {
      console.log("Form validation failed");
    }
  });
});
