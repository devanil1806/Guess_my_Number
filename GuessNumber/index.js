let secretNumber =Math.trunc(Math.random()*20)+1;
console.log(secretNumber)
let score =20
let highscore=0;

document.querySelector('.check').addEventListener('click',()=>{
 let guess =  Number( document.querySelector('.guess').value);
//  console.log(guess,typeof guess)
 if(!guess){
     document.querySelector('.message').textContent =`No number is selected`
    
 } else if(guess==secretNumber){
    document.querySelector('.message').textContent =`😄 Correct Guess 😄`;
    document.querySelector('body').style.backgroundColor ='#60B347'
    document.querySelector('.number').style.width ='30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score>highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

    }


 } else if(guess>secretNumber){
    if(score>1){
      document.querySelector('.message').textContent =`⬆ Too high...`
      score--
      document.querySelector('.score').textContent =score;

    }else{
      document.querySelector('.message').textContent =`😢 You lost the game`;
      document.querySelector('.score').textContent =0;

    }
    

 }else if(guess<secretNumber){

  
   if(score>1){
      document.querySelector('.message').textContent =`⬆ Too less...`
      score--
      document.querySelector('.score').textContent =score;

    }else{
      document.querySelector('.message').textContent =`😢 You lost the game`;
      document.querySelector('.score').textContent =0;

    }
    

}
 
})
document.querySelector('.again').addEventListener('click',()=>{
  document.querySelector('.message').textContent =`Guess Starting  😕`;
    document.querySelector('body').style.backgroundColor ='#000'
    document.querySelector('.number').style.width ='15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
     secretNumber =Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('.score').textContent =score;
  
})
