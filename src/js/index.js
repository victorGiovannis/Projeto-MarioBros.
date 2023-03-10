/* 

OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer

OBJETIVO 2 - quando o usuário clicar no X devemos fechar o modal

OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer
    - PASSO 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS
    - PASSO 2 - dar um jeito de identificar quando o usuário clicar no botão
    - PASSO 3 - dar um jeito de pegar o elemtento da modal no JS
    - PASSO 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
    - PASSO 1 - dar um jeito de pegar o elemento de fechar modal usando o JS
    - PASSO 2 - dar um jeito de identificar quando o usuário clicar no X
    - PASSO 3 - fechar a modal
*/

/* console.log('mostrar o document' ,document);

console.log(document.querySelector(".button-trailer")); */

const buttonTrailer = document.querySelector(".button-trailer");
const buttonClosedModal = document.querySelector(".closed-modal");
/* console.log(buttonClosedModal) */
const video = document.getElementById("video");
/* console.log(video.src); */
const modal = document.querySelector(".modal");
/* console.log("mostrar o objeto da modal", modal); */
const videoLink = video.src;
/* console.log(videoLink); */

function alterarModal(){
    modal.classList.toggle("aberto");
    /* Refatoração de código*/
}

buttonTrailer.addEventListener("click", () => {
    /* console.log("clicou no botão de veja o trailer");  */
    alterarModal();
    video.setAttribute("src", videoLink);
});

buttonClosedModal.addEventListener("click", () => {
    alterarModal();
    video.setAttribute("src", "");
});