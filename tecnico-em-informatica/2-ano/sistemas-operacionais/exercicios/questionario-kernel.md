# Questionário: Introdução à Arquitetura de Sistemas — O Papel do Kernel

---

### **Conceitos Fundamentais**

1.  **O que é o kernel e por que ele é considerado o programa mais importante de um sistema operacional?**
2.  **Explique o ciclo de vida do kernel em relação ao funcionamento do computador (do ligar ao desligar).**
3.  **Quais são as três principais responsabilidades de gerenciamento de recursos do kernel mencionadas no texto?**

---

### **Modos de Operação**

4.  **Diferencie o Modo Usuário (*User Mode*) do Modo Kernel (*Kernel Mode*) em termos de privilégios e acesso ao hardware.**
5.  **O que acontece com o sistema operacional se um aplicativo travar no Modo Usuário? E se um erro ocorrer no Modo Kernel?**

---

### **Comunicação e System Calls**

6.  **O que são *System Calls* (Chamadas de Sistema) e qual a sua utilidade para programas que rodam em ambientes como .NET ou Bun?**
7.  **Explique a analogia do "banco blindado" utilizada para descrever o funcionamento de uma *System Call*.**
8.  **Por que a mudança de contexto (*context switch*) entre o Modo Usuário e o Modo Kernel deve ser evitada sempre que possível por ferramentas de alto nível?**

---

### **Arquiteturas: Linux vs. Windows**

9.  **O que caracteriza a arquitetura "Monolítica Pura" utilizada pelo Linux?**
10. **Qual é a principal vantagem de desempenho da arquitetura monolítica e como ela é alcançada?**
11. **Qual é o risco associado ao fato de drivers de dispositivos (como Wi-Fi ou som) rodarem inteiramente no espaço do kernel no Linux?**
12. **Como a arquitetura do Windows (Híbrida) tenta equilibrar velocidade e estabilidade?**
13. **Descreva o que acontece no Windows se o driver de uma placa de vídeo falhar, comparando com o que ocorreria em um sistema puramente monolítico.**
14. **Em termos de comunicação interna, qual a diferença entre o modelo do Linux e o modelo do Windows?**

---

### **Conclusão**

15. **Qual é o papel de ferramentas como o Bun e o .NET na abstração da complexidade do kernel para o desenvolvedor?**

