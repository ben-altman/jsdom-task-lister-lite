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

  const deleteButton = document.createElement('button')
  deleteButton.innerText = ("X");
  deleteButton.addEventListener("click", e => {
    // e.target.parentNode.remove(); // or do below:
    li.remove();
  })

  li.appendChild(deleteButton);

  tasks.appendChild(li);

  event.target.reset();
};