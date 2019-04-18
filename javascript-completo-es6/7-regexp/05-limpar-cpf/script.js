const cpfsList = document.querySelectorAll('.cpf li');

const limparCPF = (cpf) => cpf.replace(/\D/g, '');

const elementsInnerText = ([...elements]) => elements.map(element => element.innerText);

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPFS = (cpfs) => cpfs.map(limparCPF).map(construirCPF);

const substituirCPFS = (cpfElements) => {
  const cpfs = elementsInnerText(cpfElements);
  const cpfsFormatados = formatarCPFS(cpfs);
  console.log(cpfsFormatados);

  cpfElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
}

// substituirCPFS(cpfsList);