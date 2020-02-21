const todoListClass = 'todo-list'
const btnDeleteClass = 'btn-delete-task'

const addTodoForm = document.querySelector('#add-todo-form')
const list = document.querySelector(`.${todoListClass}`)
const btnDelete = document.querySelector(`.${btnDeleteClass}`)

const generateTaskTemplate = task => {
  const item = `
  <li>
    <input type="checkbox">${task}
    <button class="${btnDeleteClass}"></button>
  </li>
  `
  return item
}

list.innerHTML = ''

addTodoForm.addEventListener('submit', event => {
  event.preventDefault()

  const task = addTodoForm['add-todo-input'].value.trim()
  addTodoForm.reset()

  if(!task) return

  const todo = generateTaskTemplate(task)
  list.innerHTML += todo
})

list.addEventListener('click', event => {
  if (event.target.classList.contains(btnDeleteClass)) {
      event.target.parentElement.remove()
  }
})
