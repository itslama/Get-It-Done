function startApp(){

    document.getElementById("startPage").style.display = "none";
    document.getElementById("todoPage").style.display = "block";
}


function addTask(){

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if(taskText === ""){
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText;

    li.addEventListener("click", function(){
        li.classList.toggle("done");
    });

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}


function finishDay(){

    let tasks = document.querySelectorAll("li");

    if(tasks.length === 0){
        alert("Add tasks first!");
        return;
    }

    let allDone = true;

    tasks.forEach(function(task){
        if(!task.classList.contains("done")){
            allDone = false;
        }
    });

    document.getElementById("todoPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";

    let resultText = document.getElementById("resultText");

    if(allDone){
        resultText.innerHTML = " Great Job! You Finished All Tasks!";
    }else{
        resultText.innerHTML = " You Didn't Finish All Tasks.";
    }
}


/* 🔙 Go back without deleting tasks */
function goBackToList(){

    document.getElementById("resultPage").style.display = "none";
    document.getElementById("todoPage").style.display = "block";
}


/* 🔁 Restart everything */
function restart(){

    document.getElementById("resultPage").style.display = "none";
    document.getElementById("startPage").style.display = "block";

    document.getElementById("taskList").innerHTML = "";
    document.getElementById("taskInput").value = "";
}