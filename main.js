document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('tarefa');
    var lista = document.getElementById('lista-tarefa');

    form.addEventListener('submit', function(event) {
    event.preventDefault();

    var tarefaText = document.getElementById('adicionar-tarefa').value;

    if (tarefaText.trim() !== '') {
        var novoItem = document.createElement('li');
        novoItem.textContent = tarefaText;
        lista.appendChild(novoItem);

        document.getElementById('adicionar-tarefa').value = '';
    }
    });

    lista.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.style.textDecoration = 'line-through';
    }
    });
});
