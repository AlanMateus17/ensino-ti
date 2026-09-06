## 1. O Conceito: Variável Simples vs. Objeto

Para construir sistemas robustos, é essencial entender como a informação é armazenada e manipulada na memória.

* **Variável Simples (Tipos Primitivos):** Pense nela como uma pequena caixa que guarda **apenas um único valor** por vez. Pode ser um número, uma letra ou um valor verdadeiro/falso. Ela não tem comportamentos (ações) atrelados a ela, apenas a informação pura.
* *Exemplo:* Uma variável `idade` guardando o número `25`.


* **Objeto:** É uma estrutura muito mais rica. Um objeto agrupa **múltiplas informações** (chamadas de atributos) e **comportamentos** (chamados de métodos) em um único pacote. Ele representa algo do mundo real dentro do código.
* *Exemplo:* Um objeto `Cliente` não guarda apenas um dado, mas sim o `nome`, o `cpf`, o `telefone` e também ações como `realizarCompra()`.



### A Analogia da "Fôrma de Bolo"

Para criar objetos, nós precisamos de um molde. Na programação, esse molde é chamado de **Classe**.

* **A Classe é a Fôrma de Bolo:** Ela define o formato, o tamanho e as características gerais. Você não "come" a fôrma; ela serve apenas como o projeto ou o guia de como o bolo deve ser feito.
* **O Objeto é o Bolo Assado:** Usando a mesma fôrma (Classe), você pode criar dezenas de bolos (Objetos) diferentes. Um pode ser de chocolate com cobertura de morango, outro de cenoura com chocolate. Eles compartilham a mesma estrutura definida pela fôrma, mas contêm dados (sabores) diferentes.

---

## 2. Comandos e Tipos em Java

O Java é uma linguagem estritamente orientada a objetos, e suas palavras-chave refletem isso.

* **`public class`:** É o comando usado para criar a sua "fôrma de bolo". A palavra `public` é um modificador de acesso que diz que essa classe é pública, ou seja, pode ser vista e utilizada por outras partes do seu sistema.
* **`String` (com 'S' maiúsculo):** No Java, textos não são variáveis simples, eles são **objetos**. A classe `String` guarda uma sequência de caracteres (como "João" ou "Avenida Brasil"). Por ser uma classe embutida na linguagem, ela vem com várias ferramentas (métodos) para manipular o texto, como contar letras ou deixar tudo em maiúsculo.
* **`double`:** É um tipo primitivo (variável simples) usado para guardar números decimais com dupla precisão (como $3.1415$ ou $15.50$). Ele utiliza matemática de base-2 sob o capô, o que é excelente e rápido para cálculos científicos e medições.

---

## 3. Comandos e Tipos em C#

O C# (.NET) compartilha muitas semelhanças com o Java, mas tem características próprias essenciais para aplicações empresariais e financeiras.

* **`public class`:** Exatamente a mesma função do Java: cria o seu molde público para instanciar objetos.
* **`string` (com 's' minúsculo):** No C#, usar `string` em minúsculo é um atalho (alias) recomendado pela linguagem para a classe oficial `System.String`. Funciona da mesma forma para armazenar textos.
* **`decimal` e o motivo de usá-lo para dinheiro:**
Este é um detalhe arquitetural crucial. Em C#, você **nunca** deve usar `double` ou `float` para lidar com valores monetários. O tipo `decimal` foi criado especificamente para isso.
* *O Problema:* Tipos como `double` usam aproximações de ponto flutuante em base-2. Isso significa que eles não conseguem representar alguns números decimais exatos da nossa matemática de base-10, resultando em erros de arredondamento invisíveis (por exemplo, o computador pode calcular $0.1 + 0.2 = 0.30000000000000004$).
* *A Solução:* O tipo `decimal` opera com precisão de base-10, garantindo que os centavos de uma transação sejam calculados com exatidão milimétrica, evitando perdas ou ganhos fantasmas em arredondamentos financeiros.



---

## 4. Prática: Criando a Classe Produto

Agora, vamos transformar esses conceitos em código, criando o molde (a Fôrma) para um Produto do sistema.

### Exemplo em Java

No Java, usamos o `String` com inicial maiúscula e o `double` para o preço numérico comum:

```java
public class Produto {
    public String nome;
    public double preco;
}

```

### Exemplo em C#

No C#, utilizamos o `string` e, como um Produto envolve valores monetários que serão transacionados, aplicamos o tipo `decimal` (representado pela letra `m` ou `M` ao atribuir um valor no código, indicando *money* ou *monetary*):

```csharp
public class Produto {
    public string nome;
    public decimal preco;
}

```

