# ytech-js-extensions

Simple js extensions for [Array](#array), [String](#string), [Date](#date), [Math](#math) and [Object](#object)

[![npm version](https://img.shields.io/npm/v/ytech-js-extensions.svg?style=flat-square)](https://www.npmjs.com/package/ytech-js-extensions)
[![code coverage](https://coveralls.io/repos/github/Yegorich555/ytech-js-extensions/badge.svg?style=flat-square)](https://coveralls.io/github/Yegorich555/ytech-js-extensions)
[![install size](https://packagephobia.now.sh/badge?p=ytech-js-extensions)](https://packagephobia.now.sh/result?p=ytech-js-extensions)
[![npm downloads](https://img.shields.io/npm/dm/ytech-js-extensions.svg?style=flat-square)](http://npm-stat.com/charts.html?package=ytech-js-extensions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- Lightweight
- ES5 support
- Available importing of each function (not only prototype assignments which are used by default)

## Installing

Using npm:

```npm
npm install ytech-js-extensions
```

## Example

Using with default import

```js
import 'ytech-js-extensions'; //ES6 way for import

// Remove item from array
var arr = [{id: 1}, {id: 2}, {id: 3}];
var removedItem = arr.remove(function (item) {
   return item.id == 2
  })
console.log(arr, removedItem);

// Compare dates without time
var date1 = new Date(2018,1,1, 12,23,16)
var date2 = new Date(2018,1,1, 12,24,19)
console.log(Date.compareByDate(date1, date2))

// Compare strings with ignoring case
var str1 = 'test'
var str2 = 'tEsT'
console.log(str1.equal(str2))

```

Using with partial import

```js
import arrayRemove from 'ytech-js-extensions/lib/array/remove';

// Remove item from array
class MyArray extends Array {} //ES6 way for inherit
MyArray.prototype.remove = arrayRemove;

var arr = new MyArray({id: 11}, {id: 12}, {id: 13});
var removedItem = arr.remove(function (item) {
   return item.id == 12
  })
console.log(arr, removedItem);

```

### Array

- _instance_
  - [**.last**()](#array) ⇒ `any - last item from array (undefined if array is empty)`
  - [**.includes**(item: any)](#array) ⇒ `Boolean - polyfill if ES6 .includes() is undefined`
  - [**.find**(item: any, predicate: function)](#array) ⇒ `any - polyfill if ES6 .find() is undefined`
  - [**.filter**(callbackfn: function)](#array) ⇒ `new Array - polyfill if ES6 .filter() is undefined`
  - [**.addIfNotExists**(item: any, null | String | predicate)](#array) ⇒ `executed item: any - add item if it doesn't exist. The second argument => Null - for primitives, string - search by name, function - predicate like in a .filter()`
  - [**.remove**(item: any | predicate: function)](#array) ⇒ `executed item: any - remove item by predicate for searching or by item (for direct comparing)`
- _static_
  - [**.concatNotNull**(...arrays: [] | null)](#array) ⇒ `new Array - concatinate arrays exlcuding null-arrays => Array.concatNotNull([1,2], null)`

### String

- _instance_
  - [**.equal**(value: String)](#string) ⇒ `Boolean - compare with ignoring case`
  - [**.fromCamelCase**()](#string) ⇒ `new String - transform from camelCase: 'myCamelCaseString' to 'My Camel Case String'`
  - [**.toCamelCase**()](#string) ⇒ `new String - split string by spaces and join to camelCase: 'My camel Case string' to 'myCamelCaseString'`
  - [**.toLowerCaseFirst**()](#string) ⇒ `new String - set to lower case first char`
  - [**.toUpperCaseFirst**()](#string) ⇒ `new String - set to upper case first char`

### Date

- _instance_
  - [**.equal**(value: Date)](#date) ⇒ `Boolean - compare by values`
  - [**.equalDates**(value: Date)](#date) ⇒ `Boolean - compare without time-values`
  - [**.addDays**(value: Number)](#date) ⇒ `Date`
  - [**.addMonths**(value: Number)](#date) ⇒ `Date`
  - [**.addYears**(value: Number)](#date) ⇒ `Date`
  - [**.resetTime**()](#date) ⇒ `Date`
  - [**.resetUTCTime**()](#date) ⇒ `Date`
- _static_
  - [**.tryParseJSON**(value: String)](#date) ⇒ `new Date or same String - try parse Date from String-Date-ISO-Format`
  - [**.compareByDate**(v1: Date, v2: Date)](#date) ⇒ `-1, 0 or 1 - compare without time-value for sort functions`
  - [**.UTCFromValues**(year: Number, month: Number, date: Number)](#date) ⇒ `new Date - create UTC date`
  - [**.UTCFromDate**(Date)](#date) ⇒ `new Date - create UTC date`

### Math

- [Math **.randomInt**(min?: Number, max?: Number)](#math) ⇒ `Int - generate random int between values`

#### Math.Convert

- [Math.Convert **.kmToMiles**(km: Number)](#mathconvert) ⇒ `Float - convert kilometers to miles`
- [Math.Convert **.milesToKm**(miles: Number)](#mathconvert) ⇒ `Float - convert miles to kilometers`
- [Math.Convert **.degToRad**(value: Number)](#mathconvert) ⇒ `Float - convert degrees to radians`

#### Math.Coord

- [Math.Coord **.distanceBetween**(lat1: Number, lng1: Number, lat2: Number, lng2: Number)](#mathcoord) ⇒ `Kilometers: Number - distance between 2 coordinates`
- [Math.Coord **.addToLat**(lat: Number, km: Number)](#mathcoord) ⇒ `Latitude: Float - add distance to latitude`
- [Math.Coord **.addToLng**(lng: Number, lat: Number, km: Number)](#mathcoord) ⇒ `Longitude: Float - add distance to longitude`

### Object

- [Object **.equal**(v1: any, v2: any, options?: [EqualOptions](equaloptions))](#objectequal) ⇒ `Boolean - recursively compare 2 values with ignoring null and by setted EqaulOptions`

### Object.equal

```js
import 'ytech-js-extensions'; //ES6 way for import
import EqualOptions from 'ytech-js-extensions/object/equal/equalOptions.js';

// Compare equals
v1 = { nested: { id: 1 } }
v2 = { nested: { id: 1 }, fnc: function() {} }
console.log(Object.equal(v1, v2)) //expected true

//Compare with options
var options = new EqualOptions();
options.ignoreEmptyArrays = true;
options.ignoreFunctions = false; //we setted ignoreFunction to false
options.checkKeysLength = false;
options.showFalseReason = true; //or function(message, v1, v2, key) { bla-bla; return message}
console.log(Object.equal(v1, v2, options), options.falseReason) //expected false and falseReason as string message

```

#### EqualOptions

| Param             | Type                               | Default | Description                                                                                                                                                                                     |
| ----------------- | ---------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| checkKeysLength   | Boolean                            | false   | true => restrict comparing by properties: equal({}, {v:null}) === false. </br> True will ignore ignoreFunctions and ignoreEmptyArrays if Object.keys.length are different                       |
| ignoreEmptyArrays | Boolean                            | true    | true => equal({}, {arr:[]}) === true                                                                                                                                                            |
| ignoreFunctions   | Boolean                            | true    | true => equal({fnc:function(){return 's'} }, {fnc:function(){return 'b'} }) === true                                                                                                            |
| showFalseReason   | Boolean or Function(msg,v1,v2,key) | false   | true if we need to add to options.falseReason message if equal is false </br>                                                                       function if we need to use own report-logic |
| falseReason       | String - output                    |         | will be added message if showFalseReason != true and equal is false                                                                                                                             |