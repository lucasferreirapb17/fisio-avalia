function trocarCamposPorTextoParaPDF() {
    const campos = document.querySelectorAll('#folha-prontuario input, #folha-prontuario textarea');
    const camposTrocados = [];

    campos.forEach(function(campo) {
        if (campo.type === 'checkbox') {
            return;
        }

        const texto = campo.value || campo.placeholder || ' ';
        const div = document.createElement('div');

        div.textContent = texto;

        if (campo.tagName.toLowerCase() === 'textarea') {
            div.className = campo.className + ' campo-pdf campo-pdf-textarea';
            div.style.minHeight = campo.offsetHeight + 'px';
        } else {
            div.className = campo.className + ' campo-pdf campo-pdf-input';
            div.style.minHeight = campo.offsetHeight + 'px';
        }

        const estiloOriginal = campo.getAttribute('style');

        if (estiloOriginal) {
            div.setAttribute('style', estiloOriginal);
        }

        div.style.height = 'auto';
        div.style.whiteSpace = 'pre-wrap';
        div.style.overflowWrap = 'anywhere';
        div.style.wordBreak = 'break-word';

        campo.parentNode.replaceChild(div, campo);

        camposTrocados.push({
            original: campo,
            substituto: div
        });
    });

    return camposTrocados;
}

function restaurarCamposOriginais(camposTrocados) {
    camposTrocados.forEach(function(item) {
        item.substituto.parentNode.replaceChild(item.original, item.substituto);
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

        const camposTrocados = trocarCamposPorTextoParaPDF();

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
                backgroundColor: '#ffffff'
            },

            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            },

            pagebreak: {
                mode: ['css', 'legacy'],
                before: ['.quebra-pagina-pdf'],
                avoid: [
                    '.sem-corte-pdf',
                    '.cluster-box', 
                    '.assinaturas-row', 
                    '.cabecalho-doc']
            }
        };

        html2pdf()
            .set(opcoes)
            .from(elemento)
            .save()
            .then(function() {
                restaurarCamposOriginais(camposTrocados);
                document.body.classList.remove('gerando-pdf');
            })
            .catch(function(error) {
                restaurarCamposOriginais(camposTrocados);
                document.body.classList.remove('gerando-pdf');
                console.error(error);
                alert('Erro ao gerar PDF. Veja o console para mais detalhes.');
            });
    }, 100);
};