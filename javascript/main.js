document.addEventListener("DOMContentLoaded", function(){
    get_all_data();
});

function validateForm(){
    console.log("validate was called")
    let form = document.forms["form"]["todo-item"].value;
    console.log("x" , form )
    if(form === ""){
        let validateText = document.getElementById("validate")
        validateText.textContent= "Please enter a task"
    }
    // add_single_task(form);
}

function handleChange(){
    console.log("handle change was called")
    let form = document.forms["form"]["todo-item"].value;
    let validateText = document.getElementById("validate")
    validateText.textContent= ""
    if(form.trim() === ""){
        let validateText = document.getElementById("validate")
        validateText.textContent= "Please enter a task"
    }

}

// function add_single_task(form){
//     console.log("add task called", form)
//     const xhr = new XMLHttpRequest();
//     const url = 'api/crud/create.php'
//     const keyValue = "todo-item=" +form;

//     xhr.open('POST', url, true);
//     xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");   
//     xhr.send({
//         "success": "true"
//     })

// }

function get_all_data(){
    console.log("get all data called")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var obj_try = JSON.parse(this.responseText);
        console.log("response", obj_try);
        
        var tBody = document.getElementById('table').getElementsByTagName('tbody')[0];
        console.log("tbody", tBody);
        console.log("obj length", obj_try.length)
        for(var i =0; i < obj_try.data.length; i+=1){
            var tRow = document.createElement('tr');
            tBody.append(tRow);
            var tCol = document.createElement('td');
            console.log("tCol", tCol)
            tCol.textContent = obj_try.data[i].task;
            tRow.append(tCol);

            var buttonCol = document.createElement('td');
            tRow.append(buttonCol);
            console.log("buttonCol",buttonCol);
            var editButton = document.createElement('button');
            editButton.textContent = "Edit";
            editButton.classList.add("btn");
            editButton.classList.add("btn-primary");
            var deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("btn");
            deleteButton.classList.add("btn-danger");
            
            buttonCol.append(editButton);
            buttonCol.append(deleteButton);


            console.log("editbutton", editButton)
            console.log("dbutton", deleteButton)

        }

        }
    };
    xhttp.open("GET", "http://localhost:8888/vanilla-list/api/read.php", true);
    xhttp.setRequestHeader("Accept", 'application/json');
    xhttp.send();
}