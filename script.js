// elements
const yes = document.querySelector(".yes")
const no = document.querySelector(".no")
const p1 = document.querySelector(".p1")
const agif = document.querySelector(".cgif")
const ap = document.querySelector(".p2")
const no2 = document.querySelector(".btnimg")
const norun = document.querySelector(".empty")

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
    let gone = 'lol try pressing no now'
    ap.textContent = gone;
    ap.classList.toggle("new-position");
    no.remove()
    agif.classList.toggle("cgifnew")
    no2.src = "https://png.pngtree.com/png-vector/20231116/ourmid/pngtree-no-icon-negative-png-image_10541405.png"

    // Function to get a random number within a range
const getRandomNumber = (num) => {
    // Math.floor gives whole numbers, ensures it stays within bounds
    return Math.floor(Math.random() * num);
};

// Function to move the button
const moveButton = () => {
    // Calculate random top and left positions within the window dimensions
    // Subtract button's offset dimensions to ensure it stays fully in view
    const newTop = getRandomNumber(window.innerHeight - norun.offsetHeight);
    const newLeft = getRandomNumber(window.innerWidth - norun.offsetWidth);

    // Apply the new positions
    norun.style.top = `${newTop}px`;
    norun.style.left = `${newLeft}px`;
};

// Add the event listener for when the mouse enters the button area
// Using 'mouseenter' is better than 'mouseover' for this effect
norun.addEventListener("mouseenter", moveButton);

norun.addEventListener("click", () => {
  norun.remove()
  let lol = 'o ano na'
  ap.textContent = lol;

})

   
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
    norun.remove()



});