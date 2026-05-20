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
                backgroundColor: '#ffffff'
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
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