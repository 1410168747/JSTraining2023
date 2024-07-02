/*
 * 新たにObject.assignDescriptors()関数を定義する。
 * この関数は、Object.assign()と同じような動作を行う。
 * ただし、単にプロパティ値をコピーするのではなく、
 * コピー元からコピー先へプロパティディスクリプタを
 * コピーする。この関数は、列挙可のプロパティも列挙不可の
 * プロパティも独自プロパティであればすべてコピーする。
 * また、ディスクリプタをコピーするので、ゲッター関数や
 * セッター関数の場合は、コピー元からコピー先へ関数をコピーする。
 *
 * Object.assignDescriptors()は、Object.defineProperty()から
 * スローされたすべてのTypeErrorを伝播する。コピー先のオブジェクトが
 * 封印や凍結されていたりする場合や、コピー元のプロパティでコピー先の
 * 再定義不可のプロパティを変更しようとした場合に、このエラーがスローされる。
 *
 * assignDescriptorsプロパティは、Object.defineProperty()を使って
 * Objectに追加される。このようにすることで、Object.assign()のように
 * 列挙不可のプロパティとして作成できる。
 */
Object.defineProperty(Object, "assignDescriptors", {
    // Object.assign()の属性と同じにする。
    writable: true,
    enumerable: false,
    configurable: true,
    value: function (target, ...sources) {
        for (let source of sources) {
            for (let name of Object.getOwnPropertyNames(source)) {
                let desc = Object.getOwnPropertyDescriptor(source, name);
                Object.defineProperty(target, name, desc);
            }

            for (let symbol of Object.getOwnPropertySymbols(source)) {
                let desc = Object.getOwnPropertyDescriptor(source, symbol);
                Object.defineProperty(target, symbol, desc);
            }
        }
        return target;
    }
});

let o = { c: 1, get count() { return this.c++; } };     // ゲッターを持つオブジェクトを定義。
let p = Object.assign({}, o);                       // プロパティの値をコピーする。
let q = Object.assignDescriptors({}, o);            // プロパティディスクリプタをコピーする。
p.count // => 1: これは単なるデータプロパティになっているので、
p.count // => 1: カウンタはインクリメントされない。
q.count // => 2: コピーするときに最初のインクリメントが行われている。
q.count // => 3: ゲッターメソッドをコピーしたので、インクリメントされる。