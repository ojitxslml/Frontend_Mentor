const btnNotify = document.getElementById("btnNotify");
const inputEmail = document.getElementById("txtEmail");
const errorMsg = document.querySelector(".errorMsg");
btnNotify.addEventListener("click", (item) =>{
    item.preventDefault();
    if(validateEmail(inputEmail.value)){
        errorMsg.classList.remove("visibilityTrue");
       inputEmail.classList.remove("errorBorder");
    }else{
        errorMsg.classList.add("visibilityTrue");
       inputEmail.classList.add("errorBorder");
    }
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };