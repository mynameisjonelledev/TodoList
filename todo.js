const todoList = JSON.parse(localStorage.getItem('todoList')) ||[]; //✅

renderTodoList();



function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const {name, dueDate} = todoObject;

    const html = `
    <div class="name-div">${name}</div>
    <div class="dueDate-div">${dueDate}</div>
    <button onclick="deleteTodo(${i},1);
    renderTodoList();" 
    class="delete-btn">
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


// Gawa gawa ko lang 'tong code na 'to. Gumagana naman
// Kaso kulang ang functionality.
function surpriseMe () {
  const surpriseElement = document.querySelector('.js-navbar-button, .night-button, .day-button');

  if (surpriseElement.innerHTML === 'Surprise me!') {
    surpriseElement.classList.remove('js-navbar-button');
    surpriseElement.classList.add('night-button');
    surpriseElement.innerHTML = 'Night';
    console.log('Changed to Night');

  } else if (surpriseElement.innerHTML === 'Night') {
    surpriseElement.classList.remove('night-button');
    surpriseElement.classList.add('day-button');
    surpriseElement.innerHTML = 'Day';
    console.log('Changed to Day');

  }  else if (surpriseElement.innerHTML === 'Day') {
    surpriseElement.classList.remove('day-button');
    surpriseElement.classList.add('js-navbar-button');
    surpriseElement.innerHTML = 'Surprise me!';
  }
}





