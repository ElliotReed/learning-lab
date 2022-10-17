import { string, logString } from './declarations.js';

logString(string);

import { list2 } from './list.js';

list2();

import funky from './default.js';

funky()

import kiddo from './as.js';

console.log('kiddo: ', kiddo);

import { cats } from './aggregate.js';
console.log('cats: ', cats);

import * as pets from './library.js';
console.log('pets.bird: ', pets.bird);
pets.logPigs()