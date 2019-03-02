document.addEventListener('DOMcontentLoaded', function (){
// call the function here to get the data


});


function validateForm(){
    console.log("validate was called")
    let form = document.forms["form"]["todo-item"].value;
    console.log("x" , form )
    if(form === ""){
        let validateText = document.getElementById("validate")
        validateText.textContent= "Please enter a task"
    }
    add_single_task();
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

function add_single_task(){

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/direction.php');
    xhr.send({
        "success": "true"
    })

}