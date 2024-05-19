
const btn = document.getElementById('btn')
.addEventListener('click', handleChange);
const logBtn = document.getElementById('log-btn')
.addEventListener('click', handleUsername);

const todos = document.getElementById('todos');
const greetingsCont = document.getElementById('greetings-cont');

let tasks = [];

function handleUsername(){
    let username = document.getElementById('username').value;

        if(username){
            let welcome = document.createElement('h1')
            .textContent = "Welcome! " + username;
            greetingsCont.append(welcome);
            document.querySelector('.login-cont')
            .style.display ='none';
            document.querySelector('.todo-cont')
            .style.display ='flex';
            document.getElementById('username').value = '';
        }
        else{
            alert('Please enter username');
        }
}

function handleChange(){
    let newTasks = document.getElementById('new-tasks').value;

        if(newTasks){
            tasks.push({ text: newTasks, completed: false});
            renderList();
        }
        else{
            alert('Please enter a task');
        }
}

function renderList(){
    todos.innerHTML = ''; //rerender new list
    tasks.forEach(task =>{
        let li = document.createElement('li');
        li.textContent = task.text;
        let index = tasks.indexOf(task);
        li.id = index;
        todos.append(li);
        let btnContainer = document.createElement('div');
        btnContainer.className = "added-btns";
        todos.append(btnContainer);
        addBtns(index, btnContainer);
        document.getElementById('new-tasks').value = '';
        console.log(tasks)
    })
}

function addBtns(index, btnContainer){
    let toggle = document.createElement('button');
    let remove = document.createElement('button');

    toggle.textContent = "👍";
    toggle.value = index;
    toggle.className = tasks[index].completed ? 'toggled' : 'untoggle';
    toggle.addEventListener('click', ()=> handleToggle(index));

    remove.textContent = "❌";
    remove.value = index;
    remove.className = 'delete';
    remove.addEventListener('click', ()=> handleDelete(index));

    btnContainer.append(toggle);
    btnContainer.append(remove);

}

function handleToggle(index){
    tasks[index].completed = !tasks[index].completed;
    renderList();
}

function handleDelete(index){
    tasks.splice(index, 1);
    renderList();
}