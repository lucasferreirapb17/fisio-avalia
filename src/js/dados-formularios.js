// Arrays para campo de identificação do paciente
const identificationFields = [
    {id: 'name',
    label: 'Nome Completo',
    type: 'text',
    placeholder: 'Ex: João Silva',
    width: 80
    },
    {id: 'age',
        label: 'Anos',
        type: 'number',
        placeholder: 'Anos',
        width: 20
    },
    {id: 'maritalState',
        label: 'Estado Civil',
        type: 'select',
        placeholder: 'Selecione',
        options: [
            {value: 'solteiro', text: 'Solteiro'},
            {value: 'casado', text: 'Casado'},
            {value: 'divorciado', text: 'Divorciado'},
            {value: 'viuvo', text: 'Viúvo'}
        ], width: 60
    },
    {id: 'gender',
        label: 'Gênero',
        type: 'radio',
        options: [{value: 'masculino', text: 'Masculino'}, {value: 'feminino', text: 'Feminino'}, {value: 'naoInformado', text: 'Não Informado'}],
        width: 40
    },
    {id: 'profession',
        label: 'Profissão',
        type: 'text',
        placeholder: 'Ex: Professor',
        width: 60
    },
    {id: 'phone',
        label: 'Telefone',
        type: 'text',
        placeholder: '(XX) XXXXX-XXXX',
        width: 60
    },
    {id: 'address',
        label: 'Endereço',
        type: 'text',
        placeholder: 'Ex: Rua das Flores, 123',
        width: 100
    }
]

// arrays para anamnese e histórico clinico //
const clinicHistoricFields = [
    {id:'chiefComplaint',
        label: 'Queixa Principal',
        type: 'textarea',
        width: 100
    },
    {id: 'medicalHistory',
        label: 'História Pregressa e Atual da Doença (HDA)',
        type: 'textarea',
        width: 100
    },
    {id: 'lifestyleAndFamilyHistory',
        label: 'Hábitos de vida / Antecedentes Familiares',
        type: 'textarea',
        width: 75
    },
    {id: 'previousTreatments',
        label: 'Tratamentos anteriores (cirurgias e tratamentos fisioterapeuticos)',
        type: 'textarea',
        width: 80
    }
]

// Diagnóstico e Conduta Terapêutica //
const diagnosisFields = [
    {
        id: 'diagnostic',
        label: 'Diagnóstico Fisioterapêutico',
        type: 'textarea',
        width: 100
    },
    {
        id: 'cbdf',
        label: 'Código CBDF',
        type: 'textarea',
        width: 100
    },
    {
        id: 'examResults',
        label: 'Exames Complementares / Laudos',
        type: 'textarea',
        width: 100
    },
    {
        id: 'treatmentPlan',
        label: 'Plano de Tratamento',
        type: 'textarea',
        width: 100
    },
    {
        id: 'attendanceNumber',
        label: 'Quantidade de Sessões',
        type: 'number',
        width: 30
    }
]

// arrays de EVA //
const vasFields = [
    {
        id: 'vasRest',
        label: 'Dor em Repouso:',
        type: 'number',
        width: 30,
        min: 0,
        max: 10,
        placeholder: '0 a 10'
    },
    {
        id: 'vasMovement',
        label: 'Dor em Movimento:',
        type: 'number',
        width: 30,
        min: 0,
        max: 10,
        placeholder: '0 a 10'
    }
]

// arrays para exame físico //
const inspectionFields = [
    {
        id: 'inspection',
        type: 'textarea',
        width: 100
    }
]

