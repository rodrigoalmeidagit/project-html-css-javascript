const $persons = document.querySelector( '[data-js="persons"]' );
const $starShips = document.querySelector( '[data-js="starships"]' );
const $planets = document.querySelector( '[data-js="planets"]' );

fillCounters();

function fillCounters(){
  Promise.all([
    getData( 'people/' ),
    getData( 'starships/' ),
    getData( 'planets/' )
  ])
  .then( data => {
    // console.log( data )
    $persons.style.fontSize = '5em';
    $starShips.style.fontSize = '5em';
    $planets.style.fontSize = '5em';

    $persons.innerHTML = data[ 0 ].count;
    $starShips.innerHTML = data[ 1 ].count;
    $planets .innerHTML = data[ 2 ].count;
  })
  .catch( err => console.log( 'Erro:', err ) )
}

function getData( param ) {
  return fetch( `https://swapi.dev/api/${ param }` )
          .then( res => res.json() )
}

function loadPhrase() {
  const $button = document.querySelector('[data-js="btn-phrases"]');
  const $phrase = document.querySelector('[data-js="phrase"]');
  console.log( $button, $phrase)
  return fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
        .then( data => data.json() )
        .then( json => {
          console.log( json )
          $button.innerHTML = 'Ver mais uma frase!';
          $phrase.innerHTML = `"${ json.content }"`;
        })
        .catch( err => console.log('Erro: ', err ) );
}