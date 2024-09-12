function openModal(src) {
  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('modalImage');
  modal.style.display = 'flex'; // Ensure the modal uses flex display
  modalImg.src = src;
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// Close the modal if the user clicks outside the image
window.onclick = function(event) {
  var modal = document.getElementById('imageModal');
  if (event.target == modal) {
    closeModal();
  }
}
