// recuperando o tbody
const tbody = document.querySelector('tbody');

//pegar o formulário
document.querySelector('form').addEventListener('submit', function(e){

    //cancelar o evento padrao
    e.preventDefault();

    //recuperar os campos
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];
    

    // criar a tr
    const tr = document.createElement('tr');

    // percorrer o Array para ppegar as informações e criar o td
    campos.forEach(campo => {

        //criar uma td
        const td = document.createElement('td');

        //pegar valor do campo e passar para a td
        td.textContent = campo.value;

        //atribuir a td ao elemento tr
        tr.appendChild(td);
    })

    // colocar a tr dentro do tbody
    tbody.appendChild(tr);

    // limpar os campos do formulário
    this.reset();


});








