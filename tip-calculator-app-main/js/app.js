const txtBill = document.getElementById("bill");
const txtPpl = document.getElementById("ppl_number");
const txtTip = document.getElementById("tip");
const btnTip = document.querySelectorAll(".form__tip button");
const lblTip = document.getElementById("lblTip");
const lblTotal = document.getElementById("lblTotal");
const btnReset = document.getElementById("btnReset");
const lblError = document.querySelector(".txtError");
let totalx =0;
let pplx = 1;
let tipx = 0;
txtBill.addEventListener("keyup", ()=>{
    if(txtBill.value === ""){
        totalx = 0;
    }else{
        totalx = parseInt(txtBill.value);
    }
    calcTotal();
});

txtPpl.addEventListener("keyup", ()=>{
    if(txtPpl.value === "" || txtPpl.value === "0"){
       lblError.classList.remove("hidden");
       txtPpl.style.border = "2px solid red";
     }else{
        pplx = parseInt(txtPpl.value);
        lblError.classList.add("hidden");
        txtPpl.removeAttribute("style");
        calcTotal();
    }
    
});

txtTip.addEventListener("keyup", ()=>{
    tipx = calcTip((txtTip.value), (totalx));
    calcTotal();
    for (const button of btnTip) {
            button.classList.remove("selected");   
        }
        txtTip.style.border = "1px solid #26c0ab";
});

for (const button of btnTip){
    button.addEventListener("click", (btn) =>{
        btn.preventDefault();
        txtTip.value = "";
       tipx = calcTip((btn.target.classList.value), (totalx));
       calcTotal();
    });
}

const calcTip = (tip = 0, total=0)=>{
    total = parseFloat(total);
    if(tip===0){
        // tipDiv = ((total - totalx) / pplx) ;
        // console.log(tipDiv, total, totalx, pplx)
        // lblTip.innerHTML = "$"+tipDiv.toFixed(2);
        return (total - totalx);
    }else{
        for (const button of btnTip) {
            if(button.classList.value === tip){
                button.classList.add("selected");
                txtTip.removeAttribute("style");
            }else{
                button.classList.remove("selected");
            }
        }
        
        switch(tip){
            case "btn5":
                total = total + total*0.05;
            break;
            case "btn10":
                total = (total + total*0.1);
            break;
            case "btn15":
                total = total + total*0.15;
            break;
            case "btn25":
                total = total + total*0.25;
            break;
            case "btn50":
                total = total + total*0.5;
            break;
            default:
                total = total + total*tip*0.01;
                break;
        }
        return (total - totalx);
        // tipDiv = ((total - totalx) / pplx) ;
        // console.log(tipDiv, total, totalx, pplx)
        // lblTip.innerHTML = "$"+tipDiv.toFixed(2);
    }
}

const calcTotal = () =>{
       let tipDiv = (tipx / pplx) ;
        lblTip.innerHTML = "$"+tipDiv.toFixed(2);
       let totalDiv = (totalx/pplx);
       lblTotal.innerHTML = "$"+totalDiv.toFixed(2);
       btnReset.removeAttribute('disabled');
}

btnReset.addEventListener("click", (item)=>{
    item.preventDefault();
    tipx = 0;
    totalx = 0;
    pplx = 1;
    calcTotal();
    calcTip();
    txtBill.value = "";
    txtPpl.value = "";
    btnReset.setAttribute('disabled', true);
    lblError.classList.add("hidden");
    txtPpl.removeAttribute("style");
    txtTip.value = "";
    txtTip.removeAttribute("style");
    for (const button of btnTip) {
            button.classList.remove("selected");
    }
});