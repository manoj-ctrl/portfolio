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

// Highlight active page in navbar
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Contact form validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("input[type=text]").value.trim();
      const email = form.querySelector("input[type=email]").value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
      alert("Thanks for contacting me, " + name + "! I’ll reply soon.");
      form.reset();
    });
  }
});
