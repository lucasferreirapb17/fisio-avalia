function prepararCamposNoClone(clonedDocument) {
    const folha = clonedDocument.getElementById('folha-prontuario');

    if (!folha) {
        return;
    }

    folha.querySelectorAll('textarea').forEach(function(textarea) {
        const div = clonedDocument.createElement('div');

        div.className = textarea.className + ' campo-pdf campo-pdf-textarea';
        div.textContent = textarea.value || ' ';

        const estiloOriginal = textarea.getAttribute('style');

        if (estiloOriginal) {
            div.setAttribute('style', estiloOriginal);
        }

        div.style.height = 'auto';
        div.style.whiteSpace = 'pre-wrap';
        div.style.overflowWrap = 'anywhere';
        div.style.wordBreak = 'break-word';

        textarea.replaceWith(div);
    });

    folha.querySelectorAll('input').forEach(function(input) {
        if (input.type === 'checkbox') {
            if (input.checked) {
                input.setAttribute('checked', 'checked');
            } else {
                input.removeAttribute('checked');
            }

            return;
        }

        const div = clonedDocument.createElement('div');

        div.className = input.className + ' campo-pdf campo-pdf-input';
        div.textContent = input.value || input.placeholder || ' ';

        const estiloOriginal = input.getAttribute('style');

        if (estiloOriginal) {
            div.setAttribute('style', estiloOriginal);
        }

        div.style.whiteSpace = 'pre-wrap';
        div.style.overflowWrap = 'anywhere';
        div.style.wordBreak = 'break-word';

        input.replaceWith(div);
    });
}

window.gerarPDF = function(nomeArquivo = 'avaliacao-fisioterapeutica.pdf') {
    const elemento = document.getElementById('folha-prontuario');

    if (!elemento) {
        alert('Erro: não encontrei a folha do prontuário.');
        return;
    }

    if (typeof html2pdf === 'undefined') {
        alert('Erro: a biblioteca html2pdf não carregou.');
        return;
    }

    document.body.classList.add('gerando-pdf');

    setTimeout(function() {
        document.querySelectorAll('textarea').forEach(function(textarea) {
            window.autoResize(textarea);
        });

        const opcoes = {
            margin: [0, 0, 0, 0],

            filename: nomeArquivo,

            image: {
                type: 'jpeg',
                quality: 1.0
            },

            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                backgroundColor: '#ffffff',
                onclone: prepararCamposNoClone
            },

            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            },

            pagebreak: {
                mode: ['css', 'legacy'],
                avoid: ['.grid-row', '.cluster-box', '.assinaturas-row', '.cabecalho-doc']
            }
        };

        html2pdf()
            .set(opcoes)
            .from(elemento)
            .save()
            .then(function() {
                document.body.classList.remove('gerando-pdf');
            })
            .catch(function(error) {
                document.body.classList.remove('gerando-pdf');
                console.error(error);
                alert('Erro ao gerar PDF. Veja o console para mais detalhes.');
            });
    }, 100);
};