//document.ready(
    //initializing constants
    let userScore = 0;
    let computerScore = 0;
    const userScore_span = document.getElementById("user-score");
    const computerScore_span = document.getElementById("computer-score");
    const scoreBoard_div = document.querySelector(".score-board");
    const result_p = document.querySelector(".result > p");
    
    const rock_div = document.getElementById("r");
    const scissors_div = document.getElementById("s");
    const paper_div = document.getElementById("p");
    
    //computer selects its moves randomly
    function getComputerChoice(){
     const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    }

    function game(userChoice) {
        const computerChoice = getComputerChoice();
        
        console.log("user choice => " + userChoice + ".");
        console.log("computer choice => " + computerChoice + ".");
    }

    function convertToWord(letter) {
        if(letter==="r") return "Rock";
        if(letter==="p") return "Paper";
        return "Scissors";

    }

    function win(userChoice, computerChoice) {
        userScore++
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!"
    }

    function lose(userChoice, computerChoice) {
        computerScore++
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". You lose!"
    }

    function draw(userChoice, computerChoice) {
        console.log("DRAW! STALEMATE!");
        result_p.innerHTML = convertToWord(userChoice) + " matches " + convertToWord(computerChoice) + ". Draw!"
    }
    
    //switch/case function for user to make move choices
    function game(userChoice) {
        let computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rs":
            case "sp":
            case "pr":
            win(userChoice, computerChoice);
            break;
            case "ps":
            case "rp":
            case "sr":
            lose(userChoice, computerChoice);
            break;		
            case "ss":
            case "rr":
            case "pp":
            draw(userChoice, computerChoice);
            break;
        }
    }		
  
function main() {
    rock_div.addEventListener("click", function() {
        game("r");
    })

    paper_div.addEventListener("click", function() {
        game("p");
    })

    scissors_div.addEventListener("click", function() {
        game("s");
    })
}
    

    main();