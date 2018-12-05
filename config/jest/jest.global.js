beforeEach(() => {
  global.testMap = new Map([['a', 1], ['b', 2]]);
  global.testSet = new Set([1, 2]);
  global.testObj = { name: 1, gender: 2 };
  global.testArr = [1, 2];
  (function (a, b) {
    global.arrLike = arguments;
    return a + b;
  }(1, 2));
});