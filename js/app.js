const userForm = document.getElementById("userform");
const useremail= document.getElementById("inputEmail");
const userpassword= document.getElementById("inputPassword");
const userRemember= document.getElementById("remember-me"); 

const { APIlogin, countryApi, SERVICES } = window; 

// if user is correct 
const isUser = SERVICES.read(window.windowKey);
if (isUser) {
  location.replace("main.html");
}


let userinfo = [];
// Declare function for clicking on a Sign in button
const onClick = async (event) => {
  event.preventDefault();

  // validation
  let error=[];
  if(useremail.value === ""){
    error.push('You must enter your useremail')
  }
  if(userpassword.value === ""){
    error.push('You must enter your password')
  }
  if(error.length){
    return;
  }
  console.log('welcome');

  const result = await APIlogin.login(useremail.value, userpassword.value);
  console.log(result);
  // Saving information
  if(result) {
  SERVICES.add(window.windowKey, JSON.stringify(result));
  location.replace("main.html");
  }


}


userForm.addEventListener("submit", onClick);
