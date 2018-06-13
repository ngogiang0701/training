// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y; };
console.log(add(2,3));


function add1(x: number, y: number): number {
    return x + y;
}

let myAdd1 = function(x: number, y: number): number { return x + y; };

console.log(add1(2,6));

let myAdd2: (x: number, y: number) => number;

    // myAdd2 = function(x: number, y: number): number { return x + y; };
     myAdd2 = function(x,y) { return x + y; };
console.log(myAdd2(4,6));

//Optional and Default Parameters

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right


function buildName1(firstName: string, ...therestName: string[]) {
    // return firstName + " " + therestName.join(" ");
    return therestName[2];
}

let employeeName = buildName1("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

/*
class Poker{
	suits: string[];
	cards: number;
	constructor (suits: string[] , cards: number){
		this.suits = suits;
		this.cards = cards;
	}
}

// let p12 = new Poker(["A","B"],10);

// console.log(p12.suits[1]);

class Deck extends Poker {
	
	createCard(){
		let pickedCard = Math.floor(Math.random() * this.cards);
		let pickedSuite = Math.floor(pickedCard / 13);

		// return { suite: this.suits[pickedSuite], card: pickedCard % 13};
		let repicked = pickedCard %13;
		if(repicked == 0 )
		{
			return {suite: this.suits[pickedSuite], card : 'K'};
		}
		else if (repicked == 1)

		{
			return {suite: this.suits[pickedSuite], card : 'A'};
		}
		else if (repicked == 11)
		{
			return {suite: this.suits[pickedSuite], card : 'J'};
		}
		else if ( repicked ==12)
		{
			return {suite: this.suits[pickedSuite], card : 'Q'};
		}
		else {
			return {suite: this.suits[pickedSuite], card : repicked};
		}
	}
}

let p112 = new Deck(["Cơ","Rô","Bích","Tép"], 52);

console.log(`Card: ${p112.createCard().card}. Suite: ${p112.createCard().suite}`);

*/
/*
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

*/



// let x1= 51 % 13;
// let x2 = Math.random();
// console.log(x1);
// console.log(x2);




interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
