// divとinput要素を取得
const div = document.getElementById('editor-front');
const input = document.getElementById('editor-back');

// div要素をクリックしたときにinput要素にフォーカスを当てる
div.addEventListener('click', function () {
    input.focus();
});

// input要素がfocusされたらdivの背景色を灰色に変更
input.addEventListener('focus', function () {
    div.style.backgroundColor = 'silver';
});

// input要素からfocusが外れたらdivの背景色を白に戻す
input.addEventListener('blur', function () {
    div.style.backgroundColor = 'white';
});

// input要素への入力をdiv要素に表示
input.addEventListener('input', function () {
    div.textContent = input.value;
});