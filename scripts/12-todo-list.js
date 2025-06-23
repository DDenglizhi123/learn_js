const todoList = 
[
   {
   name:"make dinner",
   dueDate:"2025-12-20"
   },
   {
    name:"wash dishes",
    dueDate: "2025-11-20"
   }
];

renderTodoList();

function renderTodoList(){
   let todoListHTML = '';
   todoList.forEach((todoObj, index) => {
      const{name,dueDate} = todoObj // combined name and dueDate

      const html = 
         `
         <div>${name}</div>
         <div>${dueDate}</div>
         <button onclick="
         todoList.splice(${index},1);
         renderTodoList();
         " class="delete-todo-btn">Delete</button>
         `;
      todoListHTML += html;
   })
   
   document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
   const inputEle = document.querySelector(".js-name-input");
   const name = inputEle.value;
   
   const dateInputEle = document.querySelector(".js-due-date-input");
   const dueDate = dateInputEle.value;

   todoList.push(
      {
         //name:name,
         //dueDate:dueDate
         name,
         dueDate
      }
   );

   inputEle.value="";

   renderTodoList();
}