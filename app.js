document.querySelector("#inputan").addEventListener("input", function(e) {
  if (document.getElementById("inputan").value == "") {
    document.getElementById("addtodo").disabled = true;
  } else {
    document.getElementById("addtodo").disabled = false;
  }
});

let todos = getTodos();
const filters = {
  searchText: "",
  hideCompleted: false
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function(e) {
    filters.hideCompleted = e.target.checked;
    console.log(e.target.checked);
    renderTodos(todos, filters);
  });

document.querySelector("#new-todo").addEventListener("submit", function(e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
    completed: false
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.text.value = "";
});

// remove local storage
// localStorage.removeItem('todos')
