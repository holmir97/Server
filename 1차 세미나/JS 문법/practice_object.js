const empty = {};

// console.log("typeof empty:" + typeof empty);
// console.log("empty:" + empty);
// console.log(empty);

// 객체는 자유로운 타입 입력이 가능하다.
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    console.log(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    console.log("Hi! I'm " + this.name[0] + ".");
  },
};

// JSON = 객체 = Object

// console.log("typeof person:" + typeof person);
// console.log("person:" + person);
// console.log("person:" + JSON.stringify(person));
// console.log(person);

// // dot을 이용하여 객체에 접근
// // dot notation
// console.log("[Dot Notation]");
// console.log("person.name:" + person.name);
// console.log("person.age:" + person.age);
// console.log("person.gender:" + person.gender);
// console.log("person.interests:" + person.interests);
// person.bio();
// person.greeting();

// // brachket을 이용하여 객체에 접근(=dot)
// // bracket notation
// console.log("[Bracket Notation]");
// console.log("person[name]:" + person["name"]);
// console.log("person[age]:" + person["age"]);
// console.log("person[gender]:" + person["gender"]);
// console.log("person[interests]:" + person["interests"]);
// person["bio"]();
// person["greeting"]();


// // 위와 다르게 name 필드가 배열 -> 문자열로 바뀌었어도 바뀐다.
// // 타입스크립트 필요성
// // update object
// console.log("[Update Object]");
// person.name = "고성용";
// person.age = 25;
// person.bark = function () {
//   console.log("bark, bark!!");
// };
// console.log(person);
// person.bark();

// // USE 백틱
// const num1 = 1;
// const num2 = 2;
// const result = 3;
// const String1 = `${num1} 더하기 ${num2}는 '${result}'`;
// console.log(string1);

// // 화살표 함수
// function add(a, b) { return a + b };
// const add2 = ((a, b) => {a + b}); // 화살표 함수

// // 비구조화 할당
// // 필요한 원소만 가져올 수 있다.
// let person2 = {
//     name : "Jane", 
//     age: 22
//   };
// let{name,age} = person2;
// console.log(person2);
