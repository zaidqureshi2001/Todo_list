function addTodo(){
    const todoInput = document.getElementById('todoInput');
    const todotext=todoInput.value.trim()
if(todotext !== ''){
    const todoList = document.getElementById('todoList');
    const todoitem = document.createElement('li')
    todoitem.textContent=todotext;
    const deleteButton =document.createElement('button')
    deleteButton.textContent='Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick=function() {
        todoList.removeChild(todoitem)

    }
    todoitem.append(deleteButton);
    todoitem.onclick=function(){
        todoitem.classList.toggle('completed');
    };
    todoList.appendChild(todoitem);
        todoInput.value = '';
    console.log(todoitem);
}
}