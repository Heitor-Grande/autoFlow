// Preenche automaticamente a data de hoje
const hoje = new Date().toISOString().split("T")[0]
document.getElementById("dataHoje").value = hoje