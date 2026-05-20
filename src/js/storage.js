function obterCamposDaFicha() {
    return document.querySelectorAll('#folha-prontuario input, #folha-prontuario textarea');
}

window.salvarRascunho = function(chave) {
    const campos = obterCamposDaFicha();
    const dados = [];

    campos.forEach(function(campo, index) {
        const campoEhCheckbox = campo.type === 'checkbox';

        dados.push({
            index: index,
            tipo: campo.type,
            tag: campo.tagName.toLowerCase(),
            valor: campoEhCheckbox ? campo.checked : campo.value
        });
    });

    const rascunho = {
        dataSalvamento: new Date().toISOString(),
        totalCampos: dados.length,
        campos: dados
    };

    localStorage.setItem(chave, JSON.stringify(rascunho));

    alert('Rascunho salvo com sucesso!');
};

window.carregarRascunho = function(chave) {
    const dadosSalvos = localStorage.getItem(chave);

    if (!dadosSalvos) {
        alert('Nenhum rascunho encontrado para esta ficha.');
        return;
    }

    const rascunho = JSON.parse(dadosSalvos);
    const campos = obterCamposDaFicha();

    rascunho.campos.forEach(function(dado) {
        const campo = campos[dado.index];

        if (!campo) {
            return;
        }

        const campoEhCheckbox = campo.type === 'checkbox';

        if (campoEhCheckbox) {
            campo.checked = dado.valor;
        } else {
            campo.value = dado.valor;
        }
    });

    document.querySelectorAll('textarea').forEach(function(textarea) {
        window.autoResize(textarea);
    });

    alert('Rascunho carregado com sucesso!');
};

window.limparRascunho = function(chave) {
    const confirmar = confirm('Tem certeza que deseja apagar o rascunho desta ficha?');

    if (!confirmar) {
        return;
    }

    localStorage.removeItem(chave);

    alert('Rascunho removido com sucesso!');
};