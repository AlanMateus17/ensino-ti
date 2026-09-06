# ByteSDCoin — Núcleo mínimo (passos 1-3 do roteiro)

Esqueleto real e funcional dos três primeiros passos da construção:
bloco encadeado por hash, carteiras com endereço de checksum (ECDSA
secp256k1, a mesma curva do Bitcoin), e transações assinadas digitalmente.

## Como rodar

    npm install
    node demo.js

O demo.js cria duas carteiras, minera um bloco (com halving real: 50.000
BSD no bloco 1), faz uma transferência assinada entre elas, minera um
segundo bloco incluindo essa transação, confere os saldos, valida a
integridade da cadeia inteira, e por fim tenta adulterar um bloco já
minerado para provar que a fraude é detectada.

## Estrutura

- `src/block.js` — bloco com hash SHA-256 encadeado + PoW leve opcional
- `src/wallet.js` — par de chaves ECDSA + endereço com checksum Base58Check
- `src/transaction.js` — transação assinada, subunidade Prime (1 BSD = 1.000.000.007 Primes)
- `src/blockchain.js` — cadeia, halving (50.000 BSD/bloco, a cada 210 blocos), validação
- `demo.js` — roteiro de teste ponta a ponta

## Próximos passos (na ordem do roteiro)

4. UTXO explícito (hoje o saldo é derivado do histórico — mais simples para
   este protótipo, mas precisa migrar antes de qualquer uso real) + mempool
5. Endpoint de mineração PoKS (mock: declarar vencedor manualmente)
6. Transação coinbase já está pronta — falta a API REST em volta de tudo isso
7. Multi-nó com quórum 2-de-3 entre processos separados
8. Jogos virtuais reais (chess.js) + banco de perguntas
9. Frontend / explorador de blocos
