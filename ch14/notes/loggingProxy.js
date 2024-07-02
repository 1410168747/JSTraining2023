function loggingProxy(o, objname) {
    // ログを記録するProxyオブジェクト用にハンドラを定義する。
    // 各ハンドラはメッセージを記録した後、ターゲットオブジェクトに委譲する。
    const handlers = {
        // このハンドラは、値としてオブジェクトまたは関数を
        // 持つ独自プロパティの場合には、特別な処理を行い、
        // 値そのものではなくプロキシを返す。
        get(target, property, receiver) {
            // get操作をログに記録する。
            console.log(`Handler get(${objname},${property.toString()})`);

            // Reflect APIを使ってプロパティの値を取得する。
            let value = Reflect.get(target, property, receiver);

            // プロパティがターゲットの独自プロパティで、値がオブジェクトまたは
            // 関数の場合は、プロパティ用のProxyを返す。
            if (Reflect.ownKeys(target).includes(property) &&
                (typeof value === "object" || typeof value === "function")) {
                return loggingProxy(value, `${objname}.${property.toString()}`)
            }

            // それ以外の場合は、値をそのまま返す。
            return value;
        },

        // 以下の3つのメソッドについては何も特別な点はない。
        // 処理をログに記録した後、ターゲットオブジェクトに処理を委譲する。
        // これらは特殊なケースであり、無限再帰の原因となりうる
        // receiverオブジェクトをログに記録することを避けるため。
        set(target, prop, value, receiver) {
            console.log(`Handler set(${objname},${prop.toString()},${value})`);
            return Reflect.set(target, prop, value, receiver);
        },
        apply(target, receiver, args) {
            console.log(`Handler ${objname}(${args})`);
            return Reflect.apply(target, receiver, args);
        },
        construct(target, args, receiver) {
            console.log(`Handler ${objname}(${args})`);
            return Reflect.construct(target, args, receiver);
        }
    };

    // 残りのハンドラは自動的に生成できる。
    // メタプログラミング最高！
    Reflect.ownKeys(Reflect).forEach(handlerName => {
        if (!(handlerName in handlers)) {
            handlers[handlerName] = function (target, ...args) {
                // 操作をログに記録する。
                console.log(`Handler ${handlerName}(${objname},${args})`);
                // 操作を委譲する。
                return Reflect[handlerName](target, ...args);
            };
        }
    });

    // これらのログ記録用のハンドラを使って、このオブジェクト用のプロキシを返す。
    return new Proxy(o, handlers);
}