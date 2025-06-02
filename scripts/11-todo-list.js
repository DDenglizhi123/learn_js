const todoList = [
    "make dinner",
    "wash dishes"
];
renderTodoList();
function renderTodoList(){
   let todoListHTML = '';
   for (i = 0; i < todoList.length; i++){
      const todo = todoList[i];
      const html = `<p>${todo}</p>`;
      todoListHTML += html;
   }
   console.log(todoListHTML);
   document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
}

function addTodo(){
   const inputEle = document.querySelector(".js-name-input");
   const name = inputEle.value;
   
   todoList.push(name);
   console.log(todoList);

   inputEle.value="";

   renderTodoList();
}