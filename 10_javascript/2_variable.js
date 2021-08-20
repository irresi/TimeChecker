var a = 1;
var b = 2;
console.log(a);
console.log(b);
console.log("%d, %d", a, b);

var s1 = "hello";
var s2 = 'world';

console.log(s1, s2);
console.log("%s %s", s1, s2);

console.log(typeof a);      //number
console.log(typeof s1);     //string
console.log(typeof c);      //boolean
console.log(typeof true);   //undefined
console.log(typeof {});     //object

// 변수 호이스팅(hoisting)
function foo() {
    console.log(c);
    var c = 100;
    console.log(c);

}

foo();

// ES6(2015) let, const 추가
// var : 함수 레벨 스코프
// let : 블록 레벨 스코프
function foo2() {
    if (true) {
        var tmp = 0;
        console.log("1 : "+tmp);
    }
    console.log("2 : "+tmp);
}

foo2();

const d = 10;
d++;
