const todoListClass = 'todo-list'
const btnDeleteClass = 'btn-delete-task'

const addTodoForm = document.querySelector('#add-todo-form')
const todoList = document.querySelector(`.${todoListClass}`)
const btnDelete = document.querySelector(`.${btnDeleteClass}`)
const tbSearch = document.querySelector('#search')

todoList.innerHTML = ''

const generateTaskTemplate = task => {
  const item = `
  <li>
    <input type="checkbox">${task}
    <button class="${btnDeleteClass}"></button>
  </li>
  `
  todoList.innerHTML += item
}

const filterTodos = text => {
  Array.from(todoList.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(text))
    .forEach(todo => todo.classList.add('filtered'))

  Array.from(todoList.children)
    .filter(todo => todo.textContent.toLowerCase().includes(text))
    .forEach(todo => todo.classList.remove('filtered'))
}

// add todo
addTodoForm.addEventListener('submit', event => {
  event.preventDefault()

  const task = addTodoForm['add-todo-input'].value.trim()
  addTodoForm.reset()

  if(!task) return

  generateTaskTemplate(task)
})

// delete todo
todoList.addEventListener('click', event => {
  if (event.target.classList.contains(btnDeleteClass)) {
      event.target.parentElement.remove()
  }
})

// checkbox event
todoList.addEventListener('change', event => {
  if (event.target.checked) {
    event.target.parentElement.classList.add('done')
  } else {
    event.target.parentElement.classList.remove('done')
  }
})

// search
tbSearch.addEventListener('keyup', () => {
  console.log('hello')
  const text = tbSearch.value.trim().toLowerCase()
  filterTodos(text)
})