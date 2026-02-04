// elements
const yes = document.querySelector(".yes")
const no = document.querySelector(".no")
const p1 = document.querySelector(".p1")
const agif = document.querySelector(".cgif")
const ap = document.querySelector(".p2")
// no button programing

let yesScale = 1;
let noclickcount = 0;
let agifScale = 0.1;

no.addEventListener("click", () => {
    let newText = 'are you sure? :<'
    p1.textContent = newText;
    noclickcount++;

   if (noclickcount>2) {let newText2 = 'are you super super super sure? :<'
    p1.textContent = newText2;
  }
   
   if (noclickcount>3) {yesScale += 0.1; 
    let newText3 = 'bruhhhh'
    p1.textContent = newText3;
        yes.style.transform = `scale(${yesScale})`;
  }

     if (noclickcount>24) {
    no.remove()
    let gone = 'u cant press no na lol noob'
    ap.textContent = gone;
    ap.classList.toggle("new-position");
    agif.classList.toggle("cgifnew");
  }
    else
    noclickcount++;

 });

// yes ckuickahsjhfksjhfsjkfjkfjd click

 yes.addEventListener("click", () => {
    let newTextl = 'i knew it u love me! SM FV on feb 9? (we can go fantasy world)';
    p1.textContent = newTextl;
    agif.classList.toggle("cgif2");
    yes.remove()
    no.remove()
    ap.remove()


});