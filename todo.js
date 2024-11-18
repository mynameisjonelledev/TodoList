const todoList = [];

renderTodoList();
isFooter ();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const {name, dueDate} = todoObject;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="deleteTodo(${i},1);
    renderTodoList();">
    Delete</button>`

    todoListHTML += html;
  }

  document.querySelector('.todo-output').innerHTML = todoListHTML;
}

function addTodo () {
  const inputElement = document.querySelector('.todo-text');
  const dateElement = document.querySelector('.todo-date');

  const name = inputElement.value;
  const dueDate = dateElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}

function onKeyDownInput (event) {
  if (event.key === 'Enter') {
    addTodo ();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

/* function isFooter () {
  const footerElement = document.querySelector('.footer-div');

  const inputElement = document.querySelector('.js-todo-text');

  let footerHTML = '';

  const htmlFooter = `
  <div>Thanks for visiting!</div>
  <div>Made with love by Jonelle</div>`

  if (!inputElement === null) {
    footerElement.innerHTML = htmlFooter;
    
    return;
  }
  
} */ 


