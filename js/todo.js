const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "saveToDosKey";

let saveToDosList = []; // 이전 todolist  update 하기 위함

// 시작 function
function handleToDoSubmit(event) {
  event.preventDefault();
  const saveInputTodo = toDoInput.value;
  toDoInput.value = "";
  saveToDosList.push(saveInputTodo);
  paintToDo(saveInputTodo);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

// list 만드는 function
function paintToDo(argumentNewTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = argumentNewTodo;
  const button = document.createElement("button");
  button.innerText = "👌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// list data 저장 function
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(saveToDosList));
}

// delete 하는 function
function deleteToDo(argumentEvent) {
  const findDeletToDoLi = argumentEvent.target.parentElement;
  findDeletToDoLi.remove();
}

// array 추출
const saveToDosArray = localStorage.getItem(TODOS_KEY);

if (saveToDosArray) {
  const parsedToDOs = JSON.parse(saveToDosArray);
  //   parsedToDOs.forEach((eachItem) => console.log("todolist", eachItem));
  saveToDosList = parsedToDOs; // update할 값을 저장 - line7 과 관련
  parsedToDOs.forEach(paintToDo); // 내가 가진 array item 각각을 paintToDO function엔 넣어주면 된다
}
