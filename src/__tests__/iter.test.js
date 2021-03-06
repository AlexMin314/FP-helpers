/* eslint no-undef: 0 */
import { Iter } from '../iter';
import { isIterable } from '../validation';

describe('iter functions', () => {
  describe('Iter.values', () => {
    test('should work as expected', () => {
      const iter = Iter.values(testObj);
      expect(isIterable(iter)).toBe(true);
      expect(iter.next()).toEqual({ value: 1, done: false });
      expect(iter.next()).toEqual({ value: 2, done: false });
      expect(iter.next()).toEqual({ value: undefined, done: true });
    });
  });
  describe('Iter.entries', () => {
    test('should work as expected', () => {
      const iter = Iter.entries(testObj);
      expect(isIterable(iter)).toBe(true);
      expect(iter.next()).toEqual({ value: ['a', 1], done: false });
      expect(iter.next()).toEqual({ value: ['b', 2], done: false });
      expect(iter.next()).toEqual({ value: undefined, done: true });
    });
  });
  describe('Iter.keys', () => {
    test('should work as expected', () => {
      const iter = Iter.keys(testObj);
      expect(isIterable(iter)).toBe(true);
      expect(iter.next()).toEqual({ value: 'a', done: false });
      expect(iter.next()).toEqual({ value: 'b', done: false });
      expect(iter.next()).toEqual({ value: undefined, done: true });
    });
    test('should work as expected', () => {
      const iter = Iter.keys(testArr);
      expect(isIterable(iter)).toBe(true);
      expect(iter.next()).toEqual({ value: 0, done: false });
      expect(iter.next()).toEqual({ value: 1, done: false });
      expect(iter.next()).toEqual({ value: undefined, done: true });
    });
  });
});
