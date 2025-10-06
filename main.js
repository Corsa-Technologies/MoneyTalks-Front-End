let nome = "Pedro Henrique de Souza"; //Atualizar puxando o nome do banco de dados
document.getElementById("name").innerHTML = nome;

let sald = 1500.75; //Atualizar puxando o saldo do banco de dados
document.getElementById("saldo").textContent = `R$: ${sald}`;


//Sistema de nome do arquivo e enviado------------------------------------------
const fileInput = document.getElementById('doc');
  const fileNameDisplay = document.getElementById('fileNameDisplay');

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      fileNameDisplay.textContent = `${fileInput.files[0].name}`;} 
      else {
      fileNameDisplay.textContent = 'Nenhum arquivo selecionado';}
      });
//---------------------------------------------------------------------------------


function toggleSecao() {
  const secao = document.getElementById("minhaSecao");
  if (secao.style.display === "none") {
    secao.style.display = "block";
  } else {
    secao.style.display = "none";
  }
}




    document.querySelectorAll('.btn-excluir').forEach(button => {
  button.addEventListener('click', function () {
    const item = this.closest('.div9');
    if (!item) return;
    // confirmação simples
    if (!confirm('Deseja excluir este item?')) return;
    // remove do DOM
    item.remove();
  });
});
// Fim do código de exclusão de itens do histórico ------------------------------