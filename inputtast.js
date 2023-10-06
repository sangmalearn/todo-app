
//selectors

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const allTasks = document.querySelector(".tasks");

// form event

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if(!taskInput.value){
        alert("Please insert a task!")
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("content");
    //taskDiv.innerHTML = taskInput.value;

    // Create a input field
    const inputTask = document.createElement("input")
    inputTask.type = "text";
    inputTask.value = taskInput.value;
    inputTask.setAttribute("readonly", "readonly");

    // Create action div
    const actionDiv = document.createElement("div");
    actionDiv.classList.add("actions");
    //actionDiv.classList.add("modifier");
   // inputTask.setAttribute.add("id", "test"); 

    // Create edit button 
    const editBtn = document.createElement("button")
    editBtn.classList.add("edit");
    editBtn.innerHTML="Edit";
    actionDiv.appendChild(editBtn);
    
    // Create delete button 
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML="Delete";
    actionDiv.appendChild(deleteBtn);


    
    // adding input task at content
        
    taskDiv.appendChild(inputTask);
    
    // adding action task at content

    taskDiv.appendChild(actionDiv);

    //adding the content div

    allTasks.appendChild(taskDiv); 
    

    // edit a task field

    editBtn.addEventListener("click", (e) => {
        //console.log("test edit");
        //console.log("edit button is clicked")
        if(editBtn.innerHTML.toLowerCase() === "edit"){
            inputTask.removeAttribute("readonly");
            editBtn.innerHTML = "Save";
            inputTask.focus(); 
        } else {
            editBtn.innerHTML="Edit";
            inputTask.setAttribute("readonly", "readonly");;
        }
    });

    deleteBtn.addEventListener("click", () => {
        allTasks.removeChild(taskDiv);
    })
    

    //console.log(taskInput.value);
    taskInput.value = "";
});


// document.getElementById("text").addEventListener("click", (event) => {
//     console.log(event.target);
// }) ;

// document.querySelector("body").addEventListener("click", (event) => {
//     console.log(event.target);
// }) ;