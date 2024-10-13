import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    } else {
      this._floors = floors;
    }
  }

  static evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  get floors() {
    return this._floors;
  }
}
