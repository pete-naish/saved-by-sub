// @ts-nocheck
import { map, pick, groupBy } from 'lodash';
import FullData from './full-data.json';
import { POST_PROPS } from './constants';

const items = map(FullData, ({ data }) => pick(data, POST_PROPS));

const groupBySub = groupBy(items, item => item.subreddit);

const sortByKey = (a, b) => {
  const aUp = a.toUpperCase();
  const bUp = b.toUpperCase();

  if (aUp < bUp) return -1;
  if (aUp > bUp) return 1;
  return 0;
}

const sortObjectKeys = obj =>
  Object
    .keys(obj)
    .sort(sortByKey)
    .reduce((acc, key) => { acc[key] = obj[key]; return acc }, {});

export default sortObjectKeys(groupBySub);
