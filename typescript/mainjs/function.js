// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
let myAdd = function (x, y) { return x + y; };
console.log(add(2, 3));
function add1(x, y) {
    return x + y;
}
let myAdd1 = function (x, y) { return x + y; };
console.log(add1(2, 6));
let myAdd2;
// myAdd2 = function(x: number, y: number): number { return x + y; };
myAdd2 = function (x, y) { return x + y; };
console.log(myAdd2(4, 6));
//Optional and Default Parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob"); // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams"); // ah, just right
function buildName1(firstName, ...therestName) {
    // return firstName + " " + therestName.join(" ");
    return therestName[2];
}
let employeeName = buildName1("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
