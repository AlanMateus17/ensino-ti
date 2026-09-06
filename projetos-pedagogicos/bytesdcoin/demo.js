const Blockchain = require('./src/blockchain');
const Wallet = require('./src/wallet');
const { Transaction, PRIME_SUBUNIT } = require('./src/transaction');

const bsd = (primes) => (primes / PRIME_SUBUNIT).toString();

console.log('=== ByteSDCoin — Núcleo mínimo ===\n');

const bytesdcoin = new Blockchain();

const alunoA = new Wallet();
const alunoB = new Wallet();

console.log('Carteira do aluno A:', alunoA.address);
console.log('Carteira do aluno B:', alunoB.address);
console.log('Endereço A tem checksum válido?', Wallet.isValidAddress(alunoA.address));
console.log('Endereço adulterado é detectado?', !Wallet.isValidAddress(alunoA.address + 'X'));

console.log('\n--- Bloco 1: aluno A vence uma partida PoKS (mineração) ---');
bytesdcoin.minePendingTransactions(alunoA.address, []);
console.log('Recompensa do bloco 1:', bsd(bytesdcoin.getRewardForBlock(1)), 'BSD');
console.log('Saldo do aluno A agora:', bsd(bytesdcoin.getBalanceOfAddress(alunoA.address)), 'BSD');

console.log('\n--- Aluno A transfere 100 BSD para o aluno B ---');
const tx = new Transaction(alunoA.address, alunoB.address, 100n * PRIME_SUBUNIT);
tx.sign(alunoA);
console.log('Transação assinada é válida?', tx.isValid());

console.log('\n--- Bloco 2: aluno B vence a próxima partida, incluindo a transação de A ---');
bytesdcoin.minePendingTransactions(alunoB.address, [tx]);

console.log('\n--- Saldos finais ---');
console.log('Aluno A:', bsd(bytesdcoin.getBalanceOfAddress(alunoA.address)), 'BSD');
console.log('Aluno B:', bsd(bytesdcoin.getBalanceOfAddress(alunoB.address)), 'BSD');

console.log('\n--- Integridade da cadeia ---');
console.log('Cadeia válida?', bytesdcoin.isChainValid());

console.log('\n--- Tentativa de fraude: adulterar um bloco já minerado ---');
bytesdcoin.chain[1].transactions[0].amountPrimes = 999999999999n;
console.log('Cadeia ainda válida depois da adulteração?', bytesdcoin.isChainValid());
