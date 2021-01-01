const toggleBtn = document.getElementById("toggler-icon-modal");
const modal = document.getElementById("myModal");
const modalDialog = document.getElementById("myModalDialog")


toggleBtn.addEventListener('click', () => {
  modal.classList.add("modal-show");
  modalDialog.classList.add("modal-dialog-show");
})


modal.addEventListener('click', (e) => {
  if(e.target == modal){
    modalDialog.classList.remove("modal-dialog-show");
    modal.classList.remove("modal-show");
  }
});
