/* Declare variables like epic gamer */
var gameData = {
	wood: 0,
	stone: 0,
	food: 0,
	day: 0,
	season: 'spring',
	health: 10,
}

/*Things that make the game have content*/






/*The Stupid Stuff That Makes Things Work Or Whatever*/
function tab(tab) {
	document.getElementById("playerBase").style.display = "none"
	document.getElementById("Forest").style.display = "none"
	document.getElementById("Inventory").style.display = "none"
	document.getElementById("Options").style.display = "none"
	document.getElementById(tab).style.display = "inline-block"
}

var mainLoop = window.setInterval(function() {
	document.getElementById("pBaseMessage").innerHTML = "You are at your base. You think it's probably " + gameData.season + "."
}, 1000)