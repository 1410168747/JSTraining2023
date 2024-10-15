<section>
    <h2>問</h2>
    <blockquote>
       用語「C10K問題」について調べて説明しなさい。
    </blockquote>
    <section>
        <h3>答案</h3>
        <dl>
            <dt>C10K問題</dt>
            <dd>
                <blockquote cite="https://ja.wikipedia.org/wiki/C10K問題">
                    <p>
                       C10K問題（英語: C10K problem）とは、Apache HTTP ServerなどのWebサーバソフトウェアとクライアントの通信において、クライアントが約1万台に達すると、Webサーバーのハードウェア性能に余裕があるにもかかわらず、レスポンス性能が大きく下がる問題である。
                    </p>
                    (中略)
                    <p>
                    Apacheはクライアントの接続一つ一つに対してプロセスを生成する仕様となっている。そのため大量のクライアントから接続があった場合、その数だけプロセスを生成しなければならない。しかし、WindowsあるいはLinuxなどのUNIX系OSでは、同時に起動できるプロセスに32767(215-1)個の制限がある。この制限を超えるとプロセスを新規生成することができなくなるため、既にあるリクエストの処理が終わるまで新たな接続は待たなければならない。これがC10Kの主な原因である。
                    <p>
                </blockquote>
            </dd>
            古典的には1つのプロセスで1つのクライアントを処理していたが、前述の通りプロセスの上限値が小さいので、1つのプロセスで複数のクライアントを処理することで問題を回避する方法がある。

        </dl>
    </section>
    <section>
        <h3>参考</h3>
        <ul>
            <li><a ref="https://ja.wikipedia.org/wiki/C10K問題">C10K問題 - Wikipedia</a></li>
        </ul>
    </section>

</section>
