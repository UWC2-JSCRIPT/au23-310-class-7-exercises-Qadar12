describe("Tests for BlackJack Game", () => {
  it("class time walkthrough", () => {
    const hand = [
      { displayVal: "Six", val: 6, suit: "hearts" },
      { displayVal: "Seven", val: 7, suit: "hearts" },
    ];
    const result = calcPoints(hand);

    expect(result.total).toEqual(13);
  });
  it("No aces", () => {
    const hand = [
      { displayVal: "Two", val: 2, suit: "hearts" },
      { displayVal: "Seven", val: 7, suit: "spades" },
    ];
    const noAce = calcPoints(hand);

    expect(noAce.isSoft).toBe(false);
  });
  it("1 ace case soft", () => {
    const hand = [
      { displayVal: "Six", val: 6, suit: "clubs" },
      { displayVal: "Ace", val: 11, suit: "hearts" },
    ];
    const oneAce = calcPoints(hand);

    expect(oneAce.isSoft).toBe(true);
  });
  it("1 ace case not soft", () => {
    const hand = [
      { displayVal: "Six", val: 6, suit: "hearts" },
      { displayVal: "Seven", val: 7, suit: "Spades" },
      { displayVal: "Ace", val: 11, suit: "hearts" },
    ];
    const oneAceNotSoft = calcPoints(hand);

    expect(oneAceNotSoft.isSoft).toBe(false);
  });
  it("multiple ace case soft", () => {
    const hand = [
      { displayVal: "Two", val: 2, suit: "clubs" },
      { displayVal: "Two", val: 2, suit: "hearts" },
      { displayVal: "Ace", val: 11, suit: "clubs" },
      { displayVal: "Ace", val: 11, suit: "spades" },
    ];
    const mulAces = calcPoints(hand);

    expect(mulAces.isSoft).toBe(true);
  });
  it("multiple ace case not soft", () => {
    const hand = [
      { displayVal: "Ace", val: 11, suit: "clubs" },
      { displayVal: "Ace", val: 11, suit: "diamonds" },
      { displayVal: "Ten", val: 10, suit: "hearts" },
    ];
    const mulAceNotSoft = calcPoints(hand);

    expect(mulAceNotSoft.isSoft).toBe(false);
  });
});
