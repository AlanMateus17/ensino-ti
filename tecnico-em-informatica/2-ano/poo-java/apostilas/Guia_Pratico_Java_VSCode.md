
🚀 Guia Prático: Java no Visual Studio Code
Professor: Alan Mateus (AMS)
1. Preparação do Ambiente (O Check-up)
Antes de digitar qualquer código, o computador precisa estar pronto.
 * Abra o VS Code.
 * No menu lateral esquerdo, clique no ícone de Extensions (quatro quadrados) ou aperte Ctrl + Shift + X.
 * Pesquise por "Extension Pack for Java" (da Microsoft) e verifique se está instalado.
 * Aperte Ctrl + ' (crase) para abrir o terminal e digite javac -version. Se aparecer um número, o JDK está pronto.
2. Criando o Projeto (A Estrutura Correta)
No Java, a organização de pastas é vital. Não crie arquivos soltos na Área de Trabalho.
 * Clique em File > Open Folder.
 * Crie uma pasta nova chamada ProjetosJava e selecione-a.
 * No Explorer (lateral esquerda), clique no ícone de New File (folha com +).
 * Regra de Ouro: Nomeie o arquivo como Principal.java (A primeira letra deve ser Maiúscula e o nome do arquivo deve ser igual ao nome da classe).
3. Escrevendo o Código Base
Digite o código abaixo. O VS Code deve sugerir o preenchimento automático (IntelliSense).
public class Principal {
    public static void main(String[] args) {
        // Seu código começa aqui
        System.out.println("Caminho configurado com sucesso!");
    }
}

4. Como Rodar o Programa (3 Formas)
Ensine aos alunos que existem caminhos diferentes para o mesmo destino:
 * Pelo Atalho Visual: Clique no botão Run que aparece logo acima da linha public static void main.
 * Pela Tecla de Atalho: Aperte F5 para iniciar o Debug (execução com testes).
 * Pelo Terminal (O modo "Raiz"): No terminal do VS Code, digite:
   * javac Principal.java (Para criar o Bytecode .class).
   * java Principal (Para rodar a JVM).
5. Dicas de Produtividade (Atalhos AMS)
Para programar mais rápido no Laboratório:
 * sysout + Tab: O VS Code escreve System.out.println(); automaticamente.
 * main + Tab: Ele cria toda a estrutura do método public static void main.
 * Alt + Shift + F: Formata o código (deixa a indentação perfeita).
 * Ctrl + S: Salve sempre! O Java não compila o que não foi salvo.
⚠️ Resolução de Problemas Comuns
 * Erro "Class not found": Verifique se o nome do arquivo é EXATAMENTE igual ao nome depois de public class.
 * Letras Vermelhas no Terminal: Geralmente falta um ; (ponto e vírgula) no final da linha ou uma chave { } não foi fechada.
 * O código não atualiza: Você esqueceu de salvar (Ctrl + S) antes de rodar.
