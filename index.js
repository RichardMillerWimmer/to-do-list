// console.log("test connect")

document.querySelector('form').addEventListener('submit', addToDo);

function addToDo(event) {
    event.preventDefault()

    const toDoItem = document.createElement('li');
    toDoItem.innerText = document.getElementById('item').value;

    toDoItem.addEventListener('click', completeToDo)

    const buttonX = document.createElement('button');
    buttonX.innerText = 'x';
    buttonX.addEventListener('click', removeToDo);
    toDoItem.append(buttonX);

    const list = document.querySelector('ul');
    list.appendChild(toDoItem);
};

function removeToDo(event) {
    event.target.parentNode.remove()
};

function completeToDo(event) {
    let value = event.target.getAttribute('aria-checked')
    if (value !== true) {
        event.target.setAttribute('aria-checked', 'true')
    } else {
        event.target.setAttribute('aria-checked', 'false')
    }
};