export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    } else {
      this._sqft = sqft;
    }

    if (this.constructor !== Building
        && !(Object.prototype.hasOwnProperty.call(this.constructor, 'evacuationWarningMessage'))) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
