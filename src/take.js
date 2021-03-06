import { Iter } from './iter';
import { curry2 } from './curry';
import { isString } from './validation';

// take :: Collection c => Number -> c a -> [a]
// take :: Number -> String -> String
export const take = curry2((num, coll) => {
  if (num === 0 || !coll) return isString(coll) ? '' : [];
  if (isString(coll)) return coll.substr(0, num);
  const result = [];
  const iter = Iter.values(coll);
  let cur = iter.next();
  while (!cur.done) {
    result.push(cur.value);
    if (result.length === num) break;
    cur = iter.next();
  }
  return result;
});

export const takeAll = coll => take(Infinity, coll);
