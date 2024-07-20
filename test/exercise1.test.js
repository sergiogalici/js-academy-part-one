import killCreatures from "../src/exercise1"

describe("Exercise 1: Kill Creatures", () => {
  test("Kills all creatures with sufficient arrows", () => {
    expect(killCreatures(5, 3, 2, 21)).toEqual([5, 3, 2, 0])
  })

  test("Kills all but one troll with almost sufficient arrows", () => {
  expect(killCreatures(5, 3, 2, 20)).toEqual([5, 3, 1, 0])
  })

  test("Kills only rats and goblins with limited arrows", () => {
    expect(killCreatures(5, 3, 2, 11)).toEqual([5, 3, 0, 0])
  })

  test("Kills only rats with few arrows", () => {
    expect(killCreatures(5, 3, 2, 5)).toEqual([5, 0, 0, 0])
  })

  test("Kills no creatures without arrows", () => {
    expect(killCreatures(5, 3, 2, 0)).toEqual([0, 0, 0, 0])
  })

  test("Handles excess arrows correctly", () => {
    expect(killCreatures(2, 1, 1, 30)).toEqual([2, 1, 1, 22])
  })
})
