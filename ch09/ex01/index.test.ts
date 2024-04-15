// SRPに反するクラスの例
class Report {
  constructor(private data: any) {}
  output() {
    console.log(this.data);
  }
}
