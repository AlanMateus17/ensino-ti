# Atividades Teóricas — Técnico em Informática

Professor: Alan Mateus · 11/11/2026

135 questões, 15 por matéria, todas teóricas — nenhuma exige computador, VM, Tinkercad, terminal ou bancada. Elas foram tiradas das atividades das 20 apostilas de cada matéria deste repositório; as que eram práticas (montar, instalar, executar, medir, programar) foram reescritas para cobrar o conceito por trás da prática. Cada questão indica a aula de origem. Sem gabarito.

## Sumário

- [Lógica de Programação (1º ano)](#lógica-de-programação-1º-ano)
- [Arquitetura e Manutenção de Computadores (2º ano)](#arquitetura-e-manutenção-de-computadores-2º-ano)
- [HTML/CSS (2º ano)](#htmlcss-2º-ano)
- [Sistemas Operacionais (2º ano)](#sistemas-operacionais-2º-ano)
- [POO/Java (2º ano)](#poojava-2º-ano)
- [Programação Web (2º ano)](#programação-web-2º-ano)
- [Noções de Robótica (2º ano)](#noções-de-robótica-2º-ano)
- [Laboratório de Hardware (3º ano)](#laboratório-de-hardware-3º-ano)
- [Laboratório de Software (3º ano)](#laboratório-de-software-3º-ano)

## Lógica de Programação (1º ano)

1. **(Aula 01)** O que é um algoritmo? Explique por que a ordem dos passos é importante, usando como exemplo um algoritmo de fazer sanduíche em que o passo "Coma o sanduíche" aparece antes de "Pegue o pão".
2. **(Aula 02)** Explique a função de cada símbolo de um fluxograma: terminal (início/fim), entrada/saída, processamento e decisão.
3. **(Aula 03)** O que significa o modelo Entrada → Processamento → Saída? No algoritmo que lê duas notas, calcula `media <- (nota1 + nota2) / 2` e escreve a média, identifique qual linha é cada etapa.
4. **(Aula 04)** Qual a diferença entre variável e constante? Classifique cada item: o valor de PI, a temperatura atual, o número de meses do ano e o nome digitado pelo usuário.
5. **(Aula 04)** Para um cadastro de produto com nome, preço, quantidade e disponível (sim/não), qual tipo de dado é mais adequado para cada campo? Justifique.
6. **(Aula 05)** Explique a precedência dos operadores aritméticos. Por que `5 + 2 * 3` e `(5 + 2) * 3` têm resultados diferentes? Qual o resultado de cada uma?
7. **(Aula 05)** O que faz o operador `%` (MOD)? Qual o resultado de `10 % 3` e para que esse operador serve ao verificar se um número é par?
8. **(Aula 06)** Sendo nota = 6.5, idade = 17 e ativo = verdadeiro, diga se cada expressão é V ou F e explique: `nota >= 5 E nota < 7`, `idade >= 18 OU ativo` e `NÃO ativo`.
9. **(Aula 07)** O que é teste de mesa e por que ele ajuda a encontrar erros? Explique por que `media <- a + b / 2` não calcula a média corretamente.
10. **(Aula 08 e 09)** Qual a diferença entre a estrutura condicional simples (SE) e a composta (SE-SENÃO)? Dê um exemplo de situação para cada uma.
11. **(Aula 10)** Por que um classificador de IMC (abaixo do peso, normal, sobrepeso, obesidade) precisa de condicionais aninhadas ou múltipla escolha, e não de um único SE-SENÃO?
12. **(Aula 12, 13 e 14)** Compare os laços PARA, ENQUANTO e REPITA-ATÉ. Em qual situação cada um é mais indicado? Qual deles sempre executa o bloco pelo menos uma vez?
13. **(Aula 15)** Qual a diferença entre um contador e um acumulador? Explique o papel de cada um em um algoritmo que calcula a média das notas de uma turma.
14. **(Aula 17)** Cite três boas práticas de programação (nomes de variáveis, indentação, comentários etc.) e explique por que o código `let a=prompt('');let b=prompt('');` é difícil de entender.
15. **(Aula 18)** O que é modularização? Cite duas vantagens de dividir um algoritmo de desconto em funções separadas para ler o valor, calcular o desconto e exibir o resultado.

## Arquitetura e Manutenção de Computadores (2º ano)

1. **(Aula 01)** Usando a analogia da água encanada, explique o que são tensão, corrente e resistência.
2. **(Aula 02)** Explique as quatro etapas do funcionamento do computador (entrada, processamento, armazenamento e saída) e classifique: monitor, SSD, processador, teclado e caixa de som.
3. **(Aula 03)** Por que um computador precisa de memória RAM e de HD/SSD ao mesmo tempo, se os dois "guardam" dados?
4. **(Aula 04)** Por que a placa-mãe é chamada de componente central do computador? Cite três componentes que se conectam a ela e onde cada um é encaixado.
5. **(Aula 04)** Qual a principal diferença entre os fatores de forma ATX, Micro-ATX e Mini-ITX?
6. **(Aula 05)** Explique o que são clock, núcleos e threads de um processador. Para editar vídeo, seria melhor uma CPU de 4 núcleos a 4.0 GHz ou uma de 8 núcleos a 3.0 GHz? Justifique.
7. **(Aula 06)** Por que a memória RAM perde os dados quando o computador é desligado? Qual a função da memória cache?
8. **(Aula 07)** Compare HD e SSD em velocidade, preço e capacidade. Por que a desfragmentação não deve ser feita em SSDs?
9. **(Aula 08)** Descreva, na ordem correta, o que acontece entre clicar no ícone de um jogo e as imagens aparecerem na tela, citando SO, SSD, RAM e CPU.
10. **(Aula 09)** Cite três sinais de problemas de refrigeração e explique o que é thermal throttling.
11. **(Aula 10)** Classifique em entrada, saída ou entrada/saída e justifique: impressora, scanner, pen drive, webcam e touchscreen.
12. **(Aula 11)** O que é descarga eletrostática (ESD)? Por que ela é perigosa e quais cuidados o técnico deve tomar ao montar um computador?
13. **(Aula 12 e 13)** Qual a diferença entre manutenção preventiva e diagnóstico de falhas? Cite três consequências de um computador que nunca recebe manutenção preventiva.
14. **(Aula 15)** O que é arquivo de paginação (swap) e por que ele deixa o computador lento quando a RAM está cheia?
15. **(Aula 18)** O que é BIOS/UEFI? Qual configuração deve ser alterada para instalar um sistema a partir de um pen drive, e o que é o Secure Boot?

## HTML/CSS (2º ano)

1. **(Aula 01)** Quais são as tags que formam a estrutura básica de um documento HTML5 e qual a função de cada uma (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)?
2. **(Aula 01)** Para que serve a ferramenta do desenvolvedor (F12) do navegador e o que é possível observar na aba Elements?
3. **(Aula 02)** Qual a função das meta tags `description` e `author` e da tag `<link>` dentro do `<head>`?
4. **(Aula 02 e 08)** O que são tags semânticas? Explique a função de `header`, `nav`, `main`, `aside` e `footer` em uma página de notícias.
5. **(Aula 03)** Qual a diferença entre `strong` e `em`, e para que servem `mark` e `blockquote`? Por que se deve usar apenas um `h1` por página?
6. **(Aula 04)** Qual a diferença entre lista ordenada (`ol`) e não ordenada (`ul`)? Em uma tabela, qual a função de `thead`, `tbody`, `th`, `td` e do atributo `colspan`?
7. **(Aula 05)** Explique a diferença entre link para outra página, link âncora (`#servicos`), link de e-mail (`mailto:`) e link externo com `target="_blank"`.
8. **(Aula 06)** Por que o atributo `alt` é obrigatório nas imagens? Qual a função de `figure` e `figcaption`?
9. **(Aula 07)** Em um formulário, qual a diferença entre os campos `radio`, `checkbox` e `select`? Para que serve o atributo `required`?
10. **(Aula 09)** O que é SEO e o que é acessibilidade? Cite três verificações que melhoram os dois ao mesmo tempo.
11. **(Aula 10)** O que são seletores CSS? Explique a diferença entre seletor de tag, de classe (`.`) e de id (`#`), e o que é a pseudo-classe `:hover`.
12. **(Aula 11)** Explique as quatro camadas do Box Model (content, padding, border e margin). Qual a diferença entre padding e margin?
13. **(Aula 13 e 14)** O que são variáveis CSS (ex.: `--cor-primaria`) e qual a vantagem de usá-las? Qual a diferença entre `position: relative`, `absolute` e `fixed`?
14. **(Aula 15 e 16)** Compare Flexbox e CSS Grid. Em que situação cada um é mais indicado? Para que serve o `flex-wrap: wrap`?
15. **(Aula 17 e 18)** O que é design responsivo e qual o papel das media queries? Qual a diferença entre `transition` e `@keyframes` nas animações CSS?

## Sistemas Operacionais (2º ano)

1. **(Aula 01)** O que é um sistema operacional? Indique qual função do SO está em ação: reconhecer um pendrive, manter 3 programas abertos ao mesmo tempo e salvar um arquivo na pasta Documentos.
2. **(Aula 01)** Por que o Linux é gratuito e o Windows não? Explique a diferença entre software livre e software proprietário.
3. **(Aula 02)** Coloque em ordem e explique os passos de instalação de um SO: baixar a ISO, gravar no pen drive, configurar o BIOS, configurar usuário e reiniciar. O que é uma imagem ISO?
4. **(Aula 03)** Um usuário quer instalar um programa, criar uma conta para um familiar e atualizar o sistema. Em que ordem essas tarefas devem ser feitas? Justifique.
5. **(Aula 04)** Cite duas diferenças entre a área de trabalho do Windows e a de uma distribuição Linux.
6. **(Aula 05)** Explique a diferença entre host, guest (VM) e hypervisor. Cite duas situações em que um técnico usaria virtualização.
7. **(Aula 05 e 06)** O que é um snapshot? Por que não é recomendado alocar mais de 50% da RAM do host para uma VM?
8. **(Aula 07)** Qual a diferença entre a instalação normal e a instalação mínima de um sistema operacional?
9. **(Aula 08)** Quais as vantagens de instalar um programa por um gerenciador de pacotes (como o `apt`) em vez de baixar um instalador manualmente?
10. **(Aula 09 e 10)** O que são aplicativos padrão do sistema? Por que desativar programas na inicialização deixa o computador mais rápido para ligar?
11. **(Aula 11)** Para que serve a limpeza de disco e que tipo de arquivo ela remove? Por que não se deve desfragmentar um SSD?
12. **(Aula 12)** O que é um ponto de restauração? Explique a regra 3-2-1 de backup.
13. **(Aula 13 e 14)** Quais recursos o Gerenciador de Tarefas monitora (CPU, RAM, disco, rede)? O que são logs do sistema e como ajudam a diagnosticar problemas?
14. **(Aula 15)** O Android usa o kernel Linux. O que isso significa e qual a função do kernel em um sistema operacional?
15. **(Aula 16, 17 e 19)** Qual a diferença entre manutenção preventiva e corretiva? Dê um exemplo de cada, incluindo um dispositivo móvel.

## POO/Java (2º ano)

1. **(Aula 01)** Para representar um produto com nome, preço e quantidade em estoque, qual tipo Java (`String`, `double`, `int`) é adequado para cada atributo? Justifique.
2. **(Aula 02 e 07)** Explique a diferença entre `if/else`, `else if` e `switch`. Em que situação o `switch` é mais adequado?
3. **(Aula 03 e 10)** Qual a diferença entre os laços `for`, `while` e `do-while`? Em qual deles o bloco executa pelo menos uma vez?
4. **(Aula 04)** O que é uma classe e o que é um objeto? Explique a relação entre os dois usando o exemplo de uma classe `Aluno`.
5. **(Aula 05)** Explique os operadores aritméticos em Java. Por que a divisão `7 / 2` resulta em 3 quando os dois valores são `int`?
6. **(Aula 06)** Qual a diferença entre casting implícito e explícito? Ao converter o `double` 7.8 para `int`, por que o resultado é 7 e não 8?
7. **(Aula 06)** Para que servem métodos como `Double.parseDouble()` e `Integer.parseInt()`? Por que são necessários quando os dados chegam como texto?
8. **(Aula 08)** Explique os operadores lógicos `&&`, `||` e `!`. Um aluno é aprovado se nota >= 7.0 **e** frequência >= 75. Por que aqui se usa `&&` e não `||`?
9. **(Aula 11)** O que é um array? Por que o primeiro índice é 0 e o que acontece ao acessar uma posição que não existe?
10. **(Aula 12)** O que é herança? Em uma hierarquia `Veiculo` → `Carro` e `Moto`, explique o que é superclasse, subclasse e a palavra-chave `extends`.
11. **(Aula 13)** O que é polimorfismo? Por que é possível guardar carros e motos em um mesmo array do tipo `Veiculo[]`? Para que serve o `instanceof`?
12. **(Aula 14)** Qual a diferença entre classe abstrata e interface? Por que não é possível instanciar uma classe abstrata como `Forma`?
13. **(Aula 15)** O que é acoplamento entre classes? Por que criar `new EmailService()` dentro de `Notificador` gera alto acoplamento e como uma interface reduz isso?
14. **(Aula 16)** Qual a diferença entre `ArrayList` e `HashMap`? Dê um exemplo de uso para cada um.
15. **(Aula 17 e 19)** O que é uma exceção e qual a função de `try`, `catch` e `finally`? Cite também os quatro pilares da POO.

## Programação Web (2º ano)

1. **(Aula 01)** Explique a diferença entre cliente e servidor. Classifique: animação CSS, consulta ao banco para verificar login, formulário HTML e script PHP que gera a página.
2. **(Aula 01)** Descreva o que acontece desde que você digita `www.google.com` no navegador até a página aparecer na tela (DNS, requisição HTTP, resposta).
3. **(Aula 02)** O que é o padrão MVC? Explique o papel do Model, da View e do Controller e por que separar o código em camadas facilita a manutenção.
4. **(Aula 03)** Qual a diferença entre `let`, `const` e `var`? Quais são os tipos `string`, `number` e `boolean` e para que serve o `typeof`?
5. **(Aula 04)** Explique como uma estrutura `if / else if / else` classifica uma média como Aprovado (>= 7), Recuperação (>= 5) ou Reprovado.
6. **(Aula 05)** O que é uma função? Qual a diferença entre parâmetro e retorno, e entre uma função tradicional e uma arrow function?
7. **(Aula 06)** O que é o DOM? Para que servem `document.querySelector()` e `addEventListener()`?
8. **(Aula 07)** Para que serve `classList.toggle()` em um menu hambúrguer? Qual a diferença entre `setInterval` e `clearInterval`?
9. **(Aula 08)** Por que validar formulários no navegador com JavaScript? Por que essa validação não substitui a validação no servidor?
10. **(Aula 09 e 10)** O que é o Bootstrap? Explique o sistema de grid de 12 colunas e como ele deixa três cards lado a lado no computador e empilhados no celular.
11. **(Aula 11)** O que é uma API e o que é JSON? Explique o que faz `fetch()` ao consultar a API do ViaCEP.
12. **(Aula 12 e 13)** Em PHP, como se declara uma variável e o que é um array? Para que serve o `foreach`?
13. **(Aula 14)** Qual a diferença entre os métodos GET e POST? Por que o envio de senha deve usar POST?
14. **(Aula 15 e 16)** O que é um banco de dados relacional? Explique o que são tabela, coluna, linha e chave primária (`id`), e por que separar as configurações de conexão em um `config.php`.
15. **(Aula 17 e 18)** O que significa CRUD? Relacione cada letra ao comando SQL correspondente (INSERT, SELECT, UPDATE, DELETE) e explique por que pedir confirmação antes de excluir.

## Noções de Robótica (2º ano)

1. **(Aula 01)** Qual a diferença entre um robô e uma máquina simples, como uma calculadora? Explique o papel do sensor, do processador e do atuador.
2. **(Aula 02)** Cite as divisões da robótica e classifique: drone em área de desastre, braço que solda carros, robô que auxilia cirurgias e aspirador robótico.
3. **(Aula 03)** Explique a função do chassi, das rodas, dos eixos e da garra (efetuador) de um robô, comparando cada um a uma parte do corpo humano.
4. **(Aula 03)** Explique a troca entre velocidade e torque nas engrenagens. Um robô que sobe uma rampa com muito peso precisa de mais velocidade ou mais torque? Por quê?
5. **(Aula 04)** Qual a diferença entre sensor e atuador? Indique o sensor e o atuador de uma lâmpada que acende quando escurece e de um alarme que soa quando a temperatura sobe.
6. **(Aula 05)** O que é um microcontrolador? Por que robôs usam microcontroladores, como o Arduino Uno, e não computadores comuns?
7. **(Aula 06)** Para que serve um simulador como o Tinkercad? Cite duas vantagens de simular um circuito antes de montá-lo de verdade.
8. **(Aula 07)** Explique a diferença entre as funções `setup()` e `loop()` de um programa Arduino. O que fazem `pinMode(13, OUTPUT)` e `delay(500)`?
9. **(Aula 08)** No projeto Blink, explique o que `digitalWrite(13, HIGH)` e `digitalWrite(13, LOW)` fazem. O que muda no LED ao trocar `delay(500)` por `delay(250)`?
10. **(Aula 09)** Qual a diferença entre um pino configurado como `INPUT` e um como `OUTPUT`? Como o Arduino sabe se um botão foi pressionado?
11. **(Aula 10)** Como funciona um sensor de luz LDR? Por que `analogRead()` retorna valores de 0 a 1023 e o que é o limiar usado para acender a lâmpada?
12. **(Aula 11 e 15)** Como o sensor ultrassônico mede distância? Explique como ele pode ser usado em um alarme de proximidade.
13. **(Aula 12)** Qual a diferença entre um servo motor e um motor DC comum? Em uma garra robótica, o que representam os ângulos 0° e 90°?
14. **(Aula 13)** O que é PWM? Por que `analogWrite()` usa valores de 0 a 255 e para que serve a função `map()`?
15. **(Aula 14)** Explique a lógica de um robô seguidor de linha com dois sensores infravermelhos: o que o robô faz quando o sensor da esquerda detecta a linha? E quando os dois detectam?

## Laboratório de Hardware (3º ano)

1. **(Aula 01)** Cite três normas de segurança do laboratório de hardware e explique por que cada uma é importante.
2. **(Aula 02)** Explique a Lei de Ohm (V = I × R). Se a tensão é 12 V e a resistência é 120 Ω, qual é a corrente? O que acontece com o brilho de um LED quando o resistor tem valor maior?
3. **(Aula 03)** Coloque em ordem e justifique os passos antes de abrir um computador: desligar pelo SO, tirar o cabo da tomada, pressionar o botão power, colocar a pulseira antiestática e remover o painel lateral.
4. **(Aula 04)** Qual a diferença entre um HD de 3,5" e um de 2,5"? Onde cada um é usado?
5. **(Aula 05)** O que é o socket do processador? Por que uma CPU Intel LGA1700 não pode ser instalada em uma placa-mãe com socket AM5 (AMD)?
6. **(Aula 06)** Indique a ferramenta adequada para cada tarefa e justifique: fixar a placa-mãe no gabinete, limpar poeira do cooler e verificar se a fonte entrega +12 V.
7. **(Aula 07)** Para que serve o multímetro? Qual a diferença entre medir tensão e fazer o teste de continuidade?
8. **(Aula 08)** Qual a potência mínima da fonte para CPU (85 W) + GPU (150 W) + 2 RAM (5 W cada) + SSD (8 W) + placa-mãe (40 W) + 3 ventoinhas (3 W cada), com 20% de margem? Por que essa margem é necessária?
9. **(Aula 09)** Para que serve a pasta térmica? Por que o cooler deve ser apertado em padrão X (diagonal)?
10. **(Aula 10)** O que é dual channel? Por que dois pentes de 8 GB instalados nos slots A1 e A2 podem ter desempenho de um só? O que acontece se a RAM for mais rápida que o suportado pela placa?
11. **(Aula 11)** Qual a diferença entre SSD SATA e SSD M.2 NVMe? O que significa o número 2280 em um SSD M.2?
12. **(Aula 12 e 14)** Por que a GPU deve ser instalada só depois da placa-mãe estar fixada? O que é o boot mínimo e por que ele ajuda a isolar falhas?
13. **(Aula 13 e 15)** Um PC que trabalhava a 65 °C começou a atingir 88 °C. Quais as causas prováveis? E se ele desliga sozinho após 30 minutos de uso, qual componente você suspeitaria?
14. **(Aula 16 e 17)** Por que o Memtest86 precisa rodar antes do sistema operacional carregar? O que é o S.M.A.R.T. de um disco e por que o técnico deve fazer backup antes de tudo em um HD com barulho de cliques?
15. **(Aula 18 e 19)** Cite as causas prováveis de artefatos visuais (pixels coloridos) na tela durante jogos. O que é o DDU e quando ele deve ser usado?

## Laboratório de Software (3º ano)

1. **(Aula 01)** Por que é mais seguro praticar a instalação de um sistema operacional em uma máquina virtual do que no computador físico?
2. **(Aula 02)** Qual a diferença entre formatação rápida e formatação completa? Em que situação usar cada uma, e por que fazer backup antes de reinstalar o SO?
3. **(Aula 03)** Compare dois métodos de instalar um aplicativo (instalador baixado e loja/gerenciador de pacotes). Como confirmar que um programa foi completamente desinstalado?
4. **(Aula 04)** Cite dois riscos de manter um SO sem atualizações por mais de 6 meses. O que é uma falha zero-day?
5. **(Aula 05)** Por que o disco virtual dinâmico é preferível ao de tamanho fixo em um laboratório? O que são as Guest Additions do VirtualBox?
6. **(Aula 06)** Explique a diferença entre pausar, salvar o estado e desligar uma VM. Qual opção usar para retomar exatamente do mesmo ponto depois do almoço?
7. **(Aula 07)** Qual a diferença entre snapshot e clone de uma VM? Como os dois ajudam a testar um software suspeito sem risco?
8. **(Aula 08)** Explique o que fazem os comandos `pwd`, `ls -la` e `cd`. Qual a diferença entre o caminho relativo `cd Documentos` e o absoluto `cd /home/usuario/Documentos`?
9. **(Aula 09)** Explique o que fazem `mkdir`, `touch`, `cp` e `rm`. Por que o `rm -rf` exige muito cuidado e o que aconteceria com `rm -rf /`?
10. **(Aula 10)** O que é um pipe (`|`)? Qual a diferença entre os redirecionamentos `>` e `>>`?
11. **(Aula 11)** Explique a função de `grep`, `head`, `tail`, `sort` e `uniq`. Como eles ajudam a encontrar só as linhas de ERRO em um arquivo de log?
12. **(Aula 12)** Interprete as permissões `-rw-r--r--` e `-rwx------`: o que o dono, o grupo e os outros podem fazer? Para que servem `chmod` e `chown`?
13. **(Aula 13)** O que é um script em lote (`.sh` ou `.bat`)? Cite duas tarefas de um técnico que podem ser automatizadas com scripts.
14. **(Aula 14 e 15)** Qual a diferença entre backup de arquivos e imagem de sistema? Explique a regra 3-2-1 aplicada a um laboratório.
15. **(Aula 16, 17 e 18)** O que é um Live USB e por que ele é útil na recuperação de desastres? Explique o princípio do mínimo privilégio e para que servem os comandos `sfc /scannow` e `chkdsk`.
