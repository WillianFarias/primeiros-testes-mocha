class Math {
  //callback define que o metodo sera assincrono, mesmo eu tendo uma resposta errada
  //o teste vai passar pq o erro só virar apos a execucao do método
  sum(a, b, callback) {
    setTimeout(() => {
      callback(a + b);
    }, 2500);//tempo em segundos para o retorno da funcao assincrona
  }

  multiply(a, b) {
    return a * b;
  }

  printSum(req, res, a, b){
    res.load('index', a + b);
  }
}

module.exports = Math;