
let display = document.querySelector(".calvalue");

let buttons = Array.from(document.getElementsByClassName("button"));


buttons.map(button => {
    button.addEventListener("click", () => {
        switch(button.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            default:
                display.innerText += `${button.innerText}`;
        }
    });
});





// buttons.map( button => {
//     button.addEventListener("click", (e) => {
//         switch(e.target.innerText){
//             default:
//                 display.textContent += e.target.innerText;
//                 console.log(display.textContent);
//         }
//     });
// });
