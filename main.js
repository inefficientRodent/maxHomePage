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
}, 1000)