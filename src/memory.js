class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed= 0;
  }

  shuffleCards() {
    if (!this.cards){
      return undefined;
    }

    let i = this.cards.length, j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;

    if(card1 === card2 ){
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    return this.cards.length / 2 === this.pairsGuessed;
  }
}
