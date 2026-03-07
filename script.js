const form = document.getElementById("bookingForm");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

e.preventDefault();

let checkinDate = new Date(checkin.value);
let checkoutDate = new Date(checkout.value);
let today = new Date();

today.setHours(0,0,0,0);

if(checkinDate < today){
message.textContent = "Check-in date cannot be in the past";
message.style.color = "red";
return;
}

if(checkoutDate <= checkinDate){
message.textContent = "Check-out must be after check-in date";
message.style.color = "red";
return;
}

message.textContent = "Dates are valid!";
message.style.color = "green";

});
