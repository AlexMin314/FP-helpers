/* eslint no-undef: 0 */
import { forEach, forEachR, reduce, reduceR, map, filter } from '../loop';

describe('mapper functions', () => {
  describe('forEach', () => {
    let sideEffect;
    beforeEach(() => {
      sideEffect = [];
    });
    test('with array', () => {
      forEach(v => sideEffect.push(v * 2), testArr);
      expect(sideEffect).toEqual([2, 4]);
    });
    test('with object', () => {
      forEach(v => sideEffect.push(v * 2), testObj);
      expect(sideEffect).toEqual([2, 4]);
    });
    test('with Map', () => {
      forEach(v => sideEffect.push(v * 2), testMap);
      expect(sideEffect).toEqual([2, 4]);
    });
    test('with Set', () => {
      forEach(v => sideEffect.push(v * 2), testSet);
      expect(sideEffect).toEqual([2, 4]);
    });
    test('with string', () => {
      forEach(v => sideEffect.push(v * 2), '12');
      expect(sideEffect).toEqual([2, 4]);
    });
    test('with arrayLike', () => {
      forEach(v => sideEffect.push(v * 2), arrLikeObj);
      expect(sideEffect).toEqual([2, 4]);
    });
  });

  describe('forEachR', () => {
    let sideEffect;
    beforeEach(() => {
      sideEffect = [];
    });
    test('with array', () => {
      forEachR(v => sideEffect.push(v * 2), testArr);
      expect(sideEffect).toEqual([4, 2]);
    });
    test('with object', () => {
      forEachR(v => sideEffect.push(v * 2), testObj);
      expect(sideEffect).toEqual([4, 2]);
    });
    test('with Map', () => {
      forEachR(v => sideEffect.push(v * 2), testMap);
      expect(sideEffect).toEqual([4, 2]);
    });
    test('with Set', () => {
      forEachR(v => sideEffect.push(v * 2), testSet);
      expect(sideEffect).toEqual([4, 2]);
    });
    test('with string', () => {
      forEachR(v => sideEffect.push(v * 2), '12');
      expect(sideEffect).toEqual([4, 2]);
    });
    test('with arrayLike', () => {
      forEachR(v => sideEffect.push(v * 2), arrLikeObj);
      expect(sideEffect).toEqual([4, 2]);
    });
  });

  describe('reduce', () => {
    test('with array', () => {
      expect(reduce((a, c) => a + c, testArr)).toBe(3);
    });
    test('with object', () => {
      expect(reduce((acc, cur) => acc + cur, 0, testObj)).toBe(3);
      expect(
        reduce(
          (acc) => {
            acc.checked = acc.checked ? ++acc.checked : 1;
            return acc;
          },
          {},
          testObj,
        ),
      ).toEqual({ checked: 2 });
    });
    test('with Map', () => {
      expect(reduce((acc, e) => acc + e[1], 0, testMap)).toBe(3);
    });
    test('with Set', () => {
      expect(reduce((acc, val) => acc + val, testSet)).toBe(3);
    });
    test('with arrayLike', () => {
      expect(reduce((acc, val) => acc + val, arrLikeObj)).toBe(3);
    });
    test('with string', () => {
      expect(reduce((acc, val) => (acc.length < 3 ? acc + val : acc), 'alex')).toBe('ale');
    });
  });
  describe('reduceR', () => {
    test('with array', () => {
      expect(reduceR((a, c) => {
        a.push(c);
        return a;
      }, [], testArr)).toEqual([2, 1]);
    });
    test('with string', () => {
      expect(reduceR((acc, val) => (acc.length < 3 ? acc + val : acc), 'alex')).toBe('xel');
    });
  });

  describe('map', () => {
    test('with array', () => {
      expect(map((n, i) => n * 2 * i, testArr)).toEqual([0, 4]);
    });
    test('with object', () => {
      expect(map((n, k) => k + (n * 2), testObj)).toEqual({ a: 'a2', b: 'b4' });
    });
    test('with Map', () => {
      expect(map(n => n * 2, testMap)).toEqual(new Map([['a', 2], ['b', 4]]));
    });
    test('with Set', () => {
      expect(map(n => n * 2, testSet)).toBe(undefined);
    });
    test('with string', () => {
      expect(map(n => n * 2, '12')).toBe(undefined);
    });
    test('with arrayLike', () => {
      expect(map(n => n * 2, arrLikeObj)).toEqual({ 0: 2, 1: 4 });
    });
    test('with function', () => {
      expect(typeof map(n => n * 2, a => a + 1)).toBe('function');
      expect(map(n => n * 2, a => a + 1)(2)).toBe(6);
    });
    test('with promise', async () => {
      const result = await map(n => n * 2, new Promise(res => res(2)));
      expect(result).toBe(4);
    });
  });

  describe('filter', () => {
    test('with array', () => {
      expect(filter(n => n < 2, testArr)).toEqual([1]);
    });
    test('with object', () => {
      expect(filter(n => n < 2, testObj)).toEqual({ a: 1 });
    });
    test('with Map', () => {
      expect(filter(n => n < 2, testMap)).toEqual(new Map([['a', 1]]));
    });
    test('with Set', () => {
      expect(filter(n => n < 2, testSet)).toEqual(new Set([1]));
    });
    test('with arrayLike', () => {
      expect(filter(n => n < 2, arrLikeObj)).toEqual({ 0: 1 });
    });
  });
});
