
function getRounds(){
    let rounds = document.getElementById("rounds").value;
    setRounds(rounds);
}

function setRounds(rounds){
    if (rounds % 2 == 0){
        document.getElementById("rounds").value="must be odd...";
    }
    else if(isNaN(rounds)){
        //The line bellow still isnt quite working.  To be fixed//
        document.getElementById("rounds").value="That is not a number...";
        //isNaN(rounds)  theres an issue with this for some reason.
    }
 
    else {
        localStorage.setItem("rounds",rounds);
        localStorage.setItem("round",1);
        window.location.href = "chooser.html";
        let score =[0,0];
        localStorage.setItem("score",JSON.stringify(score));
    }
}

function showRound(){
    let round = localStorage.getItem("round");
    let rounds = localStorage.getItem("rounds");
    let score = JSON.parse(localStorage.getItem("score"));
    let scoreBox = document.getElementById("scoreBox");
    scoreBox.innerHTML=score.toString();
    if (round > rounds) {
        window.location.href = "gameover.html";
    }
    let statsBox = document.getElementById("statsBox");
  
    let message = "Round " + round + " of " + rounds;
    statsBox.innerHTML = message;
}

function cpuTurn(u){
    let moves = ["r","p","s"];
    let choice = Math.floor(Math.random()*3);
    let c = moves[choice];
    findWinner(u,c);
}

function findWinner(u,c){
 
    if (u == c){
//      after you set the round, get the score array from local storage, JSON parsed. 
    document.getElementById("result").innerHTML="We both picked " + u;
    }
    else {
        let winner = " ";
        let winArray=[["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
        for (let i = 0; i< winArray.length; i++){
            if (winArray[i][0] == u && winArray[i][1]==c){
                winner= winArray[i][2];

            }
        }

        document.getElementById("result").innerHTML= "You choose " + u + " and I choose " + c + " " + winner + " win!"
        let round = localStorage.getItem("round");
        round++;
        localStorage.setItem("round",round);
        let score =JSON.parse(localStorage.getItem("score"));
        showRound();
    }
}
