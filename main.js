
$(document).ready(initializeApp);

var game;
function initializeApp(){
	game = new RPG();

	game.createCharacter('Matt','Ranger');
	game.createCharacter('Howard','Bard');
}




