let $kick = document.querySelector( '[data-js="kick"]' );
let $button = document.querySelector( '[data-js="btn-start"]' );
let $form = document.querySelector( '[data-js="form"]' );
let $h2Status = document.querySelector( '[data-js="status"]' );
let $attempt = document.querySelector( '[data-js="attempt"]' );
let $result = document.querySelector( '[data-js="result"]' );


const clear = () => $kick.value = '';
const restart = () => document.location.reload(true);
const playAgain = () => $button.style.display = 'flex';
const Guess = {
  max: 10,
  attemptNumber: 0,
  numberDrawn: function randomValue() {
    return Math.round( Math.random() * this.max );
  }
};

let numberDrawn = Guess.numberDrawn();
console.log( numberDrawn )

function updateAttempt ( attempt, value ) {
  $attempt.innerHTML = 'Tentativa: ' + value;
}

function handleSubmit( event ) {
  event.preventDefault();

  let kick = $kick.value;

  if ( !kick ){
    alert('Digite algum valor');
    return
  }

  updateAttempt( $attempt.value, ++Guess.attemptNumber );

  if (numberDrawn == kick ) {
    playAgain();
    $h2Status.innerHTML = 'Parabéns, você acertou!';
    $result.style.transition = '0.4s'
    $result.style.backgroundColor = '#37c978';
    $result.style.color = '#fff';
    $h2Status.style.color = '#fff';
    clear();
  }else if( numberDrawn > kick ) {
    $h2Status.innerHTML = 'O número é maior!';
    $h2Status.style.color = '#de4251'
    clear()
  }else if( numberDrawn < kick ) {
    $h2Status.innerHTML = 'O número é menor!';
    $h2Status.style.color = '#de4251'
    clear()
  }
}

$form.addEventListener( 'submit', handleSubmit, false );




