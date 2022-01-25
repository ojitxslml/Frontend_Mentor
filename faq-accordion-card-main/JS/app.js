const questionBox = document.querySelectorAll(".card-faq .question");
const answer = document.querySelectorAll(".card-faq .answer");
const click = questionBox.forEach( item =>{
    item.addEventListener("click",() =>{   
        accion(item);
    });
});
function accion(item){
    for (var i=0; i<5; i++){
        if(item.getAttribute("id")==="item-"+(i+1)){
            if(answer[i].classList.item(1) == "enabled"){
                answer[i].classList.remove("enabled");
                item.querySelector("img").style.transform = "rotate(0deg)";
                item.style.fontWeight = '400';
                item.style.color = "";
            }else{
                answer[i].classList.add("enabled");
                item.querySelector("img").style.transform = "rotate(180deg)";
                item.style.fontWeight = '700';
                item.style.color = "black";
            }        
              }else{
                  answer[i].classList.remove("enabled");
                  document.getElementById("i"+(i+1)).style.transform = "rotate(0deg)";
                  document.getElementById("item-"+(i+1)).style.fontWeight = '400';
                  document.getElementById("item-"+(i+1)).style.color = "";
              }
      }
}