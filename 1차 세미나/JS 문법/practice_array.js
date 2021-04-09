// let arr1 = [];
// console.log(arr1);
// console.log(typeof arr1);

// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr2);
// console.log(typeof arr2);

// let arr3 = ["고성용", 3, 4.5, false, { name: "yong", part: "server" }];
// console.log(arr3);
// console.log(typeof arr3);

// array 기본 함수
// console.log("[array 기본 함수]");
// let arr = [1, 2, 3, 4, 5];
// let tmp = [];
// // 1. length 함수
// console.log("length: " + arr.length);

// // 2. shift 함수
// arr.unshift(0);
// console.log("after unshift: " + arr);
// arr = [1, 2, 3, 4, 5];
// arr.shift();
// console.log("after shift: " + arr);
// arr = [1, 2, 3, 4, 5];

// // 3. push & pop 함수
// arr.push("new Item");
// console.log("after push: " + arr);
// arr.pop();
// console.log("after pop: " + arr);

// // 4. includes 함수
// console.log("includes(4): " + arr.includes(4));

// // 5. indexOf 함수
// console.log("indexOf: " + arr.indexOf(4));


// // 6. concat 함수
// let arr4 = [1, 2, 3];
// let arr5 = [4, 5];
// console.log("after concat" + arr4.concat(arr5));
// let str1 = "고성용";
// let str2 = " 서버 파트"
// console.log(str1.concat(str2));

// // 7. join 함수
// let arrStation = ["온수", "역곡", "소사", "부천", "중동", "송내"];
// console.log(arrStation.join("->"));

// // 8. reverse 함수
// console.log(arrStation.reverse().join("->"));

// // 9. sort 함수
// console.log(arrStation.sort());

// // 배열 순회
// arr = [1, 2, , 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let idx in arr) {
//   console.log(arr[idx]);
// }

// for (let data of arr) {
//   console.log(data);
// }

// // map 을 이용한 배열 순회
// arr.map((a) => {
//     console.log(a);
// })