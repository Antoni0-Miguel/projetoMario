const botaoTrailer = document.querySelector(".botaoTrailer");
const botaoFecharModal = document.querySelector(".fecharModal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkVideo = video.src;

function alternarModal() {
  modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", alternarModal){
  video.setAttribute("src", linkVideo);
});

botaoFecharModal.addEventListener("click", alternarModal){
  video.setAttribute("src", "");
});
