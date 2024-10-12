export default class Currency {
  constructor (code, name) {
    if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      } else {
        this._code = code;
      }

      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      } else {
        this._name = name;
      }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = code;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'number') {
      throw new TypeError('name must be a number');
    } else {
      this._name = name;
    }
  }

  displayFullCurrency () {
    return `${this.name} (${this.code})`
  }
}