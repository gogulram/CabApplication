document.getElementById("userName").innerHTML = localStorage.getItem("UserName");
document.getElementById("Age").innerHTML = localStorage.getItem("age");

document.getElementById("cabtype").innerHTML = localStorage.getItem("cartype");
document.getElementById("kilometers").innerHTML = localStorage.getItem("kilometers");
document.getElementById("JourneyDate").innerHTML = localStorage.getItem("journeyDate");
document.getElementById("PickupTime").innerHTML = localStorage.getItem("picTime");
document.getElementById("Amount").innerHTML = localStorage.getItem("TotalFare");
document.getElementById("peakamount").innerHTML = localStorage.getItem("AmountAfterPeakTime");
var age = localStorage.getItem("age");
console.log(age);

if (age >= 60) {
    document.getElementById("seniorCitizenAmount").innerHTML = localStorage.getItem("amountForSeniorCitizen");
} else {
    document.getElementById("seniorCitizenAmount").innerHTML = "NIL";
}
document.getElementById("GstAmount").innerHTML = (localStorage.getItem("GstAmount"));


document.getElementById("TotalAmountPayable").innerHTML = localStorage.getItem("totalAmountAfterGst");