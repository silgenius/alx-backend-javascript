import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    } else {
      this._amount = amount;
    }

    if (!currency instanceof Currency) {
      throw new TypeError('Currency must be of type Currency');
    } else {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    } else {
      this._amount = amount;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(Currency) {
    if (!currency instanceof Currency) {
      throw new TypeError('Currency must be of type Currency');
    } else {
      this._currency = Currency;
    }
  }

  displayFullPrice() {
    const displayFullCurrency = this._currency.displayFullCurrency();
    return `${this._amount} ${displayFullCurrency}`;
  }

  static convertPrice(amount, ConversionRate) {
    return amount * ConversionRate;
  }
}
