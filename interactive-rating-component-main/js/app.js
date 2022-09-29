const first_card = document.querySelector(".first-card");
const second_card = document.querySelector(".second-card");
const option = document.querySelectorAll(".main-card__rate a");
const button = document.getElementById("btn_submit");
const rate = document.getElementById("rate");
let opt = 0;
const click = option.forEach( item=>{
    item.addEventListener("click", () =>{
        selectRate(item);
    });
});
/* function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
} */

function selectRate(item){
option.forEach(element => {
    /* css(element, {
        'background-color': 'var(--Dark-Blue)',
        color: 'var(--Light-Grey)'
    }); */
    element.classList.remove("selected");
});
item.classList.add("selected");
opt = item.text;
rate.innerHTML = opt;
}


button.addEventListener("click", ()=>{
 first_card.classList.add("disable");
 second_card.classList.remove("disable")
});