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


const playerName="subin";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat ="little bit";

const player1 = ["subin",121212, false, "little bit"];


// Object 키와 값으로 구분
const player2 = {
    name : "subin",
    points : 10,
    fat : true,
};

console.log(player2);
console.log(player2.name);

player2.name ="subinHeo";
console.log(player2.name);

player2.lastName ="potato";
console.log(player2);

player2.points = player2.points + 15;
console.log(player2.points);

