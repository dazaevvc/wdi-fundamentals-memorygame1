 console.log("Up and running!");


var cards = [
 	{
 		rank: "queen",
 		suit: "hearts",
 		cardImage: "images/queen-of-hearts.png"
 	},
 	{
 		rank: "queen",
 		suit: "diamonds",
 		cardImage: "images/queen-of-diamonds.png"
 	},
 	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
 	},
 	{
 		rank: "king",
 		suit: "hearts",
 		cardImage: "images/king-of-diamonds.png"

 	}
];
var cardsInPlay = [];
// var cardOne = cards[0];
// var cardTwo = cards[2];
// var cardThree = cards[1];
// var cardFour = cards[3];
// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);

// if (cardsInPlay[0] == cardsInPlay[2]) {
// 	alert("You found a match");
// }	else{
// 	alert("Sowwy, try again.");
// }
// var checkForMatch = function(){
// 	document.setAttribute('src', cards[cardId].cardImage);
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
//       alert("You found a match!");
//   } else {
//       alert("Sorry, try again.");
//   }
// };


var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	// var cardOne = cards[0];
	// var cardTwo = cards[2];
	// var cardThree = cards[1];
	// var cardFour = cards[3];
	this.setAttribute('src', cards[cardId].cardImage);


var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
      		alert("You found a match!");
 	 	} else {
      		alert("Sorry, try again.");
  	 	}
  	};	
};

	checkForMatch();



	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	
	cardsInPlay.push(cards[cardId].rank);
	};



var createBoard = function(){
	for (i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}; 

createBoard();






