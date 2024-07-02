function makeProxy(o) {

    // 呼び出し履歴を記録するための配列
    const record = [];

    const handler = {
        // このハンドラは、値としてオブジェクトまたは関数を持つ独自プロパティの場合には、特別な処理を行い、値そのものではなくプロキシを返す。
        get(target, property, receiver) {
            let value = Reflect.get(target, property, receiver);

            // プロパティがターゲットの独自プロパティで、値がオブジェクトまたは関数の場合は、プロパティ用のProxyを返す。
            if (isMethod(target, property, value)) {
                //メソッドの引数を取得するために、Proxyでラップする。
                const methodHandler = {
                    apply(target, thisArg, argumentsList) {
                        // プロパティがメソッドの場合、呼び出しはapplyで補足できる。
                        record.push({
                            calledTime: new Date(),
                            methodName: property.toString(),
                            args: argumentsList// 引数記録
                        });
                        return Reflect.apply(target, thisArg, argumentsList);
                    }
                };
                return new Proxy(value, methodHandler);
            }
            // それ以外の場合は、値をそのまま返す。
            return value;
        },
    };
    return { proxy: new Proxy(o, handler), record }
}

function isMethod(target, property, value) {
    return Reflect.ownKeys(target).includes(property) && typeof value === "function";
}

export { makeProxy }