// clusters diagnósticos //
const clusterFieldsMmii = [
    {
        title: 'Quadril (IFA / Labrum)',
        tests: [
            {label: 'FADIR (+)', value: 'fadir'},
            {label: 'FABER (+)', value: 'faber'},
            {label: 'Teste de Thomas (+)', value: 'thomas'},
            {label: 'Hip Scour (+)', value: 'hipScour'}
        ]
    },
    {
        title: 'Joelho (Menisco e LCA)',
        tests: [
            {label: 'Thessaly (+)', value: 'thessaly'},
            {label: 'McMurray (+)', value: 'mcmurray'},
            {label: 'Compressão de Apley (+)', value: 'apley'},
            {label: 'Lachman / Gaveta Ant. (+)', value: 'lachman'}
        ]
    },
    {
        title: 'Tornozelo (Entorse / Fratura)',
        tests: [
            {label: 'Gaveta Anterior LTA (+)', value: 'gaveta'},
            {label: 'Estresse em Inversão (+)', value: 'inversao'},
            {label: 'Squeeze Test (Sindesmose)', value: 'squeeze'},
            {label: 'Regras de Ottawa (Dor óssea)', value: 'ottawa'}
        ]
    }
]
const clusterFieldsMmss = [
{
        title: 'Ombro (Impacto / Manguito / SLAP)',
        tests: [
            {label: 'Neer / Hawkins-Kennedy (+)', value: 'neerHawkins'},
            {label: 'Jobe (Empty Can) (+)', value: 'jobe'},
            {label: 'Teste de Apreensão (+)', value: 'apprehensionTest'},
            {label: 'O\'Brien (SLAP) (+)', value: 'obrien'}
        ]
    },
    {
        title: 'Cotovelo (Epicondilalgias / Lig.)',
        tests: [
            {label: 'Cozen (Epicond. Lateral) (+)', value: 'cozen'},
            {label: 'Mill (Epicond. Lateral) (+)', value: 'mill'},
            {label: 'Golfer\'s Elbow (Medial) (+)', value: 'golfersElbow'},
            {label: 'Estresse Valgo/Varo (+)', value: 'valgusVarusStress'}
        ]
    },
    {
        title: 'Punho e Mão (Nervoso / Tendíneo)',
        tests: [
            {label: 'Phalen (Túnel do Carpo) (+)', value: 'phalen'},
            {label: 'Tinel (Túnel do Carpo) (+)', value: 'tinel'},
            {label: 'Finkelstein (De Quervain) (+)', value: 'finkelstein'},
            {label: 'Teste de Allen (+)', value: 'allenTest'}
        ]
    }
]

// clusters coluna e core //
const clusterFieldsSpine = [
    {
        title: 'Cervical (Radiculopatia / Tensão)',
        tests: [
            {label: 'Teste de Spurling (+)', value: 'spurlingTest'},
            {label: 'Tração / Distração Cervical (Alívio)', value: 'cervicalDistraction'},
            {label: 'ULTT (Tensão Neural Sup.) (+)', value: 'ultt'},
            {label: 'Teste de Flexo-Rotação (+)', value: 'flexionRotationTest'}
        ]
    },
    {
        title: 'Lombar (Radiculopatia / Instab.)',
        tests: [
            {label: 'Lasègue / SLR (+)', value: 'lasegueSlr'},
            {label: 'Slump Test (+)', value: 'slumpTest'},
            {label: 'Prone Instability Test (+)', value: 'proneInstabilityTest'},
            {label: 'Teste de Schober (Mobilidade)', value: 'schoberTest'}
        ]
    },
    {
        title: 'Sacroilíaca (Cluster de Laslett)',
        tests: [
            {label: 'Thigh Thrust (+)', value: 'thighThrust'},
            {label: 'Distração / Compressão (+)', value: 'siDistractionCompression'},
            {label: 'Sacral Thrust (+)', value: 'sacralThrust'},
            {label: 'Teste de Gaenslen (+)', value: 'gaenslenTest'}
        ]
    }
]

// clusters neurofuncional //
const clusterFieldsNeuro = [
    {
        title: 'Tônus e Reflexos Patológicos',
        tests: [
            {label: 'Escala Modificada de Ashworth', value: 'modifiedAshworthScale'},
            {label: 'Reflexo Cutâneo Plantar (Babinski)', value: 'babinskiReflex'},
            {label: 'Reflexos Profundos (Hiper/Hiporreflexia)', value: 'deepTendonReflexes'},
            {label: 'Presença de Clônus / Espasticidade', value: 'clonusSpasticity'}
        ]
    },
    {
        title: 'Equilíbrio e Coordenação',
        tests: [
            {label: 'Index-Nariz / Calcanhar-Joelho (Dismetr.)', value: 'dysmetriaTests'}, // ou fingerToNose
            {label: 'Romberg / Romberg Sensibilizado', value: 'rombergTest'},
            {label: 'Escala de Equilíbrio de Berg (BBS)', value: 'bergBalanceScale'},
            {label: 'TUG Test (Timed Up and Go)', value: 'tugTest'}
        ]
    },
    {
        title: 'Sensório-Motor e Força',
        tests: [
            {label: 'Sensib. Superficial (Tátil, Dolorosa)', value: 'superficialSensation'},
            {label: 'Sensib. Profunda (Propriocepção)', value: 'proprioception'},
            {label: 'Força Muscular Global (Escala MRC 0-5)', value: 'mrcScale'},
            {label: 'Controle de Tronco e Sinergias', value: 'trunkControlSynergies'}
        ]
    }
];


