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
   todoList.forEach(function(todoObj,index){
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
   });

   for (i = 0; i < todoList.length; i++){
      const todoObj = todoList[i];

      //const name = todoObj.name;
      //const dueDate = todoObj.dueDate;

      //const {name} = todoObj; //shorcut for line 16
      const{name,dueDate} = todoObj // combined name and dueDate

      const html = 
         `
         <div>${name}</div>
         <div>${dueDate}</div>
         <button onclick="
         todoList.splice(${i},1);
         renderTodoList();
         " class="delete-todo-btn">Delete</button>
         `;
      todoListHTML += html;
   }
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