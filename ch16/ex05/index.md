<section>
    <h2>問</h2>
    <blockquote>
        1. 標準入力、標準出力、標準エラー出力、リダイレクト、パイプという単語について調べなさい
    </blockquote>
    <section>
        <h3>答案</h3>
        調べました。
        <dl>
            <dt>標準入力</dt>
            <dd>
                <blockquote cite="https://e-words.jp/w/標準入力.html">
                    <p>
                        コンピュータ上で実行されているプログラムが、特に何も指定されていない場合に標準的に利用するデータ入力元。システム上では “stdin” の略号で表されることが多い。
                    </p>
                    <p>
                        コンピュータの入力装置やオペレーティングシステム（OS）が提供するデータ入力機能・経路などを指し、多くのシステムではキーボード装置による利用者の文字入力が標準入力に設定されている。プログラム実行時にリダイレクトなどの機能を用いて指定ファイルからの読み込みなどに変更することもできる。
                    </p>
                </blockquote>
            </dd>
            <dt>標準出力</dt>
            <dd>
                <blockquote cite="https://e-words.jp/w/標準出力.html">
                    <p>
                        コンピュータ上で実行されているプログラムが、特に何も指定されていない場合に標準的に利用するデータ出力先。システム上では “stdout” の略号で表されることが多い。
                    </p>
                    <p>
                        コンピュータの出力装置やオペレーティングシステム（OS）が提供するデータ出力機能・経路などを指し、多くのシステムではディスプレイ装置による利用者への文字表示が標準出力に設定されている。プログラム実行時にリダイレクトなどの機能を用いて指定ファイルへの書き込みなどに変更することもできる。
                    </p>
                </blockquote>
            </dd>
            <dt>標準エラー出力</dt>
            <dd>
                <blockquote cite="https://e-words.jp/w/標準エラー出力.html">
                    <p>コンピュータ上で実行されているプログラムが、特に何も指定されていない場合に標準的に利用するエラー出力先。システム上では “stderr” の略号で表されることが多い。</p>
                    <p>
                        コンピュータの出力装置やオペレーティングシステム（OS）が提供するデータ出力機能・経路などを指し、プログラム実行時にエラーが発生した際にエラーコードやメッセージを出力する先を表す。多くのシステムではディスプレイへの文字表示が標準エラー出力に設定されているが、操作や設定により指定ファイルへの書き込みなどに変更することもできる。
                    </p>
                </blockquote>
            <dt>リダイレクト</dt>
            <dd>
                <blockquote cite="https://e-words.jp/w/リダイレクト.html">
                    <p>
                        オペレーティングシステム（OS）のシェルの機能の一つで、コマンドやプログラムを実行する際のデータの入力元や出力先を利用者の指定した先に切り替えることを「リダイレクト」あるいは「リダイレクション」という。
                    </p>
                    <p>
                        文字列によるデータの入出力を基本とする操作体系（CLI/CUI）では、標準の入力元（標準入力）がキーボード、標準の出力先（標準出力）がディスプレイに設定されていることが多いが、リダイレクトを利用することでプログラムの実行時にこれらを一時的に切り替えることができる。
                </blockquote>
                </p>
            </dd>
            <dt>パイプ</dt>
            <dd>
                <blockquote cite="https://e-words.jp/w/パイプ.html">
                    パイプ（pipe）とは、プログラム間でデータを受け渡すプロセス間通信（IPC）の手法の一つで、あるプログラムの出力を別のプログラムの入力として渡す仕組み。UNIX系OSで標準的な手法として広まり、Windowsなど他のOSにも似た機能が普及した。
                </blockquote>
            </dd>
        </dl>
    </section>
    <section>
        <h3>参考</h3>
        <ul>
            <li><a ref="https://e-words.jp/w/標準入力.html">標準入力（stdin）とは - IT用語辞典 e-Words</a></li>
            <li><a ref="https://e-words.jp/w/標準出力.html">標準出力（stdout）とは - IT用語辞典 e-Words</a></li>
            <li><a ref="https://e-words.jp/w/標準エラー出力.html">標準入力（stderr）とは - IT用語辞典 e-Words</a></li>
            <li><a ref="https://e-words.jp/w/リダイレクト.html">パイプとは - IT用語辞典 e-Words</a></li>
            <li><a ref="https://e-words.jp/w/パイプ.html">標準入力（stdin）とは - IT用語辞典 e-Words</a></li>
        </ul>
    </section>
