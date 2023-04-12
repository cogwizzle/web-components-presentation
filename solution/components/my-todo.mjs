const liTemplate = document.createElement('template')
liTemplate.innerHTML = `
<li>
  <span></span>
  <button type="button">Remove</button>
</li>
`

class MyTodo extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.taskList = []
    this.render()
  }

  connectedCallback() {
    this.shadowRoot.querySelector('form').addEventListener('submit', this.addTask.bind(this))
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('form').removeEventListener('submit', this.addTask.bind(this))
  }

  addTask(e) {
    e.preventDefault()
    const list = this.shadowRoot.querySelector('ul')
    const listItem = template.content.cloneNode(true)
    listItem.querySelector('span').textContent = e.target.task.value
    listItem.querySelector('button').addEventListener('click', this.removeTask.bind(this))
    list.appendChild(listItem)
  }

  removeTask(e) {
    this.taskList.splice(e.target.key, 1)
    const parent = e.target.parentNode
    parent.parentNode.removeChild(parent)
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          border: 1px solid black;
        }
      </style>
      <form>
        <input type="text" name="task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        ${this.taskList.map((task, index) => `<li key="${index}">${task}<button type="button">Remove</button></li>`).join('')}
      </ul>
    `
  }
}

if (!customElements.get('my-todo')) {
  customElements.define('my-todo', MyTodo)
}
