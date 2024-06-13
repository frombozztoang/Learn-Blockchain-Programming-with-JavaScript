class BlockchainError extends Error {
  constructor(message) {
    super(message);
    this.name = "BlockchainError";
  }
}

class InvalidTransactionError extends BlockchainError {
  constructor(message = "Invalid transaction") {
    super(message);
    this.name = "InvalidTransactionError";
  }
}

class InsufficientBalanceError extends BlockchainError {
  constructor(message = "Insufficient balance") {
    super(message);
    this.name = "InsufficientBalanceError";
  }
}

class BlockNotFoundError extends BlockchainError {
  constructor(message = "Block not found") {
    super(message);
    this.name = "BlockNotFoundError";
  }
}

class TransactionNotFoundError extends BlockchainError {
  constructor(message = "Transaction not found") {
    super(message);
    this.name = "TransactionNotFoundError";
  }
}

class InvalidBlockchainError extends BlockchainError {
  constructor(message = "Invalid blockchain format") {
    super(message);
    this.name = "InvalidBlockchainError";
  }
}

module.exports = {
  BlockchainError,
  InvalidTransactionError,
  InsufficientBalanceError,
  BlockNotFoundError,
  TransactionNotFoundError,
  InvalidBlockchainError,
};
