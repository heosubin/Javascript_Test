const clock = document.querySelector("h2#clock");

// function sayHello(){
//     console.log("Hello");
// }

// setInterval(sayHello, 5000);

function getClock(event){

    const clockTime = new Date();
    const clockHours = String(clockTime.getHours()).padStart(2,'0');
    const clockMinutes = String(clockTime.getMinutes()).padStart(2,'0');
    const clockSecond = String(clockTime.getSeconds()).padStart(2,'0');
    clock.innerText = `${clockHours} : ${clockMinutes} : ${clockSecond}`;
}

setInterval(getClock, 1000);

//setInterval(실행할 함수, 시간);     지정된 시간마다 함수를 실행한다. 

// date.getHours() 시간 


//padStart          "1".padStart(2,"0"); 문자열 길이가 2보다 작을경우 앞에 0을 붙여준다 