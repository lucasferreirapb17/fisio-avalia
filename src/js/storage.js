function obterCamposDaFicha(){
    return document.querySelectorAll('#folha-prontuario input, #folha-prontuario texttarea');

}

window.slavarRascunho = function(chave){
    const campos = obterCamposDaFicha();
    const dados = [];

    campos.forEach(function(campo) {
        const campoEhCheckbox = campo.type === 'checkbox';

        dados.push({
            tipo: campo.type,
            valor: campoEhCheckbox ? campo.checked : campo.value
        });
    });

    localStorage.setItem(chave, JSON.stringfy(dados));

    alert('Rascunho salvo com sucesso!');
};

window.carregarRascunho = function(chave) {
    const dadosSalvos = localStorage.getItem(chave);

    if (!dadosSalvos) {
        alert('Nenhum rascunho encontrado.');
        return;
    }

    const campos = obterCamposDaFicha();
    const dados = JSON.parse(dadosSalvos);

    campos.forEach(function(campp, index) {
        const dado = dados[index];

        if (!dado) {
            return;
        }

        const campoEhCheckbox = campo.type === 'checkbox';

        if (campoEhCheckbox){
            campo.checked = dado.valor;
        } else {
            campo.value = dado.valor;
        }
    });

    document.querySelectorAll('textarea').forEach(function(textarea) {
        window.autoResize(textarea);
    });

    alert('Rascunho Carregado com sucesso!');
};

window.limparRascunho = function(chave) {
    localStorage.removeItem(chave);

    alert('Rascunho limpo com sucesso!');

};