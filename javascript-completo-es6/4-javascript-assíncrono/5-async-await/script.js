// async function puxarDados() {
// 	try {
// 		const responseDados = await fetch('./dados.json');
// 		const jsonDados = await responseDados.json();

// 		document.body.innerText = jsonDados.aula;
// 	}	
// 	catch(error) {
// 		console.log(error);
// 	}
// }

// puxarDados();

// async function puxarDados() {
// 		const responseDados = fetch('./dados.json');
// 		const responseClientes = fetch('./clientes.json');

// 		const jsonDados = await (await responseDados).json();
// 		const jsonClientes = await (await responseClientes).json();

// 		console.log(`A ${jsonClientes.nome} estuda ${jsonDados.aula}.`);
// }

// puxarDados();

// async function asyncSemPromise() {
// 	await setTimeout(() => {
// 		console.log('after 1s')
// 	}, 1000);
// 	console.log('acabou');
// }

// asyncSemPromise();

async function asyncComPromise() {
	await new Promise(resolve => {
		setTimeout(() => {
			console.log('after 1s');
			resolve();
		}, 1000);
	});

	console.log('acabou');
}

asyncComPromise();