document.getElementById('btnad').addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
    let inTaf = document.getElementById('intaf').value.trim();
    if (!inTaf) return; // Não adiciona se estiver vazio

    let tarefa = document.createElement('li');
    tarefa.textContent = inTaf;

    let botoes = document.createElement('div');
    botoes.classList.add('action-btns');

    // Botão de marcar como feito
    let btnFeito = document.createElement('button');
    btnFeito.innerHTML = "✔";
    btnFeito.addEventListener('click', () => {
        tarefa.classList.toggle('feito');
    });

    // Botão de editar
    let btnEditar = document.createElement('button');
    btnEditar.innerHTML = "✏";
    btnEditar.addEventListener('click', () => {
        let novoTexto = prompt("Edite a tarefa:", tarefa.firstChild.textContent);
        if (novoTexto !== null && novoTexto.trim() !== "") {
            tarefa.firstChild.textContent = novoTexto.trim();
        }
    });

    // Botão de apagar
    let btnApagar = document.createElement('button');
    btnApagar.innerHTML = "🗑";
    btnApagar.addEventListener('click', () => {
        tarefa.remove();
    });

    botoes.appendChild(btnFeito);
    botoes.appendChild(btnEditar);
    botoes.appendChild(btnApagar);

    tarefa.appendChild(botoes);
    document.getElementById('outres').appendChild(tarefa);

    document.getElementById('intaf').value = "";
}
