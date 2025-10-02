const fileInput = document.getElementById('myFile');
  const fileNameDisplay = document.getElementById('fileNameDisplay');

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      fileNameDisplay.textContent = `${fileInput.files[0].name}`;} 
      else {
      fileNameDisplay.textContent = 'Nenhum arquivo selecionado';}
      });

