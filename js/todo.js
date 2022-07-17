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
  // todolist object
  const newSaveInputTodoObj = {
    text: saveInputTodo,
    id: Date.now(),
  };
  // saved array
  saveToDosList.push(newSaveInputTodoObj); //push data to object
  paintToDo(newSaveInputTodoObj); // html에도 object 형식으로 올림
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

// list 만드는 function
function paintToDo(argumentNewTodo) {
  const li = document.createElement("li");
  //   console.dir(li);
  li.id = argumentNewTodo.id; // object의 id를 이용하기 위함
  const span = document.createElement("span");
  span.innerText = argumentNewTodo.text; // object 중에서 text만 받을 것
  const button = document.createElement("button");
  button.innerText = "□";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}

// list data 저장 function
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(saveToDosList));
}

// delete 하는 function
function deleteToDo(argumentEvent) {
  const findDeletToDoLi = argumentEvent.target.parentElement;
  // Delete하려고 click 한 것에 대한 list의 object에 관한 정보 가짐
  findDeletToDoLi.remove();
  saveToDosList = saveToDosList.filter(
    (item) => item.id !== parseInt(findDeletToDoLi.id)
  );
  saveToDos(); // data를 지우고 난 후에 다시 saveToDos로 list up 해야함
}

// array 추출
const saveToDosArray = localStorage.getItem(TODOS_KEY);

if (saveToDosArray) {
  const parsedToDOs = JSON.parse(saveToDosArray);
  saveToDosList = parsedToDOs; // update할 값을 저장 - line7 과 관련
  parsedToDOs.forEach(paintToDo); //  .forEach는 paintToDo 자체를 돌리는거라서 이제는 object를 인식한다
}

function Filter() {}
