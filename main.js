
(function(){
  // Formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Verificando se foi colocado o que foi pedido, independente
  // do resultado, irá ser mostrado na tela.
  contactForm.addEventListener('submit', function() {
    // Pegar os valores inseridos nos elementos de entrada
    
    let valuesInput = {
      'nome': nameInput.value,
      'email': emailInput.value,
      'mensagem': messageInput.value
    };

    let countErros = 0;

    for (let key in valuesInput) {
      if (valuesInput[key] === '') {
        window.alert('Por favor, preencha o campo de ' + key + ' no formulário.');
        countErros++;
      }
    }

    if (countErros === 0) {
      window.alert('Mensagem enviada com sucesso!!!');
    }

  });
})();
