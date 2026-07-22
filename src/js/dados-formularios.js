// Arrays para campo de identificação do paciente
const identificationFields = [
    {
    id: 'name', 
    label: 'Nome Completo', 
    type: 'text',
    placeholder: 'Ex: João Silva',
    width: 80
    },
    {
        id: 'age',
        label: 'Anos',
        type: 'number',
        placeholder: 'Anos',
        width: 20
    },
    {
        id: 'maritalState',
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
    {
        id: 'gender',
        label: 'Gênero',
        type: 'radio',
        options: [{value: 'masculino', text: 'Masculino'}, {value: 'feminino', text: 'Feminino'}],
        width: 40
    },
    {
        id: 'profession',
        label: 'Profissão',
        type: 'text',
        placeholder: 'Ex: Professor',
        width: 60
    },
    {
        id: 'phone',
        label: 'Telefone',
        type: 'text',
        placeholder: '(XX) XXXXX-XXXX',
        width: 60
    },
    {
        id: 'address',
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


// criação dos inputs
function renderField(field) {
    const wrapper = document.createElement('div');
    wrapper.className = 'field';

    const labelEl = document.createElement('span');
    labelEl.className = 'field-label';
    labelEl.textContent = field.label;

    wrapper.appendChild(labelEl);

    if (field.type === 'select') {
        //ciração dos selects //
        const selectEl = document.createElement('select');
        selectEl.className = 'field-input';
        selectEl.id = field.id;
        // criação dos options //
        field.options.forEach(function(option) {
            const optionEl = document.createElement('option');
            optionEl.value = option.value;
            optionEl.textContent = option.text;
            selectEl.appendChild(optionEl);

            
        });
        wrapper.appendChild(selectEl); 
    } else if (field.type === 'radio') {
        //criação dos radio buttons //
        field.options.forEach(function(option) {
            const labelOption = document.createElement('label');

            const radioEl = document.createElement('input');
            radioEl.type = 'radio';
            radioEl.name = field.id;
            radioEl.value = option.value;

            const textoOption = document.createTextNode(option.text);
            labelOption.appendChild(radioEl);
            labelOption.appendChild(textoOption);

            wrapper.appendChild(labelOption);
            
        }); 
    } else if (field.type === 'textarea') {
        // criação dos textareas //
        const textAreaEl = document.createElement('textarea');
        textAreaEl.className = 'field-input';
        textAreaEl.id = field.id;

        //redimensionamento automatico dos textareas
        textAreaEl.addEventListener('input', function() { window.autoResize(this); });

        
        wrapper.appendChild(textAreaEl);
    } else {
        const inputEl = document.createElement('input');
        inputEl.className = 'field-input';
        inputEl.type = field.type;
        inputEl.placeholder = field.placeholder || '';
        inputEl.id = field.id;

        wrapper.appendChild(inputEl);
    }

    return wrapper;
}
//imprime os inputs nos campos de identificação
identificationFields.forEach(function(field){
    const element = renderField(field);
    document.getElementById('identification-section').appendChild(element);
});

//imprime os inputs nos campos de anamnese
clinicHistoricFields.forEach(function(field){
    const element = renderField(field);
    document.getElementById('clinicHistoric-section').appendChild(element);
});



