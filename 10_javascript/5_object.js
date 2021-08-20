//4. 객체

// 객체 선언
let a = {}; //빈 객체
let b = new Object();
console.log(typeof a);

// 객체 : 속성, 메소드 추가
// object.속성명, object["속성명"]
let Person = {};
Person.age = 19;
Person["name"] = "한상진";

console.log("%d, %s", Person["age"], Person.name);

// key: value
let Person2 = {
    age: 10,
    name: "펭수"
};

console.log("%d, %s", Person2.age, Person2["name"]);

let Person3 = Person2;

Person3.print = function () {
    console.log("저는 %d살 %s입니다.", this.age, this.name);
}

Person3.print();

let Person4 = {
    age: 10,
    name: "펭수",
    print: function() {
        console.log("저는 %d살 %s입니다", this.age, this.name);
    }
}
Person4.print();

//Friends 배열 -> 객체 두개 (no, name)
let Friends = [{1: 1,name: "a"},{1:2, name:"b"}];
console.log(Friends);
console.log(typeof Friends[0]);
console.log(typeof Friends[1]["name"]);

let grades = {
    data: {
        kor: 100,
        mat: 100,
        eng: 90
    },
    print/*: function */() {
        for (subject in this.data) {
            console.log(subject + " : " + this.data[subject])
        }   
    }
};
grades.print();

//수학 점수s
console.log(grades.data.mat);
console.log(grades["data"]["mat"]);

let id = 1;
let name = "홍길동";
//key: value
let obj = {
    id,
    name
};

console.log("%d, %s", obj.id, obj.name);