module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/chat' //Informe aqui o caminho da raiz do app
      : '/'
  }