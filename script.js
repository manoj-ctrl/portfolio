// Handle contact form (contact.html)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for contacting me! I’ll reply soon.");
    });
  }
});
