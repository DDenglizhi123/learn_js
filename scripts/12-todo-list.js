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
         <button class="delete-todo-btn js-delete-todo-btn">Delete
         </button>
         `;
      todoListHTML += html;
   })
   
   document.querySelector('.js-todo-list').innerHTML = todoListHTML;

   document.querySelectorAll('.js-delete-todo-btn')
      .forEach((deleteBtn, index)=>{
         deleteBtn.addEventListener('click', ()=>{
         todoList.splice(index, 1);
         renderTodoList();
         })
      });
}

document.querySelector('.js-add-todo-btn').addEventListener('click', () => {
   addTodo();
})

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