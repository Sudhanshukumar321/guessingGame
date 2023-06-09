let result = document.querySelector('.result');
let input = document.querySelector('.input-game');
let button = document.querySelector('.button');
let container = document.querySelector('.container');


//audio 
let right = new Audio('../data/right.mp3');
let wrong = new Audio('../data/wrong.mp3');
let click = new Audio('../data/click.wav');

const data =['css','python','java','hindi','sanskrit','math',
'english','javascript','react','nextjs'];
// const data = async() =>{
//     let response = await fetch('');
//     let temp = await response.json;
// }

let play =false;
let arrOfRealWord='';
let wrongWord='';

const selectWord = () =>{
    //multiply by 10 because we need only one 1 digit before decimal
    let randomIndex = Math.floor(Math.random()*data.length);
    // console.log(Math.floor(randomIndex));
    const realWord = data[randomIndex];

    return realWord.toUpperCase();
}

const suffelingTheWord = (arrOfRealWord) =>{
    
    for(let i=arrOfRealWord.length-1;i>0;i--){
        let letter = arrOfRealWord[i];
        let tempRandomIndex = Math.floor(Math.random()*(i+1));
        arrOfRealWord[i]=arrOfRealWord[tempRandomIndex];
        arrOfRealWord[tempRandomIndex]=letter;
    }
    return arrOfRealWord;
}


const start = () =>{
    container.style.height="auto";
    button.style.fontSize='25px';

    if(!play){
        play=true;
        button.innerHTML="Guess";
        input.classList.toggle('hidden');
        arrOfRealWord = selectWord();
        wrongWord = suffelingTheWord(arrOfRealWord.split('')).join('');
        result.innerHTML=`Guess The Correct Word: ${wrongWord}` ;
        result.style.fontSize = "30px";
        result.style.color="red" ;
        result.style.textAlign="center" ;
    }else{
        let userWord = input.value.toUpperCase();
        
        if(userWord===''){
            click.play();
            alert('Please type any word in input box');
        }
        else{
            play=false;
            if(userWord === arrOfRealWord){
                //confetti call
                startConfetti();
                //play audio
                right.play();
                result.innerHTML= ` ✔️ congratulation, you are guessed right`;
                result.style.color="green" ; 
                input.classList.toggle('hidden');
                input.value='';
                button.innerHTML='wow';
                setTimeout(()=>{
                    right.pause();
                    right.load();
                    //confetti stop
                    stopConfetti();
                },3000)
                button.innerHTML='Restart';
            }else{
                // play audio
                wrong.play();
                result.innerHTML= `❌ sorry, you are guessed Wrong`; 
                setTimeout(()=>{
                    wrong.pause();
                    wrong.load();
                },2000)
                button.innerHTML='Restart';
                input.classList.toggle('hidden');
                input.value='';
            } 
        }
        
    }
}
container.style.height="auto";
button.addEventListener('click',start);