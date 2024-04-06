export class Warrior {
  _atk;
  constructor(_atk = 0) {
    this._atk = _atk;
  }
  get atk() {
    return this._atk;
  }
  attack() {
    return 2 * this.atk;
  }
}

export function MagicWarrior(_atk = 0, _mgc = 0) {
  this._atk = _atk;
  this._mgc = _mgc;
}
MagicWarrior.prototype = Object.create(Warrior.prototype);
MagicWarrior.prototype.constructor = MagicWarrior;
MagicWarrior.prototype.mgc = function () {
  return this._mgc;
}
MagicWarrior.prototype.attack = function () {
  return 2 * this.atk + this.mgc();
};
