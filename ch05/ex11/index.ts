function potentiallyBuggyCode() {
  let hoge = "start";
  debugger;

  hoge = "end";
  debugger;
}

potentiallyBuggyCode();