// criação dos inputs //
function renderField(field) {
    const wrapper = document.createElement('div');
    wrapper.className = 'field';

    const labelEl = document.createElement('span');
    labelEl.className = 'field-label';
    labelEl.textContent = field.label;

    wrapper.appendChild(labelEl);

    if (field.type === 'select') {
        const selectEl = document.createElement('select');
        selectEl.className = 'field-input';
        selectEl.id = field.id;

        field.options.forEach(function(option) {
            const optionEl = document.createElement('option');
            optionEl.value = option.value;
            optionEl.textContent = option.text;
            selectEl.appendChild(optionEl);
        });

        wrapper.appendChild(selectEl);

    } else if (field.type === 'radio') {
        
        const radioGroup = document.createElement('div');
        
        field.options.forEach(function(option) {
            const labelOption = document.createElement('label');
            labelOption.className = "radio-item";

            const radioEl = document.createElement('input');
            radioEl.type = 'radio';
            radioEl.name = field.id;
            radioEl.value = option.value;

            const textoOption = document.createTextNode(option.text);
            labelOption.appendChild(radioEl);
            labelOption.appendChild(textoOption);

            
            radioGroup.appendChild(labelOption);
        });
        wrapper.appendChild(radioGroup);

    } else if (field.type === 'textarea') {
        const textAreaEl = document.createElement('textarea');
        textAreaEl.className = 'field-input';
        textAreaEl.id = field.id;

        textAreaEl.addEventListener('input', function() { window.autoResize(this); });

        wrapper.appendChild(textAreaEl);

    } else {
        const inputEl = document.createElement('input');
        inputEl.className = 'field-input';
        inputEl.type = field.type;
        inputEl.placeholder = field.placeholder || '';
        inputEl.id = field.id;

        if (field.min !== undefined) {
            inputEl.min = field.min;
        }

        if (field.max !== undefined) {
            inputEl.max = field.max;
        }

        wrapper.appendChild(inputEl);
    }

    return wrapper;
}

// criação dos clusters (grupos de checkbox)
function renderCluster(cluster) {
    const clusterWrapper = document.createElement('div');
    clusterWrapper.className = 'cluster-box';

    const titleEl = document.createElement('strong');
    titleEl.textContent = cluster.title;
    clusterWrapper.appendChild(titleEl);

    cluster.tests.forEach(function(test) {
        const labelOption = document.createElement('label');
        labelOption.className = 'cluster-item';

        const checkboxEl = document.createElement('input');
        checkboxEl.type = 'checkbox';
        checkboxEl.value = test.value;

        const textoTest = document.createTextNode(test.label);

        labelOption.appendChild(checkboxEl);
        labelOption.appendChild(textoTest);
        clusterWrapper.appendChild(labelOption);

        checkboxEl.name = cluster.title;
    });

    return clusterWrapper;
}

// imprime os inputs nos campos de identificação //
// Elementos de detecção de página (globais — usados tanto pra renderizar quanto pro PDF)
const secMMII = document.getElementById('clustersMmii-section');
const secMMSS = document.getElementById('clustersMmss-section');
const secNeuro = document.getElementById('clustersNeuro-section');
const secSpine = document.getElementById('clustersSpine-section');

