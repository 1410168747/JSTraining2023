import {
  AlarmClock,
  NormalState,
  AlarmSetState,
  AlarmSoundingState,
  SnoozingState,
} from "./index.ts"; // ts でも可

describe("changing status or action", () => {
  const sut = new AlarmClock();
  const param = [
    {
      event: sut.setAlarm.bind(sut),
      currentState: NormalState,
      expected: {
        nextStateName: "AlarmSetState",
        action: "none",
      },
    },
    {
      event: sut.cancelAlarm.bind(sut),
      currentState: AlarmSetState,
      expected: {
        nextStateName: "NormalState",
        action: "none",
      },
    },
    {
      event: sut.cancelAlarm.bind(sut),
      currentState: AlarmSoundingState,
      expected: {
        nextStateName: "NormalState",
        action: "stopAlarm",
      },
    },
    {
      event: sut.cancelAlarm.bind(sut),
      currentState: SnoozingState,
      expected: {
        nextStateName: "NormalState",
        action: "none",
      },
    },
    {
      event: sut.reachedToAlarmTime.bind(sut),
      currentState: AlarmSetState,
      expected: {
        nextStateName: "AlarmSoundingState",
        action: "soundAlarm",
      },
    },
    {
      event: sut.snooze.bind(sut),
      currentState: AlarmSoundingState,
      expected: {
        nextStateName: "SnoozingState",
        action: "stopAlarm",
      },
    },
    {
      event: sut.elapseSnoozeTime.bind(sut),
      currentState: SnoozingState,
      expected: {
        nextStateName: "AlarmSoundingState",
        action: "soundAlarm",
      },
    },
  ];
  param.forEach(({ currentState, event, expected }) => {
    test(`${event.name} in ${currentState.name}`, () => {
      sut.changeState(new currentState(sut));
      expect(event()).toBe(expected.action);
      expect(sut.state.type).toBe(expected.nextStateName);
    });
  });
});

describe("status", () => {
  const sut = new AlarmClock();
  const expectedAction = "none";
  const param = [
    {
      description: "setAlarm",
      event: sut.setAlarm.bind(sut),
    },
    {
      description: "cancelAlarm",
      event: sut.cancelAlarm.bind(sut),
    },
    {
      description: "reachedToAlarmTime",
      event: sut.reachedToAlarmTime.bind(sut),
    },
    {
      description: "snooze",
      event: sut.snooze.bind(sut),
    },
    {
      description: "elapseSnoozeTime",
      event: sut.elapseSnoozeTime.bind(sut),
    },
  ];
  describe("NormalState", () => {
    const expectednextStateName = "NormalState";
    param
      .filter((e) => e.description !== "setAlarm")
      .forEach(({ description, event }) => {
        const state = NormalState;
        test(`${description} in ${expectednextStateName}`, () => {
          sut.changeState(new state(sut));
          const actual = event();
          expect(sut.state.type).toBe(expectednextStateName);
          expect(actual).toBe(expectedAction);
        });
      });
  });
  describe("AlarmSetState", () => {
    const expectednextStateName = "AlarmSetState";
    sut.changeState(new AlarmSetState(sut));
    param
      .filter(
        (e) =>
          e.description !== "cancelAlarm" &&
          e.description !== "reachedToAlarmTime"
      )
      .forEach(({ description, event }) => {
        const state = AlarmSetState;
        test(`${description} in ${expectednextStateName}`, () => {
          sut.changeState(new state(sut));
          const actual = event();
          expect(sut.state.type).toBe(expectednextStateName);
          expect(actual).toBe(expectedAction);
        });
      });
  });
  describe("AlarmSoundingState", () => {
    const expectednextStateName = "AlarmSoundingState";
    sut.changeState(new AlarmSoundingState(sut));
    param
      .filter(
        (e) => e.description !== "cancelAlarm" && e.description !== "snooze"
      )
      .forEach(({ description, event }) => {
        const state = AlarmSoundingState;
        test(`${description} in ${expectednextStateName}`, () => {
          sut.changeState(new state(sut));
          const actual = event();
          expect(sut.state.type).toBe(expectednextStateName);
          expect(actual).toBe(expectedAction);
        });
      });
  });
  describe("SnoozingState", () => {
    const expectednextStateName = "SnoozingState";
    sut.changeState(new SnoozingState(sut));
    param
      .filter(
        (e) =>
          e.description !== "cancelAlarm" &&
          e.description !== "elapseSnoozeTime"
      )
      .forEach(({ description, event }) => {
        const state = SnoozingState;
        test(`${description} in ${expectednextStateName}`, () => {
          sut.changeState(new state(sut));
          const actual = event();
          expect(sut.state.type).toBe(expectednextStateName);
          expect(actual).toBe(expectedAction);
        });
      });
  });
});
