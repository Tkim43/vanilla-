document.addEventListener('DOMcontentLoaded', function (){
});


function validateForm(){
    console.log("validate was called")
    let form = document.forms["form"]["todo-item"].value;
    console.log("x" , form )
    if(form === ""){
        let validateText = document.getElementById("validate")
        validateText.textContent= "Please enter a task"
    }
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