function renderizarFichaNaTela() {
    // imprime os inputs nos campos de identificação
    identificationFields.forEach(function(field){
        const element = renderField(field);
        document.getElementById('identification-section').appendChild(element);
    });

    // imprime os inputs nos campos de anamnese
    clinicHistoricFields.forEach(function(field){
        const element = renderField(field);
        document.getElementById('clinicHistoric-section').appendChild(element);
    });

    // imprime campos de diagnóstico e conduta terapêutica
    diagnosisFields.forEach(function(field){
        const element = renderField(field);
        document.getElementById('diagnosis-section').appendChild(element);
    });

    // imprime escala EVA
    vasFields.forEach(function(field){
        const element = renderField(field);
        document.getElementById('vas-section').appendChild(element);
    });

    // imprime campos de exame físico
    inspectionFields.forEach(function(field){
        const element = renderField(field);
        document.getElementById('inspection-section').appendChild(element);
    });

    // imprime clusters (secMMII, secMMSS, secNeuro, secSpine já existem, declarados lá em cima)
    if (secMMII && typeof clusterFieldsMmii !== 'undefined') {
        document.querySelector('.titulo p').textContent = 'Membros Inferiores';
        document.title = 'Avaliação MMII - Prontuário';

        clusterFieldsMmii.forEach(function(cluster) {
            secMMII.appendChild(renderCluster(cluster));
        });
    } else if (secMMSS && typeof clusterFieldsMmss !== 'undefined') {
        document.querySelector('.titulo p').textContent = 'Membros Superiores';
        document.title = 'Avaliação MMSS - Prontuário';

        clusterFieldsMmss.forEach(function(cluster) {
            secMMSS.appendChild(renderCluster(cluster));
        });
    } else if (secNeuro && typeof clusterFieldsNeuro !== 'undefined') {
        document.querySelector('.titulo p').textContent = 'Neurofuncional';
        document.title = 'Avaliação Neurofuncional - Prontuário';

        clusterFieldsNeuro.forEach(function(cluster) {
            secNeuro.appendChild(renderCluster(cluster));
        });
    } else if (secSpine && typeof clusterFieldsSpine !== 'undefined') {
        document.querySelector('.titulo p').textContent = 'Coluna Vertebral';
        document.title = 'Avaliação Coluna Vertebral - Prontuário';

        clusterFieldsSpine.forEach(function(cluster) {
            secSpine.appendChild(renderCluster(cluster));
        });
    }
}

if (document.getElementById('folha-prontuario')) {
    renderizarFichaNaTela();
}
// coleta de dados para o pdf //


function montarEGerarPDF(dados) {
    const content = [];

    content.push({ text: 'Avaliação Fisioterapêutica', fontSize: 20, bold: true, margin: [0, 0, 0, 10] });

    content.push(...buildSection('1. Identificação do Paciente', identificationFields, dados.identification));
    content.push(...buildSection('2. Anamnese & História Clínica', clinicHistoricFields, dados.clinicHistoric));
    content.push(...buildSection('3. Escala Visual Analógica (EVA)', vasFields, dados.vas));

    if (dados.clusterFields) {
        content.push(...buildClusterSection(dados.clusterTitulo, dados.clusterFields, dados.clusterData));
    }

    content.push(...buildSection('3.2 Inspeção e Observações', inspectionFields, dados.inspection));
    content.push(...buildSection('4. Diagnóstico e Conduta Terapêutica', diagnosisFields, dados.diagnosis));

    content.push({
        columns: [
            { text: '_______________________\nFisioterapeuta Responsável\nNº de Inscrição no CREFITO', fontSize: 10 },
            { text: '_______________________\nPaciente ou Responsável Legal\nLocal e Data: ' + (dados.localData || ''), fontSize: 10 }
        ],
        margin: [0, 30, 0, 0]
    });

    const docDefinition = {
        header: function() {
            return { text: 'Avaliação Fisioterapêutica - Res. COFFITO nº 414/2012', fontSize: 9, margin: [40, 20, 40, 0] };
        },
        footer: function(currentPage, pageCount) {
            return { text: 'Página ' + currentPage + ' de ' + pageCount, alignment: 'center', fontSize: 8, margin: [0, 10, 0, 0] };
        },
        content: content
    };

    pdfMake.createPdf(docDefinition).download((dados.nomePaciente || 'avaliacao') + '.pdf');
}

function salvarAvaliacao(dados) {
    const listaSalva = localStorage.getItem('avaliacoesSalvas');
    const lista = listaSalva ? JSON.parse(listaSalva) : [];

    const registro = {
        id: Date.now(),
        nomePaciente: dados.nomePaciente || 'Paciente sem nome',
        tipoFicha: dados.clusterTitulo || 'Avaliação',
        data: new Date().toLocaleDateString('pt-BR'),
        dados: dados
    };

    lista.push(registro);

    localStorage.setItem('avaliacoesSalvas', JSON.stringify(lista));

    alert('Avaliação salva com sucesso!');
}

