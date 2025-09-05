const addBtn=  document.querySelector("#addBtn");

const todolist = document.querySelector("#todos");

const addTodo =()=>{
     const inputField =document.querySelector("#inputTodo");
     const input =inputField.value.trim();

if(input!==""){

    const list = document.createElement("li");
    list.textContent=input;

   const doneBtn= document.createElement("button");
   doneBtn.textContent="Done";
    doneBtn.classList.add("btn", "doneBtn");
    list.append(doneBtn);

    const delBtn= document.createElement("button");
   delBtn.textContent="Delete";
    delBtn.classList.add("btn", "delBtn");
    list.append(delBtn);

    todolist.append(list);
   inputField.value="";

   doneBtn.addEventListener("click",()=>{
    list.classList.add("done");
   })

   delBtn.addEventListener("click",()=>{
    list.remove("done");
   })
}
else{
    alert("InputField must not be empty!!")
}
}

addBtn.addEventListener("click",()=>{
   addTodo();
});

document.querySelector("#inputTodo").addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        addTodo();
    }
}
)