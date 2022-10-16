const form = document.getElementById("my-form");

//field clearance code

function clearfields(){
  document.querySelector("#first-name").value= "";
  document.querySelector("#last-name").value = "";
  document.querySelector("#number").value= "";
  document.querySelector("#email").value= "";
}

form.addEventListener("submit", (e) =>{
  e.preventDefault()

const firstNameInput = document.getElementById("first-name");

const lastNameInput = document.getElementById("last-name");

const emailInput = document.getElementById("email");

const numberInput = document.getElementById("number");

if(lastNameInput.value === "")
{
  error()
}else if(firstNameInput.value === ""){
  error()
} else if (emailInput.value === "" ){
  error()
}else if(numberInput.value === ""){
error()

}else{
 success();
  clearfields();
}


})

//error and success code using sweetalert js
function error(){
swal({
  title: "warning",
  text: "please fill the required information",
  icon: "error",
  button:"Error",
  dangerMode: true,
});

}

function success(){
  swal({
  title: "Success!",
  text: "Information sent Successful",
  icon: "success",
  button: "Ok"
});
}
