const crypto = require('crypto');

class Block {
  constructor(index, timestamp, transactions, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.transactions = transactions; // array de Transaction (a primeira pode ser coinbase)
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const payload =
      this.index +
      this.previousHash +
      this.timestamp +
      JSON.stringify(this.transactions, (_, v) => (typeof v === 'bigint' ? v.toString() : v)) +
      this.nonce;
    return crypto.createHash('sha256').update(payload).digest('hex');
  }

  // PoW leve opcional - dificuldade = quantidade de zeros exigidos no início do hash.
  // Calibrado para ser rápido (poucos zeros); serve para fechar a brecha lógica
  // de "alguém pular a etapa de selagem", não para gastar energia de verdade.
  mine(difficulty = 2) {
    const target = '0'.repeat(difficulty);
    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    return this.hash;
  }
}

module.exports = Block;
