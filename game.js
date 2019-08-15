//document.ready(
    //initializing constants
    const userScore = 0;
    const computerScore = 0;
    const userScore_span = document.getElementById("user-score");
    const computerScore_span = document.getElementById("user-score");
    const scoreBoard_div = document.querySelector(".score-board");
    const result_div = document.querySelector(".result");
    
    const rock_div = document.getElementById("r");
    const scissors_div = document.getElementById("s");
    const paper_div = document.getElementById("p");
    
    //computer selects its moves randomly
    function getComputerChoice(){
     const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    }
    
    //switch/case function for user to make move choices
    function game(userChoice) {
        const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rs":
            case "sp":
            case "pr":
            console.log("YOU WIN!");
            break;
            case "ps":
            case "rp":
            case "sr":
            console.log("YOU LOSE!");
            break;		
            case "ss":
            case "rr":
            case "pp":
            console.log("Draw.");
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