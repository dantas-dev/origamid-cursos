// const promesa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if(condicao) {
//     setTimeout(() => {
//       resolve({nome: 'Eduardo', idade: 25});
//     }, 1000);
//   } else {
//     reject(Error('deu ruim'));
//   }
// });

// const retorno = promesa.then((resolucao) => {
//   console.log(resolucao);
//   resolucao.job = 'Developer';
//   return resolucao;
// }).then((resolucao) => {
//   console.log(resolucao);
// }).catch((rejeitada) => {
//   console.log(rejeitada);
// }).finally(() => {
//   console.log('finalmente acabou');
// })

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('usuário logado');
  }, 1000);
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('dados carregados');
  }, 2000);
})

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
const carregouTudoRace = Promise.race([login, dados]);

carregouTudoRace.then((resolucao) => {
  console.log(resolucao);
});