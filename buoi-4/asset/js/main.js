// localStorage.setItem("class","hello");

// let name=localStorage.getItem("class")

// localStorage.removeItem("class")


let formEL=document.querySelector("#form");
let inputEL=document.querySelector("#input");

let ulEL=document.querySelector("#todos");

// console.log(ulEL)

let data=[{
  name:'ten cong viec',
  completed:false
},
{
  name:'ten cong viec 2',
  completed:true
}
];


// lu tru tren storage

// localStorage.setItem("TODO",JSON.stringify(data))

let todos=JSON.parse(localStorage.getItem("TODO"));
// console.log(todos)

const updateLS = () =>{
 let allLE=document.querySelectorAll("li");
 
const listTodo=[];
 allLE.forEach((item)=>{
// console.log(item.innerHTML);
listTodo.push({
  name:item.innerHTML,
completed:item.classList.contains("completed")
});
 })

//  console.log(listTodo)

 localStorage.setItem("TODO",jSON.stringify(listTodo));
}


const showTodo=(data)=>{
let todoName=inputEL.value

// let todoCompleted=data.value;
  if(data){
todoName=data.name;
  }

  if(todoName){
    let liEL=document.createElement("li")


// 
if(data && data.completed==true){
  liEL.classList.add("completed");
}


liEL.addEventListener("click", ()=>{
  // console.log("123");
  liEL.classList.toggle("completed")
})



// remove li
liEL.addEventListener("contextmenu",()=>{
  liEL.remove();
})

    liEL.innerHTML=todoName;
    ulEL.appendChild(liEL)
    console.log(liEL)

inputEL.value='';

  }

  
}





if(todos){
  todos.forEach(value=>{
    // console.log(value)

    showTodo(value);
  })
}

formEL.addEventListener("submit",(e)=>{
  e.preventDefault();
  // console.log("12345")

  showTodo();
})


