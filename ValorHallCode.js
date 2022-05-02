

function play() {
    // Here we create random numbers 0-9 for two dice. The sum is the amount of both die
    var die1 = Math.ceil(Math.random() * 9);
    var die2 = Math.ceil(Math.random() * 9);

    var sum = die1 + die2;
    // This lets us show the results of the javascript file onto the HTML file. The sum of the random numbers will be shown.
    document.getElementById("die1Res").innerHTML = "die1 = " + die1;
    document.getElementById("die2Res").innerHTML = "die2 = " + die2;
    document.getElementById("sumRes").innerHTML = "sum = " + sum;
    // These our outputs based on what we want to happen from the random number generation and sum of those numbers.
    // The "if" is basically a specific rule which is followed by the fucntion
    if (sum == 9 || sum == 13) {

        document.getElementById("finalRes").innerHTML = "The Gods do not favor you. YOU LOSE";
    }
    else if (die1 == die2 && die1 % 1 == 0) {

        document.getElementById("finalRes").innerHTML = "The Gods favor your numbers of the same. YOU WIN";
    } 
    else if (die1 == die2 && die1 % 2 == 0) {

        document.getElementById("finalRes").innerHTML = "The Gods favor your numbers of the same. YOU WIN";
    }
    else if (die1 == die2 && die1 % 3 == 0) {

        document.getElementById("finalRes").innerHTML = "The Gods favor your numbers of the same. YOU WIN";
    }
    else if (die1 == die2 && die1 % 4 == 0) {

        document.getElementById("finalRes").innerHTML = "The Gods favor your numbers of the same. YOU WIN";
    }
    else if (die1 == die2 && die1 % 5 == 0) {

        document.getElementById("finalRes").innerHTML = "The Gods favor your numbers of the same. YOU WIN";
    }
    else if (die1 == die2 && die1 % 6 == 0) {

        document.getElementById("finalRes").innerHTML = "The Gods favor your numbers of the same. YOU WIN";
    }
    else if (die1 == die2 && die1 % 7 == 0) {

        document.getElementById("finalRes").innerHTML = "The Gods favor your numbers of the same. YOU WIN";
    }
    else if (die1 == die2 && die1 % 8 == 0) {

        document.getElementById("finalRes").innerHTML = "The Gods favor your numbers of the same. YOU WIN";
    }
    else if (die1 == die2 && die1 % 9 == 0) {

        document.getElementById("finalRes").innerHTML = "The Gods favor your numbers of the same. YOU WIN";
    }
    else {

        document.getElementById("finalRes").innerHTML = "The Gods grant you another chance.";
    }
}
function returnHome() {
    location.replace ("index.html")
}
