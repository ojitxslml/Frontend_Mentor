const work_hours = document.querySelector(".work__stats .card-hours p"); 
const work_previus = document.querySelector(".work__stats .card-previus span");
const play_hours = document.querySelector(".play__stats .card-hours p"); 
const play_previus = document.querySelector(".play__stats .card-previus span");
const study_hours = document.querySelector(".study__stats .card-hours p"); 
const study_previus = document.querySelector(".study__stats .card-previus span");
const exercise_hours = document.querySelector(".exercise__stats .card-hours p"); 
const exercise_previus = document.querySelector(".exercise__stats .card-previus span");
const social_hours = document.querySelector(".social__stats .card-hours p"); 
const social_previus = document.querySelector(".social__stats .card-previus span");
const self_hours = document.querySelector(".self__stats .card-hours p"); 
const self_previus = document.querySelector(".self__stats .card-previus span");
const buttons = document.querySelectorAll(".profile__down"); 


for(const button of buttons){

    button.addEventListener("click", (evt) =>{
        switch(evt.target.innerHTML){
            case("Daily"): 
            evt.target.classList.add("selected");
            button.childNodes[3].classList.remove("selected"); 
             button.childNodes[5].classList.remove("selected");
            fetchDataDay();
            break;
            case("Weekly"): console.log("week");
            button.childNodes[1].classList.remove("selected"); 
             button.childNodes[5].classList.remove("selected"); 
             evt.target.classList.add("selected");
             fetchDataWeek();
            break;
            case("Monthly"): console.log("Monthly")
            button.childNodes[1].classList.remove("selected"); 
            button.childNodes[3].classList.remove("selected"); 
            evt.target.classList.add("selected");
            fetchDataMonth();
            break;
            default:
        }
    })
}

const fetchDataWeek = async (url = "./data.json") =>{
//ASYNC y AWAIT; USE TRY CATCH
try{
    const res = await fetch(url);
    const data = await res.json();
    //Always 2 await in fetch.
    loadValuesWeek(data);
}
catch(e){
console.log(e)
}
};

fetchDataWeek();

const fetchDataDay = async (url = "./data.json") =>{
    //ASYNC y AWAIT; USE TRY CATCH
    try{
        const res = await fetch(url);
        const data = await res.json();
        //Always 2 await in fetch.
        loadValuesDay(data);
    }
    catch(e){
    console.log(e)
    }
    };
    

    const fetchDataMonth = async (url = "./data.json") =>{
        //ASYNC y AWAIT; USE TRY CATCH
        try{
            const res = await fetch(url);
            const data = await res.json();
            //Always 2 await in fetch.
            loadValuesMonth(data);
        }
        catch(e){
        console.log(e)
        }
        };
        



const loadValuesWeek = (data) =>{
    work_hours.innerHTML = `${data[0].timeframes.weekly.current}hrs`;
    work_previus.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`; 
    play_hours.innerHTML = `${data[1].timeframes.weekly.current}hrs`;
    play_previus.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`; 
    study_hours.innerHTML = `${data[2].timeframes.weekly.current}hrs`;
    study_previus.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`; 
    exercise_hours.innerHTML = `${data[3].timeframes.weekly.current}hrs`;
    exercise_previus.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
    social_hours.innerHTML = `${data[4].timeframes.weekly.current}hrs`;
    social_previus.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
    self_hours.innerHTML = `${data[4].timeframes.weekly.current}hrs`;
    self_previus.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
}

const loadValuesMonth = (data) =>{
    work_hours.innerHTML = `${data[0].timeframes.monthly.current}hrs`;
    work_previus.innerHTML = `Last Month - ${data[0].timeframes.monthly.previous}hrs`; 
    play_hours.innerHTML = `${data[1].timeframes.monthly.current}hrs`;
    play_previus.innerHTML = `Last Month - ${data[1].timeframes.monthly.previous}hrs`; 
    study_hours.innerHTML = `${data[2].timeframes.monthly.current}hrs`;
    study_previus.innerHTML = `Last Month - ${data[2].timeframes.monthly.previous}hrs`; 
    exercise_hours.innerHTML = `${data[3].timeframes.monthly.current}hrs`;
    exercise_previus.innerHTML = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
    social_hours.innerHTML = `${data[4].timeframes.monthly.current}hrs`;
    social_previus.innerHTML = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
    self_hours.innerHTML = `${data[4].timeframes.monthly.current}hrs`;
    self_previus.innerHTML = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
}

const loadValuesDay = (data) =>{
    work_hours.innerHTML = `${data[0].timeframes.daily.current}hrs`;
    work_previus.innerHTML = `Yesterday - ${data[0].timeframes.daily.previous}hrs`; 
    play_hours.innerHTML = `${data[1].timeframes.daily.current}hrs`;
    play_previus.innerHTML = `Yesterday - ${data[1].timeframes.daily.previous}hrs`; 
    study_hours.innerHTML = `${data[2].timeframes.daily.current}hrs`;
    study_previus.innerHTML = `Yesterday - ${data[2].timeframes.daily.previous}hrs`; 
    exercise_hours.innerHTML = `${data[3].timeframes.daily.current}hrs`;
    exercise_previus.innerHTML = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;
    social_hours.innerHTML = `${data[4].timeframes.daily.current}hrs`;
    social_previus.innerHTML = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;
    self_hours.innerHTML = `${data[4].timeframes.daily.current}hrs`;
    self_previus.innerHTML = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;
}

