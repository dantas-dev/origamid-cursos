// window.history.pushState(null, null, 'teste.html');

// window.addEventListener('popstate', () => {
// 	{
// 		console.log('ola')
// 	}
// });

const links = document.querySelectorAll('a');

function handleClick(event) {
	event.preventDefault();
	fetchPage(event.target.href);
	window.history.pushState(null, null, event.target.href);
}


async function fetchPage(url) {
	document.querySelector('.content').innerHTML = 'Carregando...';
	const pageResponse = await fetch(url);
	const pageText = await pageResponse.text();
	replaceContent(pageText);
}

function replaceContent(newText) {
	const newHtml = document.createElement('div');
	newHtml.innerHTML = newText;

	const oldContent = document.querySelector('.content');
	const newContent = newHtml.querySelector('.content');

	oldContent.innerHTML = newContent.innerHTML;
	document.title = newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
	fetchPage(window.location.href);
});

links.forEach((link) => {
	link.addEventListener('click', handleClick);
});