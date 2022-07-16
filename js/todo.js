const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

toDoForm.addEventListener("submit", handleToDoSubmit);

function handleToDoSubmit(event) {
  event.preventDefault();
  const saveInputTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(saveInputTodo);
}

function paintToDo(argument) {
  const li = document.createElement("li");
  const span = document.createElement("span"); // li > span 하기 위해서
  li.appendChild(span); // span 먼저 넣고
  span.innerText = argument;
  toDoList.appendChild(li); // ul > li 넣기
}
