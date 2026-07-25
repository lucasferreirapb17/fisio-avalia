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
        label: 'Hiustória Pregressa e Atual da Doença (HDA)',
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
        label: 'Inspeção Visual',
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
    });

    return clusterWrapper;
}

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

// imprime clusters //
    // cluster MMII //
const secMMII = document.getElementById('clustersMmii-section');
const secMMSS = document.getElementById('clustersMmss-section');
const secNeuro = document.getElementById('clustersNeuro-section');
const secSpine = document.getElementById('clustersSpine-section');

if (secMMII && typeof clusterFieldsMmii !== 'undefined') {
    clusterFieldsMmii.forEach(function(cluster) {
        secMMII.appendChild(renderCluster(cluster));
    });
} else if (secMMSS && typeof clusterFieldsMmss !== 'undefined') {
    clusterFieldsMmss.forEach(function(cluster) {
        secMMSS.appendChild(renderCluster(cluster));
    });
} else if (secNeuro && typeof clusterFieldsNeuro !== 'undefined') {
    clusterFieldsNeuro.forEach(function(cluster) {
        secNeuro.appendChild(renderCluster(cluster));
    });

}else if (secSpine && typeof clusterFieldsSpine !== 'undefined') {
    clusterFieldsSpine.forEach(function(cluster) {
        secSpine.appendChild(renderCluster(cluster));
    });
}
