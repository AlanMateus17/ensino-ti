# Guia Prático: Organização, Prototipagem e Reutilização no Desenvolvimento Web

Bem-vindo ao seu guia de boas práticas de desenvolvimento! Criar sites não é apenas escrever códigos que funcionam, mas sim escrever códigos organizados que você e sua equipe consigam entender, modificar e expandir facilmente no futuro. Neste documento, você aprenderá a estruturar seus projetos como um profissional de mercado.

#### Passo 1: Organizando a Estrutura de Pastas (A Raiz do Projeto)

Imagine tentar encontrar uma camiseta específica em um quarto onde todas as roupas estão jogadas no chão. Difícil, certo? O mesmo acontece com um site. Não podemos deixar arquivos HTML, imagens, estilos e scripts misturados na mesma pasta sem critério.
Sempre que iniciar um novo projeto, crie uma pasta principal (pasta raiz) com o nome do projeto e, dentro dela, crie a seguinte estrutura:


---
nome-do-seu-projeto/

│
├── css/            
├── js/             
├── img/            
├── components/     
│
└── index.html      
---


#### Veja abaixo a função exata de cada um desses elementos:
Pasta / Arquivo
O que deve conter?
 
### css/
Todos os arquivos de estilização e folhas de estilo (ex: style.css).

### js/
Arquivos contendo scripts de comportamento e interatividade (ex: main.js).

### img/
Imagens do site, fotografias, logotipos, ícones e ilustrações.

### components/

Pedaços menores de código HTML isolados que serão repetidos em várias páginas.

### index.html
A página principal do seu site. Atenção: ela deve ficar obrigatoriamente solta na raiz, e não dentro de pastas, pois os servidores procuram automaticamente por esse nome.

#### Passo 2: Metodologia de Prototipagem (Construindo o Esqueleto)

Prototipar em HTML significa validar a estrutura do seu site rapidamente, antes de se preocupar com cores, fontes ou designs complexos. É como montar a estrutura de concreto de um prédio antes de escolher a cor das paredes.

#### Para criar um protótipo eficiente, siga estas regras:

Use HTML Semântico: Não use apenas a tag <div> para tudo. Divida seu desenho em blocos lógicos estruturais:

<header> para o topo e cabeçalho.
<nav> para os menus de navegação.
<main> para o conteúdo principal e exclusivo da página.
<footer> para as informações de rodapé.
Conteúdo Dummy (Fictício): Não perca tempo escrevendo textos reais durante a fase de protótipo. Use textos gerados automaticamente (Lorem Ipsum) e serviços de imagens temporárias para simular o espaço visual ocupado.

#### Passo 3: 

Aprendendo a Reutilizar Código
Imagine que seu site possui 10 páginas e todas compartilham o mesmo menu superior. Se você precisar mudar o link de um menu, terá que alterar 10 arquivos diferentes? Isso gera erros e desperdiça tempo. Abaixo estão as duas estratégias que utilizaremos para evitar repetições desnecessárias.

#### Estratégia A: 

O Conceito de "Template Base"
Esta é a abordagem inicial ideal para quem está começando. Trata-se de um "copiar e colar planejado".

Crie um arquivo chamado template.html na raiz do seu projeto.

Insira nele as estruturas fixas que não mudam em nenhuma página, como o <header> com os menus e o <footer> com os direitos autorais.

Deixe o espaço do <main> totalmente em branco.
Quando precisar criar uma página nova, como "sobre.html" ou "contato.html", basta duplicar o arquivo template.html, renomeá-lo e preencher apenas o miolo do conteúdo interno.

#### Estratégia B: 

Modularização com Componentes Dinâmicos (Avançado)

Para evitar completamente a duplicação de códigos, podemos isolar trechos HTML e carregá-los dinamicamente nas páginas usando JavaScript estruturado de forma simples.

1. Crie o Componente Isolado: Dentro da pasta components/, crie um arquivo chamado header.html contendo apenas o trecho do menu, sem as tags básicas do HTML completo:
<nav>
    <a href="index.html">Home</a> | 
    <a href="sobre.html">Sobre Nós</a> | 
    <a href="contato.html">Contato</a>
</nav>


2. Prepare a Página Principal: No seu arquivo index.html, no local exato onde o menu deve aparecer, insira apenas uma marcação vazia identificada:
<div id="header-component"></div>


3. Faça a Injeção com JavaScript: No final do arquivo HTML (ou dentro de um arquivo na pasta js/), use a API Fetch do navegador para ler o componente e injetá-lo automaticamente na tela:
<script>
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-component').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o componente:', error));
</script>


Nota Didática Importante: Para testar a Estratégia B localmente no seu computador, você precisará usar uma extensão de servidor local no seu editor de código (como a "Live Server" no VS Code), pois os navegadores bloqueiam requisições de arquivos locais por questões de segurança (política de CORS).

Desafio Prático: O Fluxo de Trabalho (Sprints)
Para consolidar o que aprendeu, divida o desenvolvimento do seu próximo site nas seguintes fases bem definidas:

#### Sprint 1: 
Monte a estrutura física de diretórios no computador e configure seu arquivo index.html inicial utilizando tags estruturais limpas.

#### Sprint 2: 
Isole os elementos repetitivos (menus, rodapés) em arquivos individuais dentro da pasta de componentes.

#### Sprint 3: 
Crie as telas internas do projeto puxando os componentes criados ou usando a base estrutural padronizada, garantindo que o fluxo de navegação funcione perfeitamente.
