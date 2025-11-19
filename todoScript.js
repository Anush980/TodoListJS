const todolist = document.querySelector("#todos");
const addBtn = document.querySelector("#addBtn");
const inputField = document.querySelector("#inputTodo");

const saveTodos =(todos)=>{
    localStorage.setItem("todos",JSON.stringify(todos))
};

const loadTodos = ()=>{
  const data= localStorage.getItem("todos");
    if(data){
      return JSON.parse(data);
    }
    else{
       return [];
    }
}

const renderTodos =()=>{

    todolist.innerHTML= "";
    todos.forEach((todo,index)=>{

        const li = document.createElement("li");
        li.textContent=todo.text;

        if(todo.done){
            li.classList.add("done")
        }
       
        const doneBtn = document.createElement("button")
        doneBtn.textContent="Done";
        doneBtn.classList.add("btn","doneBtn");
        doneBtn.addEventListener("click",()=>{
            todos[index].done=true;
            saveTodos(todos);
            renderTodos();
        })

        const delBtn = document.createElement("button");
        delBtn.textContent="Delete";
        delBtn.classList.add("btn","delBtn");
        delBtn.addEventListener("click",()=>{
            todos.splice(index,1);
            saveTodos(todos);
            renderTodos();
        })
        li.append(doneBtn,delBtn);
        todolist.append(li);

    });
};

const addTodo=()=>
{
    const data= inputField.value.trim();
    if(data===""){
        alert("Input field is empty!!");
        return;
    }
    todos.push({text:data,done:false});
    saveTodos(todos);
    renderTodos();
    inputField.value="";
}
addBtn.addEventListener("click",addTodo);
inputField.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        addTodo();
    }
});


let todos = loadTodos();
renderTodos();





