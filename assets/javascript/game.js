$(document).ready(function() {


var fighters = [
  {
    name: "Terra",
    hp: 153,
    attack: 14,
    counterAttack: 12,
    victories: 0,
    losses: 0
  },
  {
    name: "Yuffie",
    hp: 219,
    attack: 22,
    counterAttack: 19,
    victories: 0,
    losses: 0
  },
  {
    name: "Cloud",
    hp: 313,
    attack: 27,
    counterAttack: 23,
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
var characterSelected = false;
var enemySelected = false;


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



$("#terraImage").click (function() {
	characterSelected = true;
	currentCharacterName = fighters[0].name;
	$("#chooseYourWarrior").html(currentCharacterName);
	$("#enemy1").attr("src", "assets/images/characters/yuffie.png");
	$("#enemy2").attr("src", "assets/images/characters/cloud.png");
	$("#enemy3").attr("src", "assets/images/characters/tidus.png");
	$("#selectedCharacter").attr("src", "assets/images/characters/terra.png");
	$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
})


$("#enemy1").click (function() {
	if(characterSelected && currentCharacterName == "Terra") {
	enemySelected = true;
	currentEnemyName = fighters[1].name;
	$("#currentEnemy").attr("src", "assets/images/characters/yuffie.png");
	$("#enemy1").html("");
	$("#battleStats").html("<br>" + fighters[1].name + "'s HP: " + fighters[1].hp + "<br>Your HP: " + fighters[0].hp);
	}
})

$("#enemy1").click (function() {
	if(characterSelected && currentCharacter == "Terra") {
	$("#currentEnemy").attr("src", "assets/images/characters/yuffie.png");
	}
})

$("#enemy1").click (function() {
	if(characterSelected && currentCharacter == "Terra") {
	$("#currentEnemy").attr("src", "assets/images/characters/yuffie.png");
	}
})



$("#attackButton").click (function() {
	if(characterSelected && enemySelected) {
		fighters[1].hp = fighters[1].hp - fighters[0].attack;
		fighters[0].hp = fighters[0].hp - fighters[1].counterAttack;
		$("#battleStats").html("You hit for " + fighters[0].attack + " damage<br>" + fighters[1].name + "'s HP: " + fighters[1].hp + "<br>Your HP: " + fighters[0].hp);
			if(fighters[1].hp < 0) {
				$("#currentEnemy").attr("src", "assets/images/chooseopponent.jpg");
				$("#battleStats").html("You've defeated " + currentEnemyName + "<br>You have" + figters[0].hp + " remaining.");
			}
		fighters[0].attack = fighters[0].attack * 2;
	}
})








})	