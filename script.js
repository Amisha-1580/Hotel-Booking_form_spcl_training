const form = document.getElementById("bookingForm");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const roomType = document.getElementById("roomType");
const guests = document.getElementById("guests");
const requests = document.getElementById("requests");

const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

/* Restrict past dates */

const today = new Date().toISOString().split("T")[0];
checkin.setAttribute("min", today);

/* Update checkout date dynamically */

checkin.addEventListener("change", function(){

let checkinDate = checkin.value;
checkout.setAttribute("min", checkinDate);

});

/* Form validation */

form.addEventListener("submit", function(e){

e.preventDefault();

errorMsg.textContent = "";
successMsg.textContent = "";

if(checkin.value === ""){
errorMsg.textContent = "Please select a check-in date.";
return;
}

if(checkout.value === ""){
errorMsg.textContent = "Please select a check-out date.";
return;
}

if(checkout.value <= checkin.value){
errorMsg.textContent = "Check-out date must be after check-in date.";
return;
}

if(roomType.value === ""){
errorMsg.textContent = "Please select a room type.";
return;
}

if(guests.value <= 0){
errorMsg.textContent = "Guest count must be at least 1.";
return;
}

/* Success Message */

successMsg.textContent = 
"Booking Successful! Room: " + roomType.value +
", Guests: " + guests.value +
", Check-in: " + checkin.value +
", Check-out: " + checkout.value;

/* Reset form */

form.reset();

});
