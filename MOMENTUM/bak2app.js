// innerHTML innerText 정의 및 차이점 확인하기 


// const title = document.getElementById("title");                 // 가장 많이 사용하는 element 항목을 가져올때 사용 
// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);
// cosole.dir(title);                                       // 이 element에서 사용가능한 함수 및 항목을 조회한다. 


// const hellos = document.getElementsByClassName("hello");



// console.log(hellos);


// const h1 = document.getElementsByTagName("h1"); // 해당 태그 element 항목을 추출한다 

// const qs = document.querySelector(".hello h1");     
// // 다수의 항목이 존재할 경우 할경우 첫번째 element항목을 가져온다

// const qss = document.querySelectorAll(".hello h1"); 
// // 해당 조건에 부합하는 모든 ELement 항목을 다 가져온다 

// qs.innerText = 'hello';
// console.log(qs);


//event 란 


// function handleTitleClick(){
//     qs.style.color = "blue";
//     console.log("title was clicked");
// };

// function handleMouseEnter(){
//     qs.innerText = "mouse is here";
// };

// function handleMouseLeave() {
//     qs.innerText = "mouse is gone";
// };

//     // 두가지 방식으로 이벤트실행가능 
//  //qs.addEventListener("click",handleTitleClick);          //hello를 클릭시 handleTitleClick 함수가 실행된다 . 어떤 이벤트를 어떻게 실행할지 어떤 함수를 실행시킬지 정해야한다.
//  //qs.onclick = handleTitleClick; 

// qs.addEventListener("mouseenter",handleMouseEnter);    // 마우스를 해당 element에 닿았을경우 실행
// qs.addEventListener("mouseleave",handleMouseLeave);     // 마우스 포인트가 해당 범위를 벗어났을 경우 

// //event 넘겨주는 방법 addEventListener를 사용하여 실행 또는 on을 사용하여 실행

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";       
// }
// function handleWindowCopy(){
//     alert("copier");
// }

// function handleWindowOffline(){
//     alert("offline");
// }

// function handleWindowOffline(){
//     alert("online");
// }

// window.addEventListener("resize",handleWindowResize);   // 창사이즈를 줄일때 사용
// window.addEventListener("copy",handleWindowCopy);           // 복사 시 사용

// window.addEventListener("offline", handleWindowOffline);            // 인터넷 종료시 실행
// window.addEventListener("online", handleWindowOnline);              // 인터넷 연결시 실행 



// function handleTitleClick(){
//     const currentColor = qs.style.color;
//     let newColor;
//     if(currentColor === "red") {              //qs element 스타일이 red일경우 
//         newColor = "yellow";              //qs element 스타일을 yellow로 변경 
//     } else {                                    //qs element 스타일이 red dkslfruddn경우 
//         newColor = "red";                 //qs element 스타일을 red로 변경 
//     }
//     qs.style.color = newColor;             // qs element 스타일을 newColor 변수 값으로 변경 
//     console.log(qs.style.color);
// };


// qs.addEventListener("click",handleTitleClick);  



//클래스 네임을 추가하고 제거
// const qs = document.querySelector("div.hello:first-child h1");  
// function handleTitleClick(){
//     const clickClass = "clicked sexy-font";                   // 변수 정의에 실수를 줄이기 위해 사용 
//     if(qs.className ===clickClass){
//         qs.className = "";
//     } else {
//         qs.className = clickClass;
//     }
// };



// qs.addEventListener("click",handleTitleClick);  



// classList 정의에 대해 알기 
// const qs = document.querySelector("div.hello:first-child h1");  
// function handleTitleClick(){
//     const clickClass = "clicked";                   // 변수 정의에 실수를 줄이기 위해 사용 
//     if(qs.classList.contains(clickClass)){
//         qs.classList.remove(clickClass);
//     } else {
//         qs.classList.add(clickClass);
//     }
// };

// qs.addEventListener("click",handleTitleClick);  


// 위의 코드와 똑같은 기능 역할을 한다 
//toggle이란 해당 classList안에 clicked 클래스가 있는지 확인하고 있다면 제거 없다면 추가해 준다  
const qs = document.querySelector("div.hello:first-child h1");  
function handleTitleClick(){
    h1.classList.toggle("clicked");
};

qs.addEventListener("click",handleTitleClick);  