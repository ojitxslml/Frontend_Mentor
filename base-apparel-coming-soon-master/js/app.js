const btn = document.getElementById("btnForm");
const email = document.getElementById("Email");
const errorMsg = document.querySelector(".Email__error");
const errorImg = document.querySelector(".Email__errorImg");
const emailBox = document.querySelector(".Email__Box");

btn.addEventListener("click", (btn)=>{
btn.preventDefault();
if(validateEmail(email.value)){
    errorMsg.classList.remove("displayError");
    errorImg.classList.remove("displayError");
    emailBox.classList.remove("displayError-Border");
}else{
    errorMsg.classList.add("displayError");
    errorImg.classList.add("displayError");
    emailBox.classList.add("displayError-Border");
    console.log(errorMsg.classList);
}
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

