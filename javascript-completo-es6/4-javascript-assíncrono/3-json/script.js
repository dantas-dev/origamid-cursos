fetch('./dados.json')
.then( r => r.json())
.then( body => {
	body.forEach((item) => {
		console.log(item.aula);
	});
})

const jsonText = '[{"id": 1,"aula": "Javascript","tempo": "25min"},{"id": 2,"aula": "HTML","tempo": "15min"}]';

const obj = JSON.parse(jsonText);
console.log(obj);

const configuracoes = {
	player: "google",
	tempo: 25.5,
	aula: "2.1 Javascript"
}

const strConfig = JSON.stringify(configuracoes);
console.log(strConfig);

localStorage.config = strConfig;

console.log(JSON.parse(localStorage.config));