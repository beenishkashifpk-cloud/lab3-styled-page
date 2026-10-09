// Step 6.2: references to form fields
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const topicSelect = document.getElementById("topic");

// Step 6.3: save data when the form is submitted
form.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("visitorName", nameInput.value);
  localStorage.setItem("visitorTopic", topicSelect.value);
  alert("Thanks, " + nameInput.value + "! Saved locally.");
});

// Step 6.5: restore data when the page loads
window.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("visitorName");
  const savedTopic = localStorage.getItem("visitorTopic");
  if (savedName) {
    nameInput.value = savedName;
  }
  if (savedTopic) {
    topicSelect.value = savedTopic;
  }
});

// Step 6.8: clear saved data
document.getElementById("clear-btn").addEventListener("click", function () {
  localStorage.removeItem("visitorName");
  localStorage.removeItem("visitorTopic");
  form.reset();
  alert("Saved data cleared.");
});