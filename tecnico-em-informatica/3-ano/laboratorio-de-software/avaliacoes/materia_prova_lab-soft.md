No cenário atual de TI, a escolha entre virtualização de hardware e containers define a estratégia de segurança e 
agilidade de uma empresa. O VirtualBox destaca-se como um Hypervisor Tipo 2, rodando como um software 
sobre o sistema operacional hospedeiro. Sua principal força é o isolamento total: por simular componentes físicos 
(BIOS, RAM, Disco), ele permite que o "Sistema Convidado" opere de forma independente, sem afetar os 
arquivos ou o hardware real do usuário. Isso torna o VirtualBox a ferramenta ideal para laboratórios de 
segurança, testes de antivírus e manipulação de sistemas de arquivos. 

Para otimizar essa experiência, utilizam-se os Guest Additions (Adicionais de Convidado), que são drivers 
instalados no sistema virtualizado para melhorar a integração, o desempenho de vídeo e o uso do mouse entre o 
hospedeiro e o convidado. Além disso, o uso de Snapshots permite "congelar" e restaurar estados específicos da 
máquina virtual com segurança, embora esse recurso se limite apenas ao ambiente virtual e não funcione 
como um backup do disco rígido físico do hospedeiro. 

Por outro lado, o Docker revolucionou o mercado com a virtualização de processos. Ao contrário das máquinas 
virtuais, o Docker não emula hardware; ele compartilha o Kernel do sistema hospedeiro. Essa característica torna 
as Docker Images extremamente leves em comparação às pesadas Imagens ISO (que contêm um instalador de 
SO completo). No Docker, as imagens funcionam como plantas imutáveis (que não mudam), servindo de base 
para a criação de containers ativos. 

No entanto, essa arquitetura introduz o conceito de Efemeridade: os containers são descartáveis por natureza. 
Para que informações críticas (como bancos de dados) não sejam perdidas ao deletar um container, é obrigatório o 
uso de Volumes, que realizam o mapeamento (link) entre os dados do container e o armazenamento persistente do 
computador real. Na camada de comunicação, a configuração de rede é vital: enquanto o modo NAT protege a 
VM, o Modo Bridge (Ponte) permite que ela receba um endereço IP próprio na rede física, comportando-se como 
um dispositivo independente. 

Parte I: Múltipla Escolha 

QUESTÃO 01 –  Sobre a arquitetura de virtualização, assinale a alternativa que descreve 
corretamente o funcionamento do VirtualBox:  

a) Ele virtualiza apenas a aplicação, ignorando o sistema operacional. 

b) É um Hypervisor Tipo 1, rodando diretamente sobre o hardware.  

c) É um Hypervisor Tipo 2, rodando como um software sobre um sistema operacional hospedeiro.  

d) Ele não permite a execução de sistemas diferentes do sistema hospedeiro. 

QUESTÃO 02 - O Docker é conhecido por sua leveza e agilidade. Isso ocorre principalmente 
porque: 


 

QUESTÃO 03 -  Ao configurar uma Máquina Virtual para simular um servidor que precisa ser 
acessado por outros computadores da rede física, qual modo de rede deve ser selecionado?



QUESTÃO 04 - O conceito de "Efemeridade" no Docker dita que um container deve ser tratado 
como um recurso descartável. Qual é a principal implicação prática dessa característica para a 
gestão de logs e bancos de dados?  



QUESTÃO 05 -  Ao utilizar "Volumes" no Docker para salvar informações, o administrador de 
sistemas está essencialmente:  






Parte II: Verdadeiro (V) ou Falso (F) 

6. ( ) No Docker, as imagens são imutáveis e servem como "plantas" para a criação de containers.
   
8. ( ) O VirtualBox permite criar um "Snapshot", que funciona como um backup completo do HD físico 
do usuário.

10. ( ) Um container Docker é mais isolado do sistema hospedeiro do que uma Máquina Virtual do 
VirtualBox.

12. ( ) "Guest Additions" (Adicionais de Convidado) são drivers instalados no sistema convidado do 
VirtualBox para melhorar a integração com o hospedeiro.

Parte III: Dissertativas e Análise de Cenário 
14. Explique o conceito de "efemeridade" em containers Docker e descreva o que acontece com 
os dados de um banco de dados se o container for removido sem a configuração de "Volumes". 

15. Um técnico de suporte precisa testar um novo antivírus e um script de limpeza que apaga 
arquivos críticos do sistema para ver se ele sobrevive. Qual ferramenta (VirtualBox ou Docker) é 
a mais indicada para este teste de "baixo nível"? Justifique sua resposta com base na 
virtualização de hardware.

17. Diferencie, de forma resumida, uma "Imagem ISO" de uma "Docker Image".
