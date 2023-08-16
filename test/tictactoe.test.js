require('@testing-library/jest-dom/extend-expect');
const { test, expect } = require("@jest/globals");

const {
  updateCell,
  checkWinner,
  restartGame,
  options,
  currentPlayer,
  running,
} = require("../script");

describe("Tic Tac Toe Game", () => {
  beforeEach(() => {
    restartGame();
  });

  test("should not update cell if already filled", () => {
    const index = 0;
    options[index] = "X";
    const expectedOptions = ["X", "", "", "", "", "", "", "", ""];
    const expectedCurrentPlayer = "X";

    updateCell(index);

    expect(options).toEqual(expectedOptions);
    expect(currentPlayer).toEqual(expectedCurrentPlayer);
  });

  test("should detect a winning condition", () => {
    options[0] = "X";
    options[1] = "X";
    options[2] = "X";
    const expectedOptions = ["X", "X", "X", "", "", "", "", "", ""];

    checkWinner();

    expect(options).toEqual(expectedOptions);
    expect(running).toBe(false);
  });

  
});