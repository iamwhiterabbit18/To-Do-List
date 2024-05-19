
const btn = document.getElementById('btn')
.addEventListener('click', handleChange);
const logBtn = document.getElementById('log-btn')
.addEventListener('click', handleUsername);

const todos = document.getElementById('todos');
const greetingsCont = document.getElementById('greetings-cont');

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
        }
        else{
            alert('Please enter username');
        }
}

function handleChange(){
    let item = document.getElementById('item').value;

        if(item){
            let li = document.createElement('li');
            li.textContent = item;
            todos.append(li);
        }
        else{
            alert('Please enter an item')
        }
}