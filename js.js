// Open the sidebar
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.style.left = sidebar.style.left === '0px' ? '-100%' : '0px';
});

// Open the file preview modal
function openPreview(fileUrl) {
  const modal = document.getElementById('filePreviewModal');
  const iframe = document.getElementById('filePreviewFrame');
  iframe.src = fileUrl; // Load the file URL into the iframe
  modal.style.display = 'flex';
}

// Close the file preview modal
function closePreview() {
  const modal = document.getElementById('filePreviewModal');
  const iframe = document.getElementById('filePreviewFrame');
  modal.style.display = 'none';
  iframe.src = ''; // Clear the iframe content
}
