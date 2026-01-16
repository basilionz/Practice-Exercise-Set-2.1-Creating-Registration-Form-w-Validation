document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nameRegex = /^[A-Za-z]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const error = document.getElementById("error");

  error.textContent = "";

  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    error.textContent = "Names must contain letters only.";
    return;
  }

  if (!passwordRegex.test(password)) {
    error.textContent =
      "Password must be at least 8 characters and include uppercase, lowercase, and a number.";
    return;
  }

  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match.";
    return;
  }

  alert("Registration successful!");
  this.reset();
});
