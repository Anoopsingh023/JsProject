const inputField=document.getElementById("input_field");
const taskList=document.getElementById("task_list");

function addTask(){
    if (inputField.value===""){
        alert("Please Enter somthing");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputField.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputField.value="";
    saveData()
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("Data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML=localStorage.getItem("Data");
}
showTask();