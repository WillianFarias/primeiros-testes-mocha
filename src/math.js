class Math {
  //callback define que o metodo sera assincrono, mesmo eu tendo uma resposta errada
  //o teste vai passar pq o erro só virar apos a execucao do método
  sum(a, b, callback) {
    setTimeout(() => {
      callback(a + b);
    }, 0);
  }
}

module.exports = Math;