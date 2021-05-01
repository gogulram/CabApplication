let kilometers = 0;
let cabtype = "";

document.getElementById("cars").onchange = function() {
    event.preventDefault();

    cabtype = document.querySelector("#cars").value;
    console.log(cabtype);
    localStorage.setItem("cartype", cabtype);

}
document.getElementById("kilometer").onchange = function() {
    let kilometers = parseInt(document.querySelector("#kilometer").value);
    localStorage.setItem("kilometers", kilometers);
    cabtype = document.querySelector("#cars").value;
    TotalPriceWithoutGst(kilometers, cabtype);
}





function TotalPriceWithoutGst(km, cabtype) {
    if (km > 0) {

        console.log(km);
        if (cabtype === "Micro") {
            let cabPrice = km * 10;
            localStorage.setItem("TotalFare", cabPrice);
            console.log(cabPrice);
        } else if (cabtype === "Mini") {
            let val = km * 15;
            console.log(val)
            localStorage.setItem("TotalFare", val);

        } else if (cabtype === "Prime") {
            let val = km * 20;
            localStorage.setItem("TotalFare", val);
            console.log(val);
        }

        document.querySelector("#price").innerHTML = localStorage.getItem("TotalFare");

    } else {
        alert("Please enter a valid km");
    }
}
var today = new Date()
var todayStr = today.toJSON().substring(0, 10);
document.getElementById("journeydate").setAttribute("min", todayStr);
document.getElementById("dateofbirth").setAttribute("max", todayStr);

var journey;
var journeyDate;
var journeyMonth;
var journeyYear;
var current;
var currentDate;
var currentMonth;
var currentYear;
var currentHour;
var currentTime;
var picTime;
var currentMin;
var picUpHour;
var picUpMin;

document.getElementById("journeydate").onchange = function() {
    var journey = document.querySelector("#journeydate").value;
    localStorage.setItem("journeyDate", journey);

    var journeyDate = parseInt(journey.slice(8, 10));

    var journeyMonth = parseInt(journey.slice(5, 7));
    var journeyYear = parseInt(journey.slice(0, 4));

    currentDate = parseInt(new Date().getDate());
    currentMonth = parseInt(new Date().getMonth()) + 1;
    currentYear = parseInt(new Date().getFullYear());
    if ((journeyDate >= currentDate) && (journeyMonth >= currentMonth) && (journeyYear >= currentYear)) {
        alert("its a valid journey date, You can continue");
        document.querySelector("#BookingDetails").innerHtml = "its a valid journey date, You can continue";

    } else {
        alert("sorry,Not a valid date");
    }
    console.log(journey);
    console.log(journeyDate);
    console.log(journeyMonth);
    console.log(journeyYear);
    console.log(currentMonth);
    console.log("year ", currentYear);
    console.log(" date ", currentDate);

}
document.getElementById("picuptime").onchange = function() {
    picTime = document.getElementById("picuptime").value;
    currentHour = parseInt(new Date().getHours());
    currentMin = parseInt(new Date().getMinutes());

    picUpHour = parseInt(picTime.slice(0, 2));
    picUpMin = parseInt(picTime.slice(3, 6));
    localStorage.setItem("picTime", picTime)
    localStorage.setItem("picUpHour", picUpHour);
    localStorage.setItem("picUpMin", picUpMin);
    localStorage.setItem("currTime", currentHour);
    if ((picUpHour >= currentHour)) {
        document.querySelector("#pickupTimeDisplay").innerHTML = "Cab available in this time";
    } else {
        alert("Not a valid Time");
    }
    console.log(currentHour);
    console.log(currentMin);
    console.log(picUpHour);
    console.log(picUpMin);
    peakHourCalculation();
}

function isPeakHour() {
    var picuptime = localStorage.getItem("picUpHour");
    if ((picuptime >= 17) && (picuptime <= 19)) {
        return true;
    } else {
        return false;
    }

}

function peakHourCalculation() {
    var picuptime = localStorage.getItem("picUpHour");
    var currtime = localStorage.getItem("currentHour");
    var TotalFare = parseInt(localStorage.getItem("TotalFare"));
    //console.log("pictime", typeof(Amount));

    var peakamount;
    var amntafterpeak;
    var val;

    if ((picuptime >= 17) && (picuptime <= 19)) {
        peakamount = ((TotalFare * 1.25) / 100);
        console.log("peakprice", peakamount);
        localStorage.setItem("peakTimePrice", peakamount);
        AmountAfterPeakTime = parseFloat(TotalFare) + parseFloat(peakamount);
        localStorage.setItem("AmountAfterPeakTime", AmountAfterPeakTime);
        console.log("totalandpeak", AmountAfterPeakTime);



        // document.getElementById("peakval").innerHTML = localStorage.getItem("peakprice");
        // document.getElementById("amntafterpeak").innerHTML = localStorage.getItem("val1");
    } else {
        TotalFare = parseInt(localStorage.getItem("TotalFare"));
        localStorage.setItem("AmountAfterPeakTime", TotalFare);
    }
}
var dateofbirth;
var birthYear;
let curentYear;
let age;
let amountForSeniorCitizen;


document.getElementById("dateofbirth").onchange = function() {
    dateofbirth = document.getElementById("dateofbirth").value;
    birthYear = parseInt(dateofbirth.slice(0, 4));
    curentYear = parseInt(new Date().getFullYear());
    age = ageCalculator(birthYear, curentYear);
    localStorage.setItem("age", age);

    if (isValidSenior(age)) {
        document.querySelector("#SeniorCitizenDisplay").innerHTML = "Senior Citizen Discount(50%) available for you!";

        amountForSeniorCitizen = parseInt(localStorage.getItem("AmountAfterPeakTime"));
        amountForSeniorCitizen /= 2;
        localStorage.setItem("amountForSeniorCitizen", amountForSeniorCitizen);
    } else {
        // document.getElementById("seniorCitizen").innerHTML = 0;
        document.querySelector("#SeniorCitizenDisplay").innerHTML = "Not a Senior Citizen";

        localStorage.setItem("amountForSeniorCitizen", AmountAfterPeakTime);


    }
    console.log("dob : ", age);


    gstCalculation();
}


function ageCalculator(birthYear, currentYear) {
    return curentYear - birthYear;

}

function isValidSenior(age) {
    if (age >= 60) {
        return true;
    } else {
        return false;
    }
}

function gstCalculation() {

    amountForSeniorCitizen = parseInt(localStorage.getItem("amountForSeniorCitizen"));
    let GstAmount = parseFloat(7 * amountForSeniorCitizen) / 100.0;
    let totalAmountAfterGst = (amountForSeniorCitizen) + (GstAmount);
    localStorage.setItem("GstAmount", GstAmount);
    localStorage.setItem("totalAmountAfterGst", totalAmountAfterGst)
    var Gender = document.getElementsByName("gender").value;
    console.log(Gender);
    localStorage.setItem("Gender", Gender)
        // document.getElementById("seniorCitizen").innerHTML = amount;
    console.log("amount", amountForSeniorCitizen);
}

function totalBilling() {

}