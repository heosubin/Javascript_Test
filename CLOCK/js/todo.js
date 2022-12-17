const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const TODOS_KEY = "toDos";

let toDos =[];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));            //JSON.stringify('변수') json string 형식으로 변환 시켜준다 JSON.parse 스트링 형식을 object 형식으로 변환해 준다.
};

function deleteToDo(event){
    const li = event.target.parentElement;                 // 현재 이벤트실행된 부모 element를 찾는 코드            String으로 출력
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));        // 현재 실행된 id객체가 아닐경우 출력
    console.log("Delete click");
    saveToDos();
};

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "◀";
    span.innerText = newTodo.text;
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);  
    toDoList.appendChild(li);
};

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};


toDoForm.addEventListener("submit",handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;

    // parsedToDos.forEach(setNode);               
    // parsedToDos.forEach((item) => console.log(`hi ${item}`));               // item에 대한 함수 호출을 간결하게 표현할수가 있다.
       parsedToDos.forEach(paintToDo);  
};

function setNode(item){                 // 자바 스크립트는 item을 그냥 제공해주면서 해당 배열의 값을 찾을수 있다. 
    console.log(`hi ${item}`);
}


//.filter 반복문을 돌려 true일경우 return 한다 