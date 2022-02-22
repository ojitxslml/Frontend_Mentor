const id = document.querySelector(".advice__id");
const advice = document.querySelector(".advice__text");
const diceBtn = document.querySelector(".dice_img");
//wait dom before call API
document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
}); 

const fetchData = async (url = "https://api.adviceslip.com/advice") =>{
    id.innerHTML = `Advice #...`;
    advice.innerHTML = `Loading...`;
console.log("loading...")
//ASYNC y AWAIT; USE TRY CATCH
try{
    const res = await fetch(url);
    const data = await res.json();
    //Always 2 await in fetch.
    drawAdvice(data);
}
catch(e){
console.log(e)
}
};

diceBtn.addEventListener("click", () =>{
    fetchData();
});
    
const drawAdvice = (data) =>{
    id.innerHTML = `Advice #${data.slip.id}`;
    advice.innerHTML = `“${data.slip.advice}”`;
}