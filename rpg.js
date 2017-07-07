

function RPG(){
	this.characters = [];


	this.createCharacter = function(name, charClass){
		var newCharacter = new Character(name, charClass, this);
		this.characters.push(newCharacter);
	}
	this.getStat = function(){
		var diceCount = 3;
		var diceFaces = 6;
		var total = 0;
		for(var i=0; i<diceCount; i++){
			var randomVal = Math.floor((Math.random()*diceFaces))+1;
			total += randomVal;
		}
		return total;
	}
	this.getRandomNumber = function(min, max){
		return Math.floor(Math.random()*(max-min))+min;
	}
	this.startBattle = function(combatantArray){
		var currentCombatant = 0;
		var battleID = null;
		function progressCombat(){
			var nextCombatant = currentCombatant+1;
			if(nextCombatant===combatantArray.length){
				nextCombatant=0;
			}
			this.characters[currentCombatant].attack(this.characters[nextCombatant]);
			if(this.characters[nextCombatant].isDead()){
				clearInterval(battleID);
				console.log('the battle is over, the victor is '+this.characters[currentCombatant].name);
			}
			currentCombatant = nextCombatant;

		}
		battleID = setInterval(progressCombat.bind(this),1000);

	}
}







