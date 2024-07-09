console.log(`1. nav 要素内のリンク ("<a>") - ここから`);
    document.querySelectorAll('nav a').forEach(e => console.log(e))
    console.log(`1. nav 要素内のリンク ("<a>") - ここまで`);

    console.log(`2. 商品リスト (.product-list) 内の最初の商品 (.product-item): - ここから`);
    console.log(document.querySelector('.product-list .product-item:first-child'));
    console.log(`2. 商品リスト(.product - list) 内の最初の商品(.product - item): - ここまで`);

    console.log(`3. カートアイコンの画像("<img>") - ここから`);
    console.log(document.querySelector('.cart img'));
    console.log(`3. カートアイコンの画像("<img>") - ここまで`);

    console.log(`4. 商品リスト (.product-list) 内の価格 (.price) を表示する要素 - ここから`);
    document.querySelectorAll('.product-list .price').forEach(e => console.log(e));
    console.log(`4. 商品リスト (.product-list) 内の価格 (.price) を表示する要素 - ここまで`);

    console.log(`5. 商品リスト (.product-list) 内の全ての商品 (.product-item) の画像 ("<img>") - ここから`);
    document.querySelectorAll('.product-list .product-item img').forEach(e => console.log(e));
    console.log(`5. 商品リスト (.product-list) 内の全ての商品 (.product-item) の画像 ("<img>") - ここまで`);

    console.log(`6. 検索バー (.search-bar) 内の検索ボタン ("<button>") - ここから`);
    console.log(document.querySelector('.search-bar button'));
    console.log(`6. 検索バー (.search-bar) 内の検索ボタン ("<button>") - ここまで`);

    console.log(`7. フッター (footer) 内のパラグラフ ("<p>") 要素 - ここから`);
    document.querySelectorAll('footer p').forEach(e => console.log(e));
    console.log(`7. フッター (footer) 内のパラグラフ ("<p>") 要素 - ここまで`);

    console.log(`8. 商品リスト (.product-list) 内の偶数番目の商品 (.product-item) - ここから`);
    document.querySelectorAll('.product-list .product-item:nth-child(even)').forEach(e => console.log(e));
    console.log(`8. 商品リスト (.product-list) 内の偶数番目の商品 (.product-item) - ここまで`);

    console.log(`9. ヘッダー (header) 内のアカウントリンク (.account) の画像 ("<img>") - ここから`);
    console.log(document.querySelector('.account img'));
    console.log(`9. ヘッダー (header) 内のアカウントリンク (.account) の画像 ("<img>") - ここまで`);

    console.log(`10. ナビゲーションリンクのうち、"会社情報" のリンク - ここから`);
    console.log(document.querySelector('nav a[href="#about"]'));
    console.log(`10. ナビゲーションリンクのうち、"会社情報" のリンク - ここまで`);