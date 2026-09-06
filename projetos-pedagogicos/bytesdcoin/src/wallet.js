const EC = require('elliptic').ec;
const crypto = require('crypto');
const bs58 = require('bs58').default;

// A mesma curva exata usada pelo Bitcoin.
const ec = new EC('secp256k1');

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest();
}

class Wallet {
  constructor() {
    this.keyPair = ec.genKeyPair();
    this.publicKey = this.keyPair.getPublic('hex');
    this.address = Wallet.deriveAddress(this.publicKey);
  }

  // Endereço no estilo Base58Check: versão + hash da chave pública + checksum.
  // O checksum permite ao app detectar erro de digitação ANTES de enviar.
  static deriveAddress(publicKeyHex) {
    const pubKeyBuffer = Buffer.from(publicKeyHex, 'hex');
    const pubKeyHash = sha256(sha256(pubKeyBuffer)).subarray(0, 20); // hash160-like, simplificado
    const versionedPayload = Buffer.concat([Buffer.from([0x1b]), pubKeyHash]); // 0x1b = versão "BSD"
    const checksum = sha256(sha256(versionedPayload)).subarray(0, 4);
    const fullPayload = Buffer.concat([versionedPayload, checksum]);
    return 'bsd' + bs58.encode(fullPayload);
  }

  static isValidAddress(address) {
    try {
      const payload = Buffer.from(bs58.decode(address.replace(/^bsd/, '')));
      const versionedPayload = payload.subarray(0, payload.length - 4);
      const checksum = payload.subarray(payload.length - 4);
      const expectedChecksum = sha256(sha256(versionedPayload)).subarray(0, 4);
      return Buffer.compare(checksum, expectedChecksum) === 0;
    } catch {
      return false;
    }
  }

  sign(dataHash) {
    return this.keyPair.sign(dataHash).toDER('hex');
  }
}

module.exports = Wallet;
