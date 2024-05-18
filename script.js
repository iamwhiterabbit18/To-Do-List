const item = document.getElementById('item');
const btn = document.getElementById('btn');
const todos = document.getElementById('todos');

btn.addEventListener('click', handleChange);

function handleChange(){
    let li = document.createElement('li');
    li.textContent = item.value;
    todos.append(li);
}