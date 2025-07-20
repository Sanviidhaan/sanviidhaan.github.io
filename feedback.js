document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("feedbackForm");
  const message = document.getElementById("feedbackMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (name === "" || comment === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Here, you would send the data to a server.
    // For demo, just show a success message:
    message.textContent = "Thank you for your feedback!";
    form.reset();
  });
});
