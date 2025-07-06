const botao = document.querySelector("#botao");
const divMensagem = document.querySelector("#mensagem");

const frases = [
    "Acredite no seu potencial. Cada passo, por menor que seja, te leva mais perto do seu objetivo.",
    "Transforme desafios em oportunidades. As maiores lições vêm das maiores dificuldades.",
    "Não espere pela motivação, crie-a. Comece, e a energia surgirá com o movimento.",
    "Seja a mudança que você deseja ver. Sua atitude define seu caminho e influencia o mundo ao seu redor.",
    "Persista. O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta."
]

let indexFrase = 0;

botao.addEventListener("click", (e) => {

    divMensagem.innerHTML = frases[indexFrase];

    if(indexFrase === 4) {
        indexFrase = 0;
    } else {
        indexFrase++;
    }
});