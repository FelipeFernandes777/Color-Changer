
function trocarCor(){
    let maxVal = 0xFFFFFF;

    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);

    let randColor = randomNumber.padStart(6 , 0);

    document.getElementById('quadrado').style.  backgroundColor = `#${randColor}`
}

function limpar(){
    document.getElementById('quadrado').style.backgroundColor = 'white'
}

function escolhaCor(input){
    console.log(input.value)
    document.getElementById('quadrado').style.  backgroundColor = input.value
    input.classList.toggle('displayN')
}

function enable(){
    document.getElementById('escolhaCor').classList.toggle('displayN')
}