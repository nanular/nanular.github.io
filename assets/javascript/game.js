$(document).ready(function() {


var fighters = [
  {
    name: "Terra",
    hp: 153,
    attack: 14,
    counterAttack: 12,
    alive: true,
    victories: 0,
    losses: 0
  },
  {
    name: "Yuffie",
    hp: 219,
    attack: 22,
    counterAttack: 19,
    alive: true,
    victories: 0,
    losses: 0
  },
  {
    name: "Cloud",
    hp: 313,
    attack: 27,
    counterAttack: 23,
    alive: true,
    victories: 0,
    losses: 0
  },
  {
  	name: "Tidus",
    hp: 290,
    attack: 28,
    counterAttack: 25,
    victories: 0,
    losses: 0
  }
];

var currentCharacterName = "";
var currentEnemyName = "";
var currentEnemyHP = 0;
var currentEnemyCounterAttack = 0;

var currentEnemyIndex = 99;
var currentCharacterIndex = 99;

var characterSelected = false;
var enemySelected = false;
var attackButtonUnlock = false;


//.hover Events That Display Character Statistics
$("#terraImage").hover (
	function() {
	$("#stats").html("Name: " + fighters[0].name + "<br> HP: " + fighters[0].hp + "<br> Attack: " + fighters[0].attack);
}, function() {
	$("#stats").html("<br><br><br>");
})

$("#yuffieImage").hover (
	function() {
	$("#stats").html("Name: " + fighters[1].name + "<br> HP: " + fighters[1].hp + "<br> Attack: " + fighters[1].attack);
}, function() {
	$("#stats").html("<br><br><br>");
})

$("#cloudImage").hover (
	function() {
	$("#stats").html("Name: " + fighters[2].name + "<br> HP: " + fighters[2].hp + "<br> Attack: " + fighters[2].attack);
}, function() {
	$("#stats").html("<br><br><br>");
})

$("#tidusImage").hover (
	function() {
	$("#stats").html("Name: " + fighters[3].name + "<br> HP: " + fighters[3].hp + "<br> Attack: " + fighters[3].attack);
}, function() {
	$("#stats").html("<br><br><br>");
})





//Character Selection Click Functions

$("#terraImage").click (function() {
	characterSelected = true;
	currentCharacterIndex = 0;
	currentCharacterName = fighters[0].name;
	$("#chooseYourWarrior").html(currentCharacterName);
	$("#enemy1").attr("src", "assets/images/characters/yuffie.png");
	$("#enemy2").attr("src", "assets/images/characters/cloud.png");
	$("#enemy3").attr("src", "assets/images/characters/tidus.png");
	$("#selectedCharacter").attr("src", "assets/images/characters/terra.png");
	$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
})

$("#yuffieImage").click (function() {
	characterSelected = true;
	currentCharacterIndex = 1;
	currentCharacterName = fighters[1].name;
	$("#chooseYourWarrior").html(currentCharacterName);
	$("#enemy1").attr("src", "assets/images/characters/terra.png");
	$("#enemy2").attr("src", "assets/images/characters/cloud.png");
	$("#enemy3").attr("src", "assets/images/characters/tidus.png");
	$("#selectedCharacter").attr("src", "assets/images/characters/yuffie.png");
	$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
})

$("#cloudImage").click (function() {
	characterSelected = true;
	currentCharacterIndex = 2;
	currentCharacterName = fighters[2].name;
	$("#chooseYourWarrior").html(currentCharacterName);
	$("#enemy1").attr("src", "assets/images/characters/terra.png");
	$("#enemy2").attr("src", "assets/images/characters/yuffie.png");
	$("#enemy3").attr("src", "assets/images/characters/tidus.png");
	$("#selectedCharacter").attr("src", "assets/images/characters/cloud.png");
	$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
})

$("#tidusImage").click (function() {
	characterSelected = true;
	currentCharacterIndex = 3;
	currentCharacterName = fighters[parseInt(currentCharacterIndex)].name;
	$("#chooseYourWarrior").html(fighters[currentCharacterIndex].name);
	$("#enemy1").attr("src", "assets/images/characters/terra.png");
	$("#enemy2").attr("src", "assets/images/characters/yuffie.png");
	$("#enemy3").attr("src", "assets/images/characters/cloud.png");
	$("#selectedCharacter").attr("src", "assets/images/characters/tidus.png");
	$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
})





//Choosing Opponents//

$("#enemy1").click (function() {
	
	enemySelected = true;
	$("#enemy1").attr("src", "assets/images/placeholder.jpg");
	
	if (characterSelected && currentCharacterName === fighters[0].name) {	
		currentEnemyName = fighters[1].name;
		currentEnemyIndex = 1;
		$("#currentEnemy").attr("src", "assets/images/characters/yuffie.png");
		$("#battleStats").html("<br>" + fighters[1].name + "'s HP: " + fighters[1].hp);
	}

	else if (characterSelected) {
		currentEnemyName = fighters[0].name;
		currentEnemyIndex = 0;
		$("#currentEnemy").attr("src", "assets/images/characters/terra.png");
		$("#battleStats").html("<br>" + fighters[0].name + "'s HP: " + fighters[0].hp);
	}
})




$("#enemy2").click (function() {
	
	enemySelected = true;
	$("#enemy2").attr("src", "assets/images/placeholder.jpg");
	
	if (characterSelected && currentCharacterName === fighters[0].name) {	
		currentEnemyName = fighters[2].name;
		currentEnemyIndex = 2;
		$("#currentEnemy").attr("src", "assets/images/characters/cloud.png");
		$("#battleStats").html("<br>" + fighters[2].name + "'s HP: " + fighters[2].hp);
	}

	else if (characterSelected && currentCharacterName === fighters[1].name) {
		currentEnemyName = fighters[2].name;
		currentEnemyIndex = 2;
		$("#currentEnemy").attr("src", "assets/images/characters/cloud.png");
		$("#battleStats").html("<br>" + fighters[2].name + "'s HP: " + fighters[2].hp);
	}

	else if (characterSelected) {
		currentEnemyName = fighters[1].name;
		currentEnemyIndex = 1;
		$("#currentEnemy").attr("src", "assets/images/characters/yuffie.png");
		$("#battleStats").html("<br>" + fighters[1].name + "'s HP: " + fighters[1].hp);
	}
})




$("#enemy3").click (function() {
	
	enemySelected = true;
	$("#enemy3").attr("src", "assets/images/placeholder.jpg");
	
	if (characterSelected && currentCharacterName === fighters[3].name) {	
		currentEnemyName = fighters[2].name;
		currentEnemyIndex = 2;
		$("#currentEnemy").attr("src", "assets/images/characters/tidus.png");
		$("#battleStats").html("<br>" + fighters[2].name + "'s HP: " + fighters[2].hp);
	}

	else if (characterSelected) {
		currentEnemyName = fighters[3].name;
		currentEnemyIndex = 3;
		$("#currentEnemy").attr("src", "assets/images/characters/tidus.png");
		$("#battleStats").html("<br>" + fighters[3].name + "'s HP: " + fighters[3].hp);
	}
})







//Attack Button Functions//

if (characterSelected && enemySelected) {
	attackButtonUnlock = true;
}

$("#attackButton").click (function() {
	if (attackButtonUnlock) {
		if (fighters[currentEnemyIndex].hp > 0) {
			fighters[currentEnemyIndex].hp = fighters[currentEnemyIndex].hp - fighters[currentCharacterIndex].attack;
			fighters[currentCharacterIndex].hp = fighters[currentCharacterIndex].hp - fighters[currentEnemyIndex].counterAttack;
			$("#opponentAttack").html(fighters[currentEnemyIndex] + " attacks you for " + fighters[currentEnemyIndex].counterAttack + " damage");
			$("#yourAttack").html("You attack " + fighters[currentEnemyIndex].name + " for " + fighters[currentCharacterIndex].attack + " damage")
			$("#hpLevels").html(fighters[currentCharacterIndex] + "'s HP: " + fighters[currentCharacterIndex].hp + "<br>");
			$("#hpLevels").append(fighters[currentEnemyIndex] + "'s HP: " + fighters[currentEnemyIndex].hp);
			fighters[currentCharacterIndex].attack = fighters[currentCharacterIndex].attack * 2;
		} else {
			fighters[currentEnemyIndex].hp = 0
			$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
			$("#battleStats").html("You've defeated " + fighters[currentEnemyIndex].name + "<br>You have" + fighters[currentCharacterIndex].hp + " remaining.");
		}
	}
})








})	