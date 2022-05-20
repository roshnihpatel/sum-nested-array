import sumNested from "./sumNested";

test("sum the numbers in an array that can have nested arrays ", () => {
  expect(sumNested([10, [2, 3, 6], [1, [100, [3, 4], 5]]])).toBe(134)
  expect(sumNested([1,2])).toBe(3);
  expect(sumNested([1,[2]])).toBe(3);
  expect(sumNested([[3],[17]])).toBe(20);
  expect(sumNested([[5,6,7]])).toBe(18);
  expect(sumNested([])).toBe(0);
  expect(sumNested([1,-5,[4], [-10,5]])).toBe(-5);


});
