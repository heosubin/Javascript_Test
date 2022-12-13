// 자바스크립트는 카멜 표기법을 주로 사용
//const 상수 (바뀌지 않는 값)  let (바꿀수 있는 값)  var (어떠한 규칙도 없는 값) boolean (참과 가젓의 값)
// const a = 10;
// const b = 2;

// let myName = "subin";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);

// console.log("helo " + myName);

// myName = "Mr.Hea";

// console.log("Your new name " + myName);


// null 값이 존재하지 않을 때 (자연적으로 발생하지 않는다.)   undefined 변수는 존재하는데 값을 정의하지 않았을때
// null은 값 undefined은 타입
// const amIFat = null;
// console.log(amIFat);

// 컴퓨터는 0부터 카운트 한다.

// const mon ="mon";
// const tue ="tue";
// const wed ="wed";
// const thu ="thu";
// const fri ="fri";
// const sat ="sat";
// const sun ="sun";

// const daysOfWeek = [mon , tue , wed , thu , fri , sat];

// const nonsense = [1, 2, "hello", false, null, true, undefined, "subin"];

// // Get Item from Array 
// console.log(daysOfWeek);

// // Add one more day to the array 
// // push 배열의 끝에 데이터를 추가한다 
// daysOfWeek.push(sun);

// console.log(daysOfWeek);

// const apple =  "apple";
// const potato = "potato";

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("banana");


// const playerName="subin";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat ="little bit";

// const player1 = ["subin",121212, false, "little bit"];


// // Object 키와 값으로 구분
// const player2 = {
//     name : "subin",
//     points : 10,
//     fat : true,
// };

// console.log(player2);
// console.log(player2.name);

// player2.name ="subinHeo";
// console.log(player2.name);

// player2.lastName ="potato";
// console.log(player2);

// player2.points = player2.points + 15;
// console.log(player2.points);

// function 코드를 캡슐화해서 실행을 여러번 할수 있게 해줌
// function sayHello -> 인수 (변수){}
// function sayHello(name, age) {
//     console.log("Hello my name is " + name + " and I'm " + age);
// }

// sayHello("subin", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// // NaN NOT and Number
// function plus(a, b) {
//     console.log(a + b);
// }

// plus(8, 60);


// function divide(a,b){
//     console.log(a / b);
// }

// divide(98, 20);


// const player = {
//     name : "subin",
//     sayHello: function(otherPerson){
//         console.log("hello " + otherPerson + " nice to meet you");
//     }
// };

// console.log(player.name);
// player.sayHello("lynn");
// player.sayHello("subin");

// 숙제 문제 
// const numberA = 5;
// const numberB = 2;

// const later = {
//     add: function(a,b){
//         alert(a + b);
//     },
//     minus: function(a,b){
//         alert(a - b);
//     },
//     divide: function(a,b){
//         alert(a / b);
//     }, 
//     powerOf: function(a,b){
//         alert(a ** b);
//     }
// };

// later.add(numberA,numberB);
// later.minus(numberA,numberB);
// later.divide(numberA,numberB);
// later.powerOf(numberA,numberB);


const age = 96;
function calculateKrAge(ageOfForeIgner){
    return ageOfForeIgner + 2;           // 96 + 2 값을 호출 한다  즉 작업의 결과값을 반환해 준다
}

const krAge = calculateKrAge(age);

console.log(krAge);

// 답의 변환 
const numberA = 5;
const numberB = 2;

const later = {
    add: function(a,b){
        console.log(a + b);             // undeifind로 반환
        return a + b;                   // 7로 반환 
    },
    minus: function(a,b){
        return a - b;
    },
    divide: function(a,b){
        return a / b;
    }, 
    powerOf: function(a,b){
        return a ** b;
    }
};



const addA = later.add(numberA,numberB);
const minusA = later.minus(addA,numberB);
const divideA = later.divide(numberA,minusA);
const powerOfA = later.powerOf(divideA,numberB);

console.log(addA);
console.log(minusA);
console.log(divideA);
console.log(powerOfA);

// console.log은 그저 보여주기 일뿐 값을 가져올수는 없다.
// console.log은 결과를 보여주기 위해 사용  값의 정의가 되지 않기 때문에  return을 사용 
// return 시 그 이후 값은 실행하지 않는다. 





