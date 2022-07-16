const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "saveToDosKey";

const saveToDosList = [];

// 시작 function
function handleToDoSubmit(event) {
  event.preventDefault();
  const saveInputTodo = toDoInput.value;
  toDoInput.value = "";
  saveToDosList.push(saveInputTodo); // saveInputTodo를 saveToDosList에 push할 것
  paintToDo(saveInputTodo); // paintToDo function으로 이동
  saveToDos(); // local storage 저장
}
toDoForm.addEventListener("submit", handleToDoSubmit);

// list 만드는 function
function paintToDo(argumentNewTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span"); // li > span 하기 위해서
  span.innerText = argumentNewTodo;
  const button = document.createElement("button");
  button.innerText = "👌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // span 먼저 넣고
  li.appendChild(button);
  toDoList.appendChild(li); // ul > li 넣기
}

// list data 저장 function
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(saveToDosList));
  //  Json 함수를 사용하는 이유
  // 원래 local storage는 array 형태를 저장하지 못하고 저장시 string만 나열된 상태로 나옴
  // saveToDosKey    1,2,3

  // 하지만 array를 이용해야하므로 array 형태의 string으로 우선 만들어줌 <- JSON.stringify()
  // saveToDosKey	["1","2","3"]  -> 이렇게 나오는데 [] 까지 포함한 string 이다.
  // console창 :localStorage.getItem("saveToDosKey") => '["1","2","3"]'

  // 이것의 string을 없애서 array 형태로 나타내게 하는 것이 <- JSON.parse()
  // console창 :JSON.parse(localStorage.getItem("saveToDosKey")) => (3) ['1', '2', '3']
}

// delete 하는 function
function deleteToDo(argumentEvent) {
  const findDeletToDoLi = argumentEvent.target.parentElement;
  findDeletToDoLi.remove();
}

// array 추출
const saveToDosArray = localStorage.getItem(TODOS_KEY);

if (saveToDosArray) {
  // todolist 값이 아무것도 없을 때 방지 하기 위함
  // if(saveToDOsArray) 자체만으로도 만약 saveToDOsArray가 존재할때 밑에껄 실행해줘 의미
  // if(saveToDOsArray !== null)도 같은 말
  const parsedToDOs = JSON.parse(saveToDosArray);
  parsedToDOs.forEach((eachItem) => console.log("todolist", eachItem));
  // .forEach ; array안의 list를 모두 순찰
}
