function potentiallyBuggyCode() {
    var hoge = "start";
    debugger;
    hoge = "end";
    debugger;
}
potentiallyBuggyCode();
