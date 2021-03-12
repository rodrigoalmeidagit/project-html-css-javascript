const $button = document.querySelector( '[data-js="btn-login"]' );
const $eyeOn = document.querySelector( '[data-js="eye-on"]' );
const $eyeOff = document.querySelector( '[data-js="eye-off"]' );
const $input = document.querySelector( '[data-js="input"]' );
$button.addEventListener( 'click', loginHelper(), false );

function showPassword() {  
  if( $eyeOn.style.display === 'none' ) {
    $eyeOn.style.display = 'block';
    $eyeOff.style.display = 'none';
    $input.type = 'text';
  } else {
    $eyeOn.style.display = 'none';
    $eyeOff.style.display = 'block';
    $input.type = 'password';
  }
}

function loginHelper() {
  return function ( event ) {
    event.preventDefault();
    alert( 'Logado!' )
  };
}

