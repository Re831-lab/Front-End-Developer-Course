import { strict as assert } from "assert";
import { shuffle } from "../src/shuffle.js";
describe("shuffle", () => {
  // test that shuffle returns an array of the same length
  it("should return an array with the same number of elements", () => {
    const cards = [
      { term: "HTML", description: "HyperText Markup Language" },
      { term: "CSS", description: "Cascading Style Sheets" },
      { term: "JS", description: "JavaScript" },
    ];
    const result = shuffle(cards);
    assert.equal(result.length, cards.length);
  });
  // test that shuffle rearranges the indexes of the array
  it("should shuffle the order of the array elements", () => {
    // Use a large array to reduce the chance of false positives
    const cards = Array.from({ length: 20 }, (_, i) => ({
      term: `Term ${i}`,
      description: `Description ${i}`,
    }));
    const original = [...cards];
    const result = shuffle(cards);

    const hasChanged = result.some(
      (card, index) => card.term !== original[index].term
    );
    assert.ok(hasChanged, "Shuffle should change the order of elements");
  });
  // test that shuffle does not mutate the original array
  it("should not mutate the original array", () => {
    const cards = [
      { term: "A", description: "Alpha" },
      { term: "B", description: "Beta" },
      { term: "C", description: "Gamma" },
    ];
    const originalFirst = cards[0].term;
    shuffle(cards);
    assert.equal(cards[0].term, originalFirst, "Original array should not be mutated");
  });
  // test that shuffle contains all the same elements
  it("should contain all the same elements after shuffling", () => {
    const cards = [
      { term: "HTML", description: "HyperText Markup Language" },
      { term: "CSS", description: "Cascading Style Sheets" },
      { term: "JS", description: "JavaScript" },
    ]; const result = shuffle(cards);
    const originalTerms = cards.map((c) => c.term).sort();
    const resultTerms = result.map((c) => c.term).sort();
    assert.deepEqual(resultTerms, originalTerms);
  });
});