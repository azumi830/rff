//  計算
(function(){
'use strict';

function $(e) { return document.getElementById(e); }

var q1 = $('q1');
var q2 = $('q2');
var q3 = $('q3-2');


// Q1
var x = 34; // const = 1度しか代入できない変数
var y = -0.25 * x + 14.1;
q1.innerHTML = (y);

// Q2
var radius = 12;
var pi = 3.14;
var area = radius * radius * pi;
q2.innerHTML = (area);

// Q3 - 07 JavaScript で論理を扱う
var age = 26;
var adult = 20;
var result = null;

$('q3-1').innerHTML = age;

if (age >= adult ){
    result = '成年';
} else {
    result = ' 未成年';
}
q3.innerHTML = result;

// Q4

})();
