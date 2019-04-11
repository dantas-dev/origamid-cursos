// fetch('https://pokeapi.co/api/v2/pokemon/1')
// .then(response => response.json())
// .then(pokemons => {
// 	console.log(pokemons);
// })

// const url = 'https://jsonplaceholder.typicode.com/posts';
// const options = {
// 	method: 'POST',
// 	body: '{"title": "Javascript"}',
// 	headers: {
// 		"Content-Type": "application/json; charset=utf-8"
// 	}
// };

// fetch(url, options)
// .then(response => response.json())
// .then(json => console.log(json))

// CORS
const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com';

fetch(url)
.then(r => {r.text()})
.then(text => console.log(text))