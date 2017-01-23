'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.name = name;
exports.sex = sex;
exports.age = age;
var v = 1;
var b = 1;
var x = 1;
var y = 2;
var c = 1;
var a = 222;
var xxx = 22;
var dd = 1;

function name(params) {
    return 'hutao';
}

function sex(params) {
    return '男';
}

function age(params) {
    return 23;
}

function sayHello(h) {
    return h();
}
sayHello(function(h) {
    return h + '：完了';
});