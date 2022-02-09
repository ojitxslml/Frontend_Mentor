const btnForm = document.getElementById("btnForm");
const inputArray = [];
const textErrorArray = [];
const textError = document.querySelectorAll(".errorBox");
const input = document.querySelectorAll("input");

const errors = textError.forEach(item => {
    textErrorArray.push(item);
});

const inputs = input.forEach(item => {
    inputArray.push(item);
    item.addEventListener("click", () =>{
        active(item);
    });
});

btnForm.addEventListener("click", (item) =>{
    item.preventDefault();
validate();
});

//selected input border

const active = (input) => {
    for(let i=0; i<inputArray.length; i++){
    inputArray[i].classList.remove("selected");
        if(input === inputArray[i]){
        inputArray[i].classList.add("selected");
        }
    }
};

const validate = ()  => {

    //add and remove error classes
for(let i=0; i<inputArray.length; i++){
    inputArray[i].classList.remove("error");
    textErrorArray[i].style.display = "none";
}

    for(let i=0; i<inputArray.length; i++){
            if((inputArray[i].value).trim() === ""){
                inputArray[i].classList.add("error");
                textErrorArray[i].style.display = "block";
            }
        if(!(validateEmail(inputArray[2].value))){
            inputArray[2].classList.add("error");
            textErrorArray[2].style.display = "block";
        }
    }
};

//regEx
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };