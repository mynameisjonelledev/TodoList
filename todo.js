const todoList = JSON.parse(localStorage.getItem('todoList')) ||[{
  name: 'make dinner',
  dueDate: '2024-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2024-12-22'
}]; //✅

renderTodoList();



function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;

    const html = `
    <div class="name-div">${name}</div>
    <div class="dueDate-div">${dueDate}</div>
    <button class="delete-btn js-delete-todo-button">
    Delete</button>`

    todoListHTML += html;
  });

  document.querySelector('.todo-output').innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });

 
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});


function addTodo() {
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

  // Whenever we update the todo list, save in localStorage.
  saveToStorage();
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

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
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


document.body.addEventListener('keydown', (event) => {
  if (event.key) {
    document.querySelector('.footer-greet').innerHTML = `Made with love by <a href="https://mynameisjonelledev.github.io/jonellewebpage/">Jonel Cubio</a>`;
  }
});

document.body.addEventListener('click', () => {
  document.querySelector('.footer-greet').innerHTML = `Made with love by <a href="https://mynameisjonelledev.github.io/jonellewebpage/">Jonel Cubio</a>`;
});

