beforeAll(() => {
  global.testMap = new Map([['a', 1], ['b', 2]]);
  global.testSet = new Set([1, 2]);
  global.testObj = { a: 1, b: 2 };
  global.testArr = [1, 2];
  (function (a, b) {
    global.arrLikeObj = arguments;
    return a + b;
  }(1, 2));
  (function () {
    global.arrLikeObjNoLength = arguments;
  }());
  function* gen() {
    yield* ['a', 'b', 'c'];
  }
  global.generatorObject = gen();
  global.generator = gen;
  global.promiseFn = () => new Promise(resolve => setTimeout(() => resolve(), 2000));
  global.document.body.innerHTML = '<div><span>hello</span></div>';
});
