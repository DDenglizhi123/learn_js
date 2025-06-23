const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function pickComputerMove(){
    const randomNumber = Math.random(); // 生成一个0~1之间的随机数
    let computerChoice = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3){
        computerChoice = 'rock';
    }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerChoice = 'paper';
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerChoice = 'scissors';
    }
    return computerChoice;
}
let isAutoPlaying = false;
let itervalID;

//const autoPlay = () =>{

//};

function autoPlay() {
    if(!isAutoPlaying){
        itervalID = setInterval(
            () => {
                const playerMove = pickComputerMove();
                play(playerMove);
            }, 1000
        );
        isAutoPlaying = true;
    }else{
        clearInterval(itervalID);
        isAutoPlaying = false;
    }
}

function play(playerChoice){
    const computerChoice = pickComputerMove();
    if (playerChoice === computerChoice){
        score.ties++;
    }else if (
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
        ){
        result = 'You Win!';
        score.wins++;
    } else{
        result = 'You Lose!';
        score.losses++;
    }
    // setItem 方法将数据存储到浏览器的本地存储中
    // 第一个参数是键名，第二个参数是要存储的值, 只支持字符串
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.result').innerHTML = result;
    document.querySelector('.choices').innerHTML = `        You
<img class="move-icon" src="images/${playerChoice}-emoji.png">
<img class="move-icon" src="images/${computerChoice}-emoji.png">
Computer`;
    document.getElementById('countWin').innerHTML = score.wins;
    document.getElementById('countLoss').innerHTML = score.losses;
    document.getElementById('countTies').innerHTML = score.ties;
}

function resetScores(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.querySelector('.result').innerHTML = '';
    document.querySelector('.choices').innerHTML = '';
    document.getElementById('countWin').innerHTML = score.wins;
    document.getElementById('countLoss').innerHTML = score.losses;
    document.getElementById('countTies').innerHTML = score.ties;
}