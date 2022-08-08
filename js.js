var form = document.getElementById("form");
var username = document.getElementById("UserName");
var email = document.getElementById("Email");
var password = document.getElementById("Password");
var password2 = document.getElementById("Password2");


function checkInputs() {
    //get the values from the inputs
   var usernameValue = username.value.trim()
   var emailValue = email.value.trim()
   var passwordValue = password.value.trim()
   var password2Value = password2.value.trim()

   if (usernameValue == "") {
       //show error
       //add error class
       setErrorFor(username,"Username cannot be empty")
   } else {
        //add success class
        setSuccesFor(username, "Cool Username")
   } 

      if ( emailValue  == "") {
       //show error
       //add error class
       setErrorFor(email,"Email cannot be empty")
   } else {
        //add success class
        setSuccesFor(email, "Noted")
   } 

    if ( passwordValue  == "") {
        //show error
        //add error class
        setErrorFor(password,"Set pasword")
    } else {
        //add success class
        setSuccesFor(password, "Smart...")
    } 
    
    if ( password2Value  == "") {
        //show error
        //add error class
        setErrorFor(password2,"Confirm your pasword")
    } else {
         //add success class
         setSuccesFor(password2, "Nice...")
    } 
}

function setErrorFor(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector("small")

    //add error message inside small
    small.innerText = message;

    //adds error class
    formControl.className = "form-control error"
}

function setSuccesFor(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector("small")

    //add error message inside small
    small.innerText = message;

    //adds error class
    formControl.className = "form-control success"
}
document.addEventListener('invalid', (function (){
return function (e){
e.preventDefault();
document,emt.getElementByTags("input").focus();
};
})(), true);