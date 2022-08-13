document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  let form = document.getElementById('create-task-form')

  let dropDown = document.createElement('select')
  form.appendChild(dropDown)
  dropDown.setAttribute('id', 'select-priority')

  let values = ['high', 'medium', 'low']

  for (const val of values) {
      let option = document.createElement('option')
      option.value = val
      option.text = val
      dropDown.appendChild(option)
    }
 
  form.addEventListener('submit', e => { 
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value, e.target["select-priority"].value)
    form.reset() 
  })
});

function buildToDo(todo, priority) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  p.textContent = `${todo} Priority: ${priority} `
  document.querySelector('#list').appendChild(p)
  btn.textContent = 'x'
  p.appendChild(btn)

  function handleDelete(e) {
    e.target.parentNode.remove()
  }
}


