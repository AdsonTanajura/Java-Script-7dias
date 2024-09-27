const allTrys = []
let  ramNumber = 0;
let trys = 0;

const newTry = () => {
    ramNumber = Math.floor(Math.random() * 100 + 1);
    console.log(ramNumber);
}

const getTry = () => {
    let yourTry = Number(document.getElementById('inputBox').value);
    trys++
    allTrys.push(yourTry);
    document.getElementById('guesses').innerHTML = allTrys;
    document.getElementById('attempts').innerHTML = trys;
    if(yourTry == ramNumber ) {
        alert('Voce Ganhou!!!')
    } else {
        yourTry = 0
    }
};

const newGame = () => {
    
}