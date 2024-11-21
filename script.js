function setRounds(){
    let rounds = prompt("How many rounds?");
    if (rounds % 2 === 0) {
        alert("must be odd");
        return setRounds();
    }
    else {
        alert ("Best out of " + rounds);
        return rounds;
    }
}