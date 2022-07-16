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
  span.innerText = argument;
  const button = document.createElement("button");
  button.innerText = "👌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // span 먼저 넣고
  li.appendChild(button);
  toDoList.appendChild(li); // ul > li 넣기
}

function deleteToDo(argumentEvent) {
  const findDeletToDoLi = argumentEvent.target.parentElement;
  findDeletToDoLi.remove();
}
