// Keep JS minimal for now, just test submit alert
document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form submitted successfully!");
});
