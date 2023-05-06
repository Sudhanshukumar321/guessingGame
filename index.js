let result = document.querySelector('.result');
let input = document.querySelector('input');
let button = document.querySelector('.btn');
let container = document.querySelector('.container');

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
    if(!play){
        play=true;
        button.innerHTML="Guess"
        input.classList.toggle('hidden');
        arrOfRealWord = selectWord();
        wrongWord = suffelingTheWord(arrOfRealWord.split('')).join('');
        result.innerHTML=`Guess The Correct Word: ${wrongWord}` ;
        result.style.fontSize = "30px";

    }else{
        let userWord = input.value.toUpperCase();
        
        if(userWord===''){
            alert('Please type any word in input box');
        }
        else{
            play=false;
            if(userWord === arrOfRealWord){
                // play=false;
                result.innerHTML= `congratulation, you are guessed right`; 
                button.innerHTML='Restart';
                input.classList.toggle('hidden');
                input.value='';
            }else{
                // play=false;
                result.innerHTML= `sorry, you are guessed Wrong`; 
                button.innerHTML='Restart';
                input.classList.toggle('hidden');
                input.value='';
            } 
        }
        
    }
}

button.addEventListener('click',start);

