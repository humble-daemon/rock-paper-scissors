class Game{
    static instructions  = ["This is a game of Rock, Paper and Scissors." , "Rock beats Scissors, Scissors beat Paper, Paper beats Rock."];
    constructor(){
        this.player_score = 0;
        this.computer_score = 0;
        this.match_no = 0;
    }

    play(){
        console.log(Game.instructions.forEach((v) => {console.log(v) }));
        while(this.match_no++ < 5){
            this.play_match();
        }
        this.display_final_result();
    }
    play_match(){ 
        let player_choice, computer_choice, result;
        player_choice = this.get_player_choice();
        computer_choice = this.get_computer_choice();
        result = this.get_result(player_choice, computer_choice);
        this.display_result(result, player_choice, computer_choice);            
    }
    get_player_choice(){
        return prompt("enter you choice: ", "rock");
    }
    get_computer_choice(){
        return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    }

    get_result(player_choice, computer_choice){
        if(player_choice === computer_choice){
            return "the match is a draw!";
        }
        else if(player_choice === "rock" && computer_choice === "scissors" || player_choice === "paper" && computer_choice === "rock" || player_choice === "scissors" && computer_choice === "paper"){
            this.player_score ++;
            return "the player had won the match!";
        }
        else{
            this.computer_score ++;
            return "the computer had won the match!";
        }
    }
    display_result(result, player_choice, computer_choice){
        console.log("player vs computer");
        console.log(`${player_choice} vs ${computer_choice}`);
        console.log(result);
        console.log(" ");
    }
    display_final_result(){
        let message;
        if(this.computer_score === this.player_score)
            message =  "You have drew the game!";
        else if(this.computer_score > this.player_score)
            message =  `You have lost the game ${this.player_score} - ${this.computer_score}`;
        else 
            message =  `You have won the game ${this.player_score} - ${this.computer_score}`;
        console.log(message);
    }
}


console.log("test 1");
let game = new Game();
game.play();