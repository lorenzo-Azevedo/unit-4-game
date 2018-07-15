console.log("testing testing...123");

var goal;
var losses = 0;
var wins = 0;
var counter = 0;

var begin = function () {

    $(".shots").empty();

// WHY CANT I NOT START AT ZERO!?
goal = Math.floor(Math.random() * 80 ) + 20;

$("#goal").html("Goal: " + goal);

for(var i = 0; i < 5; i++){

    // Figure the F out how not to start at zero...
    var random = Math.floor(Math.random() * 14) + 1;

    var drink = $("<div>");
        drink.attr({  
            "class": "drink",
            "randomNumber": random
        });

        drink.html(random);

    $(".shots").append(drink);

} 
}  

begin();



$(document).on('click', ".shots", function () {

    var value = parseInt($(this).attr("randomNumber"));

    // I keep getting a NaN error....
    counter += value;

    console.log(counter);

    if(counter > goal){
        losses--;
        $("#loss").html("YOU BLACKED OUT ",losses, " NIGHTS BRO");
        begin();

    }
    else if(counter === goal){
        wins++;
        $("#win").html("You had ", wins, " lit nights"
        begin();
    }
});
