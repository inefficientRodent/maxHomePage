/* Declare variables like epic gamer */
var gameData = {
	wood: 0,
	stone: 0,
	food: 0,
	day: 0,
	season: 'spring',
	temperature: 'cold',
	health: 10,
}

/*Things that make the game have content*/
var gameLoop = window.setInterval(function() {
	
}, 1000)



/*The Stupid Stuff That Makes Things Work Or Whatever*/
var myVar;
function loadFunction() {
	myVar = setTimeout(showPage, 3000)
}
function showPage() {
	document.getElementById("load").style.display = "none";
	document.getElementById("titleWrap").style.display = "block";
	document.getElementById("fuckSake").style.display = "block";
	document.getElementById("navigation").style.display = "flex";
	document.getElementById("playerBase").style.display = "block";
	document.getElementById("gameContainer").style.display = "block";
}

function tab(tab) {
	document.getElementById("playerBase").style.display = "none"
	document.getElementById("Forest").style.display = "none"
	document.getElementById("Inventory").style.display = "none"
	document.getElementById("Options").style.display = "none"
	document.getElementById(tab).style.display = "inline-block"
}

var mainLoop = window.setInterval(function() {
	document.getElementById("pBaseMessage").innerHTML = "You are at your base. You think it's probably " + gameData.season + "."
	document.getElementById("pBaseTemp").innerHTML = "It feels " + gameData.temperature + "."
	if (gameData.health == 10) {
		document.getElementById("playerHealth").innerHTML = "You feel good."
	}
	else if (gameData.health >= 7 && gameData.health < 10){
		document.getElementById("playerHealth").innerHTML = "You feel okay."
	}
	else if (gameData.health >= 5 && gameData.health < 7){
		document.getElementById("playerHealth").innerHTML = "You feel rough."
	}
	else if (gameData.health >= 3 && gameData.health < 5){
		document.getElementById("playerHealth").innerHTML = "You are hurting bad."
	}
	else if (gameData.health >= 2 && gameData.health < 3){
		document.getElementById("playerHealth").innerHTML = "You wish Doctors were still around."
	}
	else if (gameData.health = 1){
		document.getElementById("playerHealth").innerHTML = "The pain is too much."
	}
	else if (gameData.health == 0){
		gameOver()
	}
}, 1000)

function gameOver() {
	
}



/*Dev Content*/
function DEVhealth(devHealth) {
	gameData.health = devHealth
}