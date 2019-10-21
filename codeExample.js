'use strict';

const composition = (pluralty1, pluralty2) => {
  const finalPluralty = {};
  for (const i in pluralty1) {
    for (const j in pluralty2) {
      if (pluralty1[i] === +j) finalPluralty[i] = pluralty2[j];
    }
  }
  return finalPluralty;
};

const usage = composition({ 1: 5,
  8: 4,
  6: 3,
  5: 6 }, { 5: 1,
  4: 8,
  3: 6,
  6: 5 });
console.log(usage);
