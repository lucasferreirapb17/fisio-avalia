# FisioAvalia

Sistema web para criação de avaliações fisioterapêuticas e geração de relatórios em PDF.

## Sobre o projeto

O **FisioAvalia** é um projeto desenvolvido com o objetivo de organizar fichas de avaliação fisioterapêutica em uma interface web simples, moderna e funcional.

O projeto foi criado como parte do meu processo de aprendizado em desenvolvimento front-end, utilizando HTML, CSS, JavaScript e Git/GitHub.

Além de servir como ferramenta de estudo, o FisioAvalia também representa um projeto de portfólio voltado para a área da saúde, conectando minha experiência como fisioterapeuta com o aprendizado em tecnologia.

## Funcionalidades

- Página inicial com acesso às fichas de avaliação
- Avaliação de membros inferiores
- Avaliação de membros superiores
- Avaliação de coluna vertebral
- Avaliação neurofuncional
- Formulários com campos de identificação, anamnese, exame físico e plano terapêutico
- Campos de texto com ajuste automático de altura
- Geração de relatório em PDF
- Layout responsivo para diferentes tamanhos de tela

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Biblioteca html2pdf.js

## Estrutura do projeto

```txt
fisio-avalia/
│
├── README.md
├── index.html
│
├── pages/
│   ├── avaliacao-mmii.html
│   ├── avaliacao-mmss.html
│   ├── avaliacao-coluna.html
│   └── avaliacao-neuro.html
│
└── src/
    ├── css/
    │   ├── global.css
    │   ├── home.css
    │   └── formulario.css
    │
    └── js/
        ├── form-utils.js
        └── pdf.js