function gerarPDFCompleto() {
    const dados = {
        identification: collectData(identificationFields),
        clinicHistoric: collectData(clinicHistoricFields),
        vas: collectData(vasFields),
        diagnosis: collectData(diagnosisFields),
        inspection: collectData(inspectionFields),
        localData: document.getElementById('localData').value
    };

    if (secMMII) {
        dados.clusterFields = clusterFieldsMmii;
        dados.clusterTitulo = '3.1 Clusters Diagnósticos - Membros Inferiores';
        dados.clusterData = collectClusterData(clusterFieldsMmii);
    } else if (secMMSS) {
        dados.clusterFields = clusterFieldsMmss;
        dados.clusterTitulo = '3.1 Clusters Diagnósticos - Membros Superiores';
        dados.clusterData = collectClusterData(clusterFieldsMmss);
    } else if (secNeuro) {
        dados.clusterFields = clusterFieldsNeuro;
        dados.clusterTitulo = '3.1 Clusters Diagnósticos - Neurofuncional';
        dados.clusterData = collectClusterData(clusterFieldsNeuro);
    } else if (secSpine) {
        dados.clusterFields = clusterFieldsSpine;
        dados.clusterTitulo = '3.1 Clusters Diagnósticos - Coluna e Core';
        dados.clusterData = collectClusterData(clusterFieldsSpine);
    }

    dados.nomePaciente = dados.identification.name;

    salvarAvaliacao(dados);
    montarEGerarPDF(dados);
}

function collectData(fields) {
    const data = {};
    fields.forEach(function(field) {
        if (field.type === 'radio') {
            const radios = document.getElementsByName(field.id);
            let valorMarcado = '';
            radios.forEach(function(radio) {
                if (radio.checked) {
                    valorMarcado = radio.value;
                }
            });
            data[field.id] = valorMarcado;
        } else {
            const element = document.getElementById(field.id);
            data[field.id] = element.value;
        }
    });
    return data;
}

function collectClusterData(clusterFields) {
    const dataCluster = {};
    clusterFields.forEach(function(cluster) {
        const checkBoxs = document.getElementsByName(cluster.title);
        let lista = [];
        checkBoxs.forEach(function(checkbox) {
            if (checkbox.checked) {
                lista.push(checkbox.value);
            }
        });
        dataCluster[cluster.title] = lista;
    });
    return dataCluster;
}

function buildSection(titulo, fields, data) {
    const itens = [];
    itens.push({ text: titulo, fontSize: 14, bold: true, margin: [0, 10, 0, 5] });

    fields.forEach(function(field) {
        let valorExibido = data[field.id];

        if (field.options) {
            const opcaoEncontrada = field.options.find(function(opcao) {
                return opcao.value === data[field.id];
            });

            if (opcaoEncontrada) {
                valorExibido = opcaoEncontrada.text;
            }
        }

        itens.push({ text: field.label + ': ' + valorExibido });
    });

    return itens;
}

function buildClusterSection(titulo, clusterFields, dataCluster) {
    const itens = [];
    itens.push({ text: titulo, fontSize: 14, bold: true, margin: [0, 10, 0, 5] });
    clusterFields.forEach(function(cluster) {
        itens.push({ text: cluster.title, bold: true, margin: [0, 8, 0, 2] });
        const testesMarcados = dataCluster[cluster.title].join(', ') || 'Nenhum teste positivo';
        itens.push({ text: testesMarcados });
    });
    return itens;
}


// reimprimir avaliações //

function carregarAvaliacoesSalvas() {
    const listaSalva = localStorage.getItem('avaliacoesSalvas');
    const lista = listaSalva ? JSON.parse(listaSalva) : [];

    const container = document.getElementById('lista-avaliacoes');
    container.innerHTML = '';

    if (lista.length === 0) {
        container.innerHTML = '<p class="recent-empty">Nenhuma avaliação salva ainda.</p>';
        return;
    }

    lista.forEach(function(registro) {
        const card = document.createElement('div');
        card.className = 'recent-card';

        const nome = document.createElement('strong');
        nome.textContent = registro.nomePaciente;

        const info = document.createElement('span');
        info.textContent = registro.tipoFicha + ' — ' + registro.data;

        const btnReimprimir = document.createElement('button');
        btnReimprimir.textContent = 'Reimprimir';
        btnReimprimir.className = 'btn-reimprimir';
        btnReimprimir.addEventListener('click', function() {
            montarEGerarPDF(registro.dados);
        });

        card.appendChild(nome);
        card.appendChild(info);
        card.appendChild(btnReimprimir);
        container.appendChild(card);
    });
}

if (document.getElementById('lista-avaliacoes')) {
    carregarAvaliacoesSalvas();
}