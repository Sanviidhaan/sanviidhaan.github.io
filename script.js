/**
 * script.js
 * For Dr. Sanvidhan S. Sonawane's GitHub CV Website
 * Handles Feedback Form (client-side only)
 */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  const message = document.getElementById("feedbackMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const comment = document.getElementById("comment").value.trim();

      if (name === "" || comment === "") {
        alert("Please fill in all fields.");
        return;
      }

      // ✅ Log to console (for now)
      console.log("Feedback Submitted:", { name, comment });

      // ✅ Save to localStorage (optional for demo)
      let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
      feedbacks.push({ name, comment, date: new Date().toISOString() });
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

      // ✅ Show thank you message
      message.textContent = "Thank you for your feedback!";
      form.reset();
    });
  }

  // ✅ Optional: display saved feedback in console
  const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  if (savedFeedbacks.length > 0) {
    console.log("Previously submitted feedbacks:", savedFeedbacks);
  }
});