</section>
<section>
    <h2>問</h2>
    <blockquote>
        2. 以下のコードを `cat.mjs` というファイルに保存し、後述する実験の結果を予測し、実際に実験しなさい
        実験: `file` は適当なファイルとし `invalid-file` は存在しないファイルとしなさい
        <ul>
            <li>`node cat.mjs`</li>
            <li>`echo FOO | node cat.mjs`</li>
            <li>`node cat.mjs > output.txt`</li>
            <li>`node cat.mjs file`</li>
            <li>`node cat.mjs file > output.txt`</li>
            <li>`node cat.mjs invalid-file > output.txt`</li>
            <li>`node cat.mjs invalid-file 2> error.txt`</li>
        </ul>
    </blockquote>
    <section>
        <h3>答案</h3>
        <table>
            <caption>
                Front-end web developer course 2021
            </caption>
            <thead>
                <tr>
                    <th scope="col">コマンド</th>
                    <th scope="col">予想</th>
                    <th scope="col">理由</th>
                    <th scope="col">結果</th>
                    <th scope="col">考察</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row"><code>node cat.mjs</code></td>
                    <td>標準入力から入力でき、入力内容が標準出力に出力される</td>
                    <td><code>process.argv</code>が<code>["node", "cat.mjs"]</code>となり,
                    条件<code>process.argv.length > 2</code>が<code>false</code>になるので、<code>else</code>の分析が実行されると予想
                    </td>
                    <td>標準入力から入力でき、入力内容が標準出力に出力される。ただし<code>process.argv</code>は<code>["/usr/local/bin/node", "/Users/(中略)/JSTraining2023/ch16/ex05/cat.mjs"]</code>
                    </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td scope="row"><code>echo FOO | node cat.mjs</code></td>
                    <td><code>FOO</code>が標準出力に表示される</td>
                    <td><code>process.argv</code>が<code>["/usr/local/bin/node", "/Users/(中略)/JSTraining2023/ch16/ex05/cat.mjs", "FOO"]</code>となり,
                    条件<code>process.argv.length > 2</code>が<code>true</code>になるので、<code>if</code>の分析が実行されると予想
                    </td>
                    <td>予想通り/code>
                    </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td scope="row"><code>node cat.mjs > output.txt</code></td>
                    <td>標準入力から入力でき、入力内容が<i>output.txt</i>に出力される</td>
                    <td><code>process.argv</code>が<code>["node", "cat.mjs"]</code>となり<code>process.argv.length > 2</code>が<code>false</code>になるので、<code>else</code>の分析が実行される。結果は<i>output.txt</i>に書き込まれると予想。
                    </td>
                    <td>予想通り</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td scope="row"><code>node cat.mjs file</code></td>
                     <td><code>file</code>の内容が標準出力に表示される</td>
                    <td><code>process.argv</code>が<code>["/usr/local/bin/node", "/Users/(中略)/JSTraining2023/ch16/ex05/cat.mjs", "file"]</code>となり<code>process.argv.length > 2</code>が<code>true</code>になるので、<code>if</code>の分析が実行され、<code>file</code>の内容が標準出力に表示されると予想。
                    </td>
                    <td>予想通り</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td scope="row"><code>node cat.mjs file > output.txt</code></td>
                     <td><code>file</code>の内容が<code>output.txt</code>に記載される</td>
                    <td><code>process.argv</code>が<code>["/usr/local/bin/node", "/Users/(中略)/JSTraining2023/ch16/ex05/cat.mjs", "FOO"]</code>となり<code>process.argv.length > 2</code>が<code>true</code>になるので、<code>if</code>の分析が実行され、<code>file</code>の内容が出力されると予想。なお、出力は<code>output.txt<code>にリダイレクトされる。
                    </td>
                    <td>予想通り</td>
                    <td>-</td>
                </tr>
                 <tr>
                    <td scope="row"><code>node cat.mjs invalid-file > output.txt</code></td>
                     <td><i>invalid-file</i>が見つからないエラーが標準エラー出力に表示される</td>
                    <td><i>invalid-file</i>が存在しないためエラーが発生し、エラー情報が標準エラー出力に表示される。
                    </td>
                    <td>予想通り</td>
                    <td>-</td>
                </tr>
                 <tr>
                    <td scope="row"><code>node cat.mjs invalid-file 2> error.txt</code></td>
                     <td><i>invalid-file</i>が見つからないエラーが標準エラー出力に表示される</td>
                     <td><i>invalid-file</i>が存在しないためエラーが発生し、エラー情報が標準エラー出力に表示される。なお、標準エラー出力は出力は<code>2 ></code>で<i>error.txt<i>にリダイレクトされている
                    </td>
                    <td>予想通り</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </section>
