var ask = prompt("What's Your Move??\n   \nForward Counting  \nBackward Counting \nTable ");
 var userAnswer= ("Forward Counting");
var backwardAnswer=("Backward Counting");
var tableAnswer = "Table";


if(ask===userAnswer){
    var askStart = prompt("Your starting point")
    var askEnd = prompt("Your ending point")

    let counting = "";

    if(askStart <= askEnd){
        for (let i = askStart; i <= askEnd; i++) {
            counting += i + " ";
        }
        document.body.innerHTML += "<h2>Counting: " + "<br>"  + counting + "</h2>";
        
        
    }
    else{
        document.body.innerHTML += "<h2> Invalid range! Starting point should be less than or equal to ending point. </h2>";
    }
}
else if (ask === backwardAnswer) {
    var askStart = prompt("Your starting point for Backward Counting");
    var askEnd = prompt("Your ending point for Backward Counting");

    let counting = "";

    if (askStart >= askEnd) {
        for (let i = askStart; i >= askEnd; i--) {
            counting += i + " ";
        }
        document.body.innerHTML += "<h2>Backward Counting: "+ "<br>" + counting + "</h2>";
    } else {
        document.body.innerHTML += "<h2>Invalid range! Starting point should be greater than or equal to ending point.</h2>";
    }
} 
else if (ask === tableAnswer) {
    var tableNum = prompt("Which number's table do you want?");

    // Convert input to number
    let number = tableNum;
    let table = "";

    for (let i = 1; i <= 10; i++) {
        table += number + " x " + i + " = " + (number * i) + "<br>";
    }
    document.body.innerHTML += "<h2>Table of " + number + ":<br>" + table + "</h2>";}

else {
    document.body.innerHTML += "<h2>Invalid option. Please select 'Forward Counting' or 'Backward Counting' or 'Table'.</h2>";
}