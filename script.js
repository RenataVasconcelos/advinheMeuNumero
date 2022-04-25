'use strict';

let numeroSecreto = Math.trunc(Math.random() * 21);
let pontuacao = 20;
let maiorPontuacao = 0;

const mensagemNaTela = function (mensagem) {
  document.querySelector('.message').textContent = mensagem;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    mensagemNaTela('Nenhum número válido!');

    //quando ganha
  } else if (guess === numeroSecreto) {
    mensagemNaTela('Número Correto!');
    document.querySelector('.number').textContent = numeroSecreto;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (pontuacao > maiorPontuacao) {
      maiorPontuacao = pontuacao;
      document.querySelector('.highscore').textContent = maiorPontuacao;
    }
    //quando guess é errado
  } else if (guess !== numeroSecreto) {
    if (pontuacao > 1) {
      mensagemNaTela(
        guess > numeroSecreto
          ? 'O número é mais baixo!'
          : 'O número é mais alto!'
      );
      pontuacao--;
      document.querySelector('.score').textContent = pontuacao;
    } else {
      mensagemNaTela('Você perdeu o jogo!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  pontuacao = 20;
  numeroSecreto = Math.trunc(Math.random() * 21);
  mensagemNaTela('Comece a advinhar...');
  document.querySelector('.score').textContent = pontuacao;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
