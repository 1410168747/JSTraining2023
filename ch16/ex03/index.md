<section>
    <h2>問</h2>
    <blockquote>
        用語`AES`、`Base64`を調べて記しなさい。
    </blockquote>
    <section>
        <h3>答案</h3>
        調べました。
        <dl>
            <dt>AES</dt>
            <dd>
                <blockquote cite="https://e-words.jp/w/AES.html">
                    <p>
                        AES（Advanced Encryption
                        Standard）とは、2001年にアメリカ連邦政府標準の暗号方式として採用された、共通鍵暗号（秘密鍵暗号）方式の一つ。「AES」は米国立標準技術研究所（NIST）の標準規格としての名称であり、規格番号は「FIPS
                        PUB 197」、暗号方式（暗号アルゴリズム）そのものは「Rijndael」（ラインダール）とも呼ばれる。
                    </p>
                    <p>
                        開発元の許諾や対価の支払いが必要な特許技術などを含まず、完全な仕様が公開され、誰でも自由に利用することができる。有効な攻撃手法は見つかっておらず、高い安全性を誇る。
                    </p>
                    <p>
                        米政府関連の情報機器やシステムだけでなく様々な製品や技術規格などに採用され、共有鍵暗号の標準として全世界で広く普及している。身近な例では無線LAN（Wi-Fi）の通信の暗号化、インターネット上の通信を暗号化するSSL/TLS、圧縮ファイルの暗号化などで用いられている。
                    </p>
                </blockquote>
            </dd>
            <dt>Base64</dt>
            <dd>
                <blockquote cite="https://e-words.jp/w/Base64.html">
                    <p>
                        Base64とは、任意のデータを一定の規則に基づいて特定の文字種のみからなるテキスト（文字）データに置き換える変換方式の一つで、64種類の英数字のみを用いてデータを表現する方式。電子メールの添付ファイル（MIME）などでよく用いられる。
                    </p>
                    <p>
                        アルファベットの大文字（26文字）と小文字（26文字）、数字（10文字）、「+」「/」の2つの記号を用いてあらゆるデータを表現する。元のデータの置き換えには使わないが、規定の文字数に達しない場合に「=」も使用される。
                    </p>
                    <p>
                        ASCII形式のテキストしか受け付けないデータ形式や伝送路、あるいは特定の記号に制御用の機能が与えられていて使用できない状況などで、バイナリデータや多バイト文字を含む任意のデータを安全に表現することができる。
                    </p>
                </blockquote>
            </dd>
        </dl>
    </section>
    <section>
        <h3>参考</h3>
        <ul>
            <li><a ref="https://e-words.jp/w/AES.html">AESとは - IT用語辞典 e-Words</a></li>
            <li><a ref="https://e-words.jp/w/Base64.html">Base64とは - IT用語辞典 e-Words - IT用語辞典 e-Words</a></li>
        </ul>
    </section>
</section>
<section>
    <h2>問</h2>
    <blockquote>
        暗号化と`Base64`を適用した文字列を返す以下のコードを完成させなさい。穴埋め箇所では`crypto.Cipher`と`Buffer.from`を使用しなさい。

        なお、暗号化のアルゴリズムは`aes-256-cbc`を指定しなさい。

</blockquote>
    <section>
        <h3>答案</h3>
        <p><i>index.js</i> を参照</p>
    </section>
