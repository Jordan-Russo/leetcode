function isFlush(cards) {
  const suit = cards[0].at(-1);
  return cards.every(card => card.at(-1) === suit);
}