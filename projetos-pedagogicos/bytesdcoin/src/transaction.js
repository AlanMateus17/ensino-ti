const crypto = require('crypto');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const PRIME_SUBUNIT = 1000000007n; // 1 BSD = 1.000.000.007 Primes

class Transaction {
  constructor(fromAddress, toAddress, amountPrimes, fromPublicKey = null) {
    this.fromAddress = fromAddress; // null = transação coinbase (recompensa de mineração)
    this.toAddress = toAddress;
    this.amountPrimes = amountPrimes; // sempre inteiro, nunca fracionário
    this.fromPublicKey = fromPublicKey;
    this.signature = null;
    this.timestamp = Date.now();
  }

  calculateHash() {
    const payload =
      this.fromAddress + this.toAddress + this.amountPrimes.toString() + this.timestamp;
    return crypto.createHash('sha256').update(payload).digest('hex');
  }

  sign(wallet) {
    if (wallet.address !== this.fromAddress) {
      throw new Error('Só é possível assinar transações da própria carteira');
    }
    this.fromPublicKey = wallet.publicKey;
    this.signature = wallet.sign(this.calculateHash());
  }

  isValid() {
    if (this.fromAddress === null) return true; // coinbase não precisa de assinatura
    if (!this.signature || !this.fromPublicKey) return false;
    const key = ec.keyFromPublic(this.fromPublicKey, 'hex');
    return key.verify(this.calculateHash(), this.signature);
  }

  static coinbase(toAddress, rewardPrimes) {
    return new Transaction(null, toAddress, rewardPrimes);
  }
}

module.exports = { Transaction, PRIME_SUBUNIT };
