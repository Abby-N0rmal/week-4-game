// Going to initialize the variables first

//Crystals
var crystal = {
	purple:
	{
		name: "purple",
		value: 0
	},

	blue:
	{
		name: "blue",
		value: 0
	},

	green:
	{
		name: "green",
		value: 0
	},

	red:
	{
		name: "red",
		value: 0
	}
};

//Scores
var currentScore= 0;
var targetScore= 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;

//Moving on to Functions (this is where I get lost)

// Function for getting the random numbers
var Random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Starts and restarts the game
var startGame = function() {
	//reset the current score
	currentScore= 0;
	// set new target score between 19 - 120
	targetScore = Random( 19, 120);

	//set a different value for each crystal between 1 -12
	crystal.purple.value = Random(1, 12);
	crystal.blue.value = Random(1, 12);
	crystal.green.value = Random(1, 12);
	crystal.red.value = Random(1, 12);


	// change the html to reflect all of these changes
	$("#your-score").text(currentScore);
	$("#target-score").text(targetScore);
};
// CHECK TO SEE IF PLAYER WON OR LOST GAME:
var checkWin = function() {
	if (currentScore > targetScore) {
		alert("You Lost!");
		//Adding 1 to loss counter
		lossCount++;
		//change loss count in html
		$("#loss-count").text(lossCount);
		//Restart game
		startGame();
	}

	else if (currentScore === targetScore) {
		alert("You Won!!!");
		// adding 1 to win counter
		winCount++
		//change the loss count in html
		$("#win-count").text(winCount);
		//restart game
		startGame();
	}
};

//Clicks on the cryrstals
var addValues = function(clickedCrystal) {
	//change currentScore
	currentScore += clickedCrystal.value;
	//change the html to reflect changes in currentScore
	$("#your-score").text(currentScore);
	// call checkwin function
	checkWin();
	//Testing console
	console.log("Your Score: " + currentScore);
};

//MAIN PROCESS
//=============================================

//Starts game for the first time.
startGame();

$("#purple").click(function() {
	addValues(crystal.purple);
});

$("#blue").click(function() {
	addValues(crystal.blue);
});

$("#green").click(function() {
	addValues(crystal.green);
});

$("#red").click(function() {
	addValues(crystal.red);
});