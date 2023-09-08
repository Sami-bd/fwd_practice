
let rand = Number(Math.floor(Math.random() * 3) + 1);
let computerInput, computer;
if(rand == 1){
    computerInput = 'Rock';
}
else if(rand == 2){
    computerInput = 'Paper';
}
else{
    computerInput = 'Scissor';
}



let userInput = prompt('Enter Rock, Paper or Scissor');

user = userInput.toLowerCase();
computer = computerInput.toLowerCase();



// function rockPaperScissor(userInput, computer)
// {
//     if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissor')
//     {
        
//         if (userInput === computer) {
//             alert('User : '+userInput+'\ncomputer : '+computer+'\nDraw');
//           }
    
//         else if((userInput === 'rock' && computer === 'scissor') || (userInput === 'paper' && computer === 'rock') || (userInput === 'scissor' && computer === 'paper'))
//         {
//             alert('User : '+userInput+'\ncomputer : '+computer+'\nUser win');
//         }
//         else
//         {
//             alert('User : '+userInput+'\ncomputer : '+computer+'\nComputer win');
//         }
//     }
//     else{
//         alert('Wrong input. Try again.......');
//     }

// }

function rockPaperScissor(user, computer)
{
    let result;
    if(user == 'rock' || user == 'paper' || user == 'scissor')
    {
        
        if (user === computer) {
            result = 'Draw'
            return result;
          }
    
        else if((user === 'rock' && computer === 'scissor') || (user === 'paper' && computer === 'rock') || (user === 'scissor' && computer === 'paper'))
        {
            result = 'User Win'
            return result;
        }
        else
        {
            result = 'Computer Win'
            return result;
        }
    }
    else{
        alert('Wrong input. Try again.......');
    }

}

let result = rockPaperScissor(user, computer);

if(result != undefined )
alert('User : '+userInput+'\nComputer : '+computerInput+'\n===============\n'+result);