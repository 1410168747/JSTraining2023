export class AlarmClock {
  private _state: AbstractState;

  constructor() {
    this._state = new NormalState(this);
  }

  setAlarm(): Action {
    return this._state.setAlarm();
  }
  cancelAlarm(): Action {
    return this._state.cancelAlarm();
  }
  reachedToAlarmTime(): Action {
    return this._state.reachedToAlarmTime();
  }
  snooze(): Action {
    return this._state.snooze();
  }
  elapseSnoozeTime(): Action {
    return this._state.elapseSnoozeTime();
  }
  changeState(state: AbstractState): void {
    this._state = state;
  }
  get state(): AbstractState {
    return this._state;
  }
}

type Action =
  | "none" // 何もしない
  | "soundAlarm" // アラームを鳴らす
  | "stopAlarm"; // アラームを止める

export class AbstractState {
  protected _context;
  protected _type;
  constructor(_context: AlarmClock) {
    this._context = _context;
    this._type = this.constructor.name;
  }
  setAlarm(): Action {
    return "none";
  }
  cancelAlarm(): Action {
    return "none";
  }
  reachedToAlarmTime(): Action {
    return "none";
  }
  snooze(): Action {
    return "none";
  }
  elapseSnoozeTime(): Action {
    return "none";
  }
  get context() {
    return this._context;
  }
  get type() {
    return this._type;
  }
}

export class NormalState extends AbstractState {
  setAlarm(): Action {
    this.context.changeState(new AlarmSetState(this.context));
    return "none";
  }
}

export class AlarmSetState extends AbstractState {
  cancelAlarm(): Action {
    this.context.changeState(new NormalState(this.context));
    return "none";
  }
  reachedToAlarmTime(): Action {
    this.context.changeState(new AlarmSoundingState(this.context));
    return "soundAlarm";
  }
}

export class AlarmSoundingState extends AbstractState {
  cancelAlarm(): Action {
    this.context.changeState(new NormalState(this.context));
    return "stopAlarm";
  }
  snooze(): Action {
    this.context.changeState(new SnoozingState(this.context));
    return "stopAlarm";
  }
}

export class SnoozingState extends AbstractState {
  cancelAlarm(): Action {
    this.context.changeState(new NormalState(this.context));
    return "none";
  }
  elapseSnoozeTime(): Action {
    this.context.changeState(new AlarmSoundingState(this.context));
    return "soundAlarm";
  }
}
