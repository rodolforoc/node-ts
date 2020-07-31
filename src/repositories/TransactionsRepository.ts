import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const allIncomes = this.transactions.reduce((acc, vl) => {
      return vl.type == 'income' ? acc + vl.value : acc + 0;
    }, 0)

    const allOutcomes = this.transactions.reduce((acc, vl) => {
      return vl.type == 'outcome' ? acc + vl.value : acc + 0;
    }, 0)

    const total = allIncomes - allOutcomes;

    const balance: Balance = {
      income: allIncomes,
      outcome: allOutcomes,
      total: total,
    }

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
