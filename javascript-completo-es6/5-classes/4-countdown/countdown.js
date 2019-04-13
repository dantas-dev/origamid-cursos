export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get _actualDate() {
    return new Date();
  }

  get _futureDate() {
    return new Date(this.futureDate);
  }

  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }

  get days() {
    const hr = 24,
          min = 60,
          sec = 60,
          mil = 1000;
    return Math.floor(this._timeStampDiff / (hr * min * sec * mil));
  }

  get hours() {
    const min = 60,
          sec = 60,
          mil = 1000;
    return Math.floor(this._timeStampDiff / (min * sec * mil));
  }

  get minutes() {
    const sec = 60,
          mil = 1000;
    return Math.floor(this._timeStampDiff / (sec * mil));
  }

  get seconds() {
    const mil = 1000;
    return Math.floor(this._timeStampDiff / mil);
  }

  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}