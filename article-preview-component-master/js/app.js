let clicked = false;
let screenSize = window.matchMedia("(min-width: 775px)");
const click = document.querySelector(".card__footer-share-img");
    const share = click.addEventListener("click", () =>{
        if(screenSize.matches){
            if(clicked === false){
                document.querySelector(".share").classList.add("share--clicked");
                document.querySelector(".card__footer-share-img").classList.add("card__footer-share-img--clicked");
                clicked = true;
            }else{
                document.querySelector(".share").classList.remove("share--clicked");
                document.querySelector(".card__footer-share-img").classList.remove("card__footer-share-img--clicked");
                clicked = false;
            }
        }else{
            if(clicked === false){
                document.querySelector(".card__footer-grid").classList.add("card__footer-grid--clicked");
                document.querySelector(".card__footer").classList.add("card__footer--clicked");
                document.querySelector(".share-mobile").classList.add("share-mobile--clicked");
                document.querySelector(".card__footer-share-img").classList.add("card__footer-share-img--clicked");
                clicked = true;
            }else{
                document.querySelector(".card__footer-grid").classList.remove("card__footer-grid--clicked");
                document.querySelector(".card__footer").classList.remove("card__footer--clicked");
                document.querySelector(".share-mobile").classList.remove("share-mobile--clicked");
                document.querySelector(".card__footer-share-img").classList.remove("card__footer-share-img--clicked");
                clicked = false;
            }
            }
        
    });





