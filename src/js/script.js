const listaTarefas = document.querySelector("#listaTarefas");
const tarefa = document.querySelector("#Tarefa");
const buttonAction = document.querySelector("#addTarefa");

buttonAction.addEventListener("click", function() {
    const textTarefa = tarefa.value;
    tarefa.value = "";
    listaTarefas.appendChild(addTarefa(textTarefa));
});

function addTarefa(textTarefa) {
    const elementLI = document.createElement("li");
    const elementSpan = document.createElement("span");

    elementSpan.setAttribute("id", "tarefa");
    elementSpan.textContent = textTarefa;
    elementLI.appendChild(elementSpan);

    return elementLI;
}
