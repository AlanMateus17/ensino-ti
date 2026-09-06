# 🛠️ Guia de Trabalho Prático: Do Zero ao Sistema Operacional

**Objetivo:** Este trabalho vai te capacitar a preparar um ambiente de virtualização profissional, instalar um sistema operacional (SO) do zero e gerenciar o ciclo de vida de aplicativos e sistemas.

---

### 1. Preparação do seu Ambiente (Virtualização)
Sua primeira tarefa é criar um "computador dentro do computador". Para isso, você deve escolher um software de virtualização (sugestões: **VirtualBox** ou **VMware Player**).

* **Configuração de Hardware:** Defina os recursos da sua Máquina Virtual (VM). Você deve documentar e justificar por que escolheu determinada quantidade de memória RAM, núcleos de CPU e o tamanho do disco rígido para o SO que pretende instalar.
* **Snapshot Inicial:** Antes de começar a instalação, tire um "**Snapshot**" (ponto de restauração) da VM vazia. Isso garante que você possa recomeçar rapidamente se algo der errado.

---

### 2. Laboratório de Instalação de SO
Agora, você fará uma instalação limpa de um sistema operacional (ex: **Ubuntu Linux** ou **Windows 10/11**). Fique atento aos seguintes pontos:

* **Particionamento de Disco:** Não utilize apenas o modo "automático". Você deve realizar ou explicar o particionamento (ex: Entender o que é a partição `/` e `/home` no Linux, ou as partições de sistema e recuperação no Windows).
* **Configuração de Rede:** Garanta que sua VM consiga "conversar" com o mundo externo. Teste a conectividade via terminal/prompt de comando.

---

### 3. Gerenciamento e Ciclo de Vida de Aplicativos
Com o sistema rodando, você deve demonstrar que sabe mantê-lo:

* **Instalação de Ferramentas:** Instale um conjunto essencial (um editor de texto avançado, um navegador e ferramentas de análise de rede).
* **Desinstalação e Limpeza:** Escolha um desses aplicativos e realize a desinstalação completa. O objetivo é garantir que não sobrem arquivos temporários ou registros inúteis no sistema.
* **Análise de Falhas:** Identifique onde o sistema operacional que você instalou guarda os **Logs** (registros) de instalação e remoção de programas.

---

### 📋 O que você deve me entregar (Critérios de Avaliação)

* **Relatório Técnico (PDF):** Um documento organizado contendo capturas de tela (*prints*) das etapas críticas: criação da VM, particionamento do disco e o sistema finalizado.
* **Diário de Problemas:** Descreva ao menos um erro ou dificuldade que você enfrentou durante o processo e **como você conseguiu resolver**. Na TI, saber resolver problemas é tão importante quanto saber instalar o sistema.
* **Demonstração de Funcionamento:** Um breve parágrafo confirmando que a rede está ativa e que o sistema está atualizado.

---
# Link do video no youtube - Passo a Passo instalação Ubuntu
https://youtu.be/wTEizwJ6yhY?si=ZEASTiIetiJQKTiJ

> **Dica de Ouro:** Trate essa Máquina Virtual como seu laboratório pessoal. Se tiver curiosidade de testar um comando perigoso ou um software desconhecido, faça isso nela! Se quebrar, basta voltar o *Snapshot* e começar de novo.
