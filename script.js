const form = document.getElementById("bookingForm");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

const today = new Date().toISOString().split("T")[0];
checkin.setAttribute("min", today);

checkin.addEventListener("change", function () {

let checkinDate = checkin.value;
checkout.setAttribute("min", checkinDate);

});

form.addEventListener("submit", function(e){

e.preventDefault();

errorMsg.textContent = "";
successMsg.textContent = "";

if(checkin.value === "" || checkout.value === ""){

errorMsg.textContent = "Please select both check-in and check-out dates.";
return;

}

if(checkout.value <= checkin.value){

errorMsg.textContent = "Check-out date must be after check-in date.";
return;

}

successMsg.textContent = "Booking submitted successfully!";

form.reset();

});
