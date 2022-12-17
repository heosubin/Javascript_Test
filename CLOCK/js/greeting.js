// const loginForm = document.getElementById("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if (username ===""){
//         alert("Please write your name");
//     } else if (username.lenght > 15) {
//         alert("Your name is too lang");
//     }
//     console.log("click");
// };

// loginButton.addEventListener("click",onLoginBtnClick);



const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector(".link");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USRENAME_KEY ="username";

function onLoginSubmit(event){
    event.preventDefault();                  // 브라우저가 하려는 동작을 허락하지 않는다 

    const username = loginInput.value;
    localStorage.setItem(USRENAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting.innerText = "Hello" + username;                // 둘중 하나의 방식 선택 가능하면 아래방법을 택할 것 
    paintGreetings(username);

};

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USRENAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}


// function onLoginClick(event){
//     event.preventDefault();                 // 브라우저가 하려는 동작을 허락하지 않는다 
//     alert("clicked");
// };
// link.addEventListener("click",onLoginClick);






//local Storage 사용 

// setItme("변수",저장값)  - 스토리지에 저장  removeItem("변수") - 스토리지에 제거  getItem("변수") - 스토리지에서 불러오기 