function handleSignup() {
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

  // Simple email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    message.style.color = "red";
    message.textContent = "Please enter your email address.";
  } 
  else if (!emailPattern.test(email)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email address.";
  } 
  else {
    message.style.color = "green";
    message.textContent = "Thank you! We will notify you soon.";
    document.getElementById("email").value = "";
  }
}