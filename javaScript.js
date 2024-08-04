let buttons = document.querySelectorAll(".buttons");
let resetButton = document.querySelector('#resetbtn')
let msg = document.querySelector(".msg");
let draw = true;
let count = 0;

let playerOne = true;
let winCheck = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let check = 0;

buttons.forEach((button) => {
button.addEventListener("click", ()=>{

if(playerOne)
{
    button.innerText = "X"
   button.style.color = "blue";
    playerOne = false
}
else {
    button.innerText = "O"
    button.style.color = "green";
    playerOne = true;
}
button.disabled = true;
count++;
checkWinner();

console.log(count);
});
});

const checkWinner = () => {
    for(let win of winCheck)
    {
       // console.log(win);
       let box1 = buttons[win[0]].innerText; 
       let box2 = buttons[win[1]].innerText;
       let box3 = buttons[win[2]].innerText;
    
        
       if (box1 != "" && box2 != "" && box3 != "")
       {
     
        if (box1 === box2 && box2 === box3)
        {
            console.log("Winner is " + box2)
            gameEnd();
            printWinner(box2);
            draw = false;
         
        }  
        else if (draw = true && count == 9)
        {
      
            msg.classList.remove("hide");    
            msg.innerText = "No One wins!!! Game is Draw";

        }
       }
    } 
}


function gameEnd(){
    for(let button of buttons )
    {
        button.disabled = true;
    }
}

function printWinner(winner){
    msg.classList.remove("hide");    
    msg.innerText = "Winner is " + winner;
    }
    
resetButton.addEventListener("click", resetGame)

function resetGame(){
   for (let button of buttons)
   {
    count = 0;
    button.innerText="";
    button.disabled = false;
    
   }
msg.classList.add("hide");
} 



