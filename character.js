

function Character(name, charClass, parent){
	this.name = name;
	this.class = charClass;
	this.parent = parent;
	this.baseArmor = 10;
	this.hitpoints = 8;
	this.armor = 10;
	this.weapon = null;
	this.stats = {
		str: null,
		dex: null,
		con: null,
		int: null,
		wis: null,
		cha: null
	}
	this.addWeapon = function(name, bonus, damageID){
		this.weapon = new Weapon(name, bonus, damageID);
	}
	this.init = function(){
		this.createStats();
		this.addWeapon('fist',0,'1d3');
		this.determineArmorClass();
		this.deteremineConBonus();
	}
	this.isDead = function(){
		if(this.hitpoints<0){
			return true;
		}
		return false;
	}
	this.determineStatBonus = function(stat){
		var bonus = Math.floor(stat /4)-2;
		return bonus;
	}
	this.determineArmorClass = function(){
		this.armor = this.baseArmor + this.determineStatBonus(this.stats.dex);
	}
	this.deteremineConBonus = function(){
		this.hitpoints += this.determineStatBonus(this.stats.con);
	}
	this.determineAttackBonus = function(){
		return this.determineStatBonus(this.stats.str);
	}
	this.createStats = function(){
		for(var i in this.stats){
			this.stats[i] = this.parent.getStat();
		}
	}
	this.takeDamage = function(damageAmount){
		console.log(this.name + ' takes '+damageAmount + ' damage!');
		this.hitpoints -= damageAmount;
		if(this.hitpoints<0){
			this.die();
		}
	}
	this.die = function(){
		console.log('I, '+this.name+' am now dead');
	}
	this.notify = function(message){
		console.log(message);
	}
	this.attack = function(target){
		var attackRoll = this.parent.getRandomNumber(1,20) + this.determineAttackBonus();
		this.notify(this.name + ' attacks ' + target.name + ' and rolls a '+ attackRoll);
		if(attackRoll>=target.armor){
			this.notify(this.name + ' hits ' + target.name);
			var damage = this.weapon.generateDamage();
			target.takeDamage(damage);
		} else {
			this.notify(this.name + ' misses ' + target.name);
		}
	}
	this.init();












}