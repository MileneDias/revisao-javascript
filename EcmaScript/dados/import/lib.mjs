//Um módulo JavaScript que exporta funcionalidades.
//Permite que outros aplicativos interpretem automaticamente que o script em questão é um módulo JavaScript

export const saudacao = () => {
    //retorna uma data de acordo com o sistema operacional
    let data = new Date().toLocaleDateString()
    return `Olá, seja bem vindo! Hoje é ${data}`
}

