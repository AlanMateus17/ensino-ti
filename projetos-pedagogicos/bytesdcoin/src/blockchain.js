const Block = require('./block');
const { Transaction, PRIME_SUBUNIT } = require('./transaction');

const BLOCKS_PER_HALVING = 210;
const INITIAL_REWARD_BSD = 50000n;

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2; // zeros exigidos no início do hash (PoW leve)
  }

  createGenesisBlock() {
    return new Block(0, Date.now(), [], '0'.repeat(64));
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // Recompensa vigente para o índice de bloco dado, seguindo o halving.
  getRewardForBlock(blockIndex) {
    const halvings = Math.floor(blockIndex / BLOCKS_PER_HALVING);
    const reward = INITIAL_REWARD_BSD >> BigInt(halvings); // divide por 2 a cada halving
    return reward > 0n ? reward * PRIME_SUBUNIT : 0n;
  }

  // NOTA: MVP usa saldo derivado do histórico (mais simples de validar num protótipo).
  // A migração para UTXO explícito (ver documento técnico, seção "Estrutura de dados
  // e transações") é o próximo incremento antes de produção real.
  getBalanceOfAddress(address) {
    let balance = 0n;
    for (const block of this.chain) {
      for (const tx of block.transactions) {
        if (tx.toAddress === address) balance += BigInt(tx.amountPrimes);
        if (tx.fromAddress === address) balance -= BigInt(tx.amountPrimes);
      }
    }
    return balance;
  }

  minePendingTransactions(minerAddress, pendingTransactions) {
    const nextIndex = this.chain.length;
    const reward = this.getRewardForBlock(nextIndex);
    const coinbaseTx = Transaction.coinbase(minerAddress, reward);
    const block = new Block(
      nextIndex,
      Date.now(),
      [coinbaseTx, ...pendingTransactions],
      this.getLatestBlock().hash
    );
    block.mine(this.difficulty);
    this.chain.push(block);
    return block;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i];
      const previous = this.chain[i - 1];

      if (current.hash !== current.calculateHash()) return false;
      if (current.previousHash !== previous.hash) return false;

      for (const tx of current.transactions) {
        if (!tx.isValid && typeof tx.isValid === 'function') continue;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
