const genShin = [
    {
        name : "아야토",
        property : "물"
    },
    {
        name : "아야카",
        property : "얼음"
    },
    {
        name : "라이덴",
        property : "번개"
    },
    {
        name : "벤티",
        property : "바람"
    },
    {
        name : "나히다",
        property : "풀"
    },
    {
        name : "호두",
        property : "불"
    },
    {
        name : "종려",
        property : "바위"
    }
];

const nameText = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const numberChk = genShin.length;
const number = Math.floor(Math.random() * numberChk);

const genShinImpect = genShin[number];
nameText.innerText = genShinImpect.name;
author.innerText = genShinImpect.property;

console.log(number);

//Math.random() 랜덤 숫자 출력  Math.ceil() 숫자 올림 Math.floor() 숫자 내림 Math.round() 숫자 반올림
