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
  - [**.last**()](#array) ⇒ `any`
  - [**.includes**(item: any)](#array) ⇒ `Boolean`
  - [**.find**(item: any, predicate: function)](#array) ⇒ `any`
  - [**.filter**(callbackfn: function)](#array) ⇒ `new Array`
  - [**.addIfNotExists**(item: any, null | String | predicate)](#array) ⇒ `executed item: any`
  - [**.remove**(item: any | predicate: function)](#array) ⇒ `executed item: any`
- _static_
  - [**.concatNotNull**(...arrays: [] | null)](#array) ⇒ `new Array`

### String

- _instance_
  - [**.equal**(value: String)](#string) ⇒ `Boolean`
  - [**.fromCamelCase**()](#string) ⇒ `new String`
  - [**.toCamelCase**()](#string) ⇒ `new String`
  - [**.toLowerCaseFirst**()](#string) ⇒ `new String`
  - [**.toUpperCaseFirst**()](#string) ⇒ `new String`

### Date

- _instance_
  - [**.equal**(value: Date)](#date) ⇒ `Boolean`
  - [**.equalDates**(value: Date)](#date) ⇒ `Boolean`
  - [**.addDays**(value: Number)](#date) ⇒ `Date`
  - [**.addMonths**(value: Number)](#date) ⇒ `Date`
  - [**.addYears**(value: Number)](#date) ⇒ `Date`
  - [**.resetTime**()](#date) ⇒ `Date`
  - [**.resetUTCTime**()](#date) ⇒ `Date`
- _static_
  - [**.tryParseJSON**(value: String)](#date) ⇒ `new Date or same String`
  - [**.compareByDate**(v1: Date, v2: Date)](#date) ⇒ `-1, 0 or 1`
  - [**.UTCFromValues**(year: Number, month: Number, date: Number)](#date) ⇒ `new Date`
  - [**.UTCFromDate**(Date)](#date) ⇒ `new Date`

### Math

- [Math **.randomInt**(min?: Number, max?: Number)](#math) ⇒ `Int`

#### Math.Convert

- [Math.Convert **.kmToMiles**(km: Number)](#mathconvert) ⇒ `Float`
- [Math.Convert **.milesToKm**(miles: Number)](#mathconvert) ⇒ `Float`
- [Math.Convert **.degToRad**(value: Number)](#mathconvert) ⇒ `Float`

#### Math.Coord

- [Math.Coord **.distanceBetween**(lat1: Number, lng1: Number, lat2: Number, lng2: Number)](#mathcoord) ⇒ `Meters: Number`
- [Math.Coord **.addToLat**(lat: Number, km: Number)](#mathcoord) ⇒ `Latitude: Float`
- [Math.Coord **.addToLng**(lng: Number, lat: Number, km: Number)](#mathcoord) ⇒ `Longitude: Float`

### Object

- [Object **.equal**(v1: any, v2: any, options?: [EqualOptions](equaloptions))](#objectequal) ⇒ `Boolean`

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
options.onlyOwnProperties = true;
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
| onlyOwnProperties | Boolean                            | true    | true if we need to use obj.hasOwnProperty(key)                                                                                                                                                  |
| showFalseReason   | Boolean or Function(msg,v1,v2,key) | false   | true if we need to add to options.falseReason message if equal is false </br>                                                                       function if we need to use own report-logic |
| falseReason       | String - output                    |         | will be added message if showFalseReason != true and equal is false                                                                                                                             |