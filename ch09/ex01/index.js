export class ExportedClass {

  constructor() { }

  static classMethod() {
    return 1;
  }

  instanceMethod() {
    return 2;
  }

  static classClass = class {

    static classMethod() {
      return 3;
    }
    instanceMethod() {
      return 4;
    }
  }

  instanceClass = class {

    static classMethod() {
      return 5;
    }
    instanceMethod() {
      return 6;
    }
  }
}