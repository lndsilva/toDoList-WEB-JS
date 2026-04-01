const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
    const texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");
    li.innerText = texto;

    // marcar como concluída
    li.addEventListener("click", () => {
        li.classList.toggle("concluida");
    });

    // remover com duplo clique
    li.addEventListener("dblclick", () => {
        li.remove();
    });

    lista.appendChild(li);

    input.value = "";
}

