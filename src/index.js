const form = document.getElementById("create-task-form")
const list = document.getElementById("list");
const tasks = document.getElementById("tasks");
// let newTask = document.getElementById("new-task-description")

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener('submit', addListItem)
});

function addListItem(event) {
  event.preventDefault();
  const newTask = event.target['new-task-description'].value

  let li = document.createElement('li')
  li.innerText = newTask;
  tasks.appendChild(li);
  event.target.reset();
};