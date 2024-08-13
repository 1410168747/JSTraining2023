(function updateClock() { // SVG時計の画像を更新して現在時刻を表示する。
    const now = new Date();// 現在時刻。

    const sec = now.getSeconds();// 秒。
    const min = now.getMinutes() + sec / 60;// 小数部を持つ分。
    const hour = (now.getHours() % 12) + min / 60;// 小数部を持つ時。

    const secangle = sec * 6;// 1秒あたり6度。
    const minangle = min * 6;// 1分あたり6度。
    const hourangle = hour * 30;// 1時間あたり30度。

    // 時計の針のSVG要素を取得する。
    const minhand = document.querySelector("#clock .minutehand");
    const hourhand = document.querySelector("#clock .hourhand");

    const sechand = document.querySelector("#clock .secondhand") ?? document.createElementNS("http://www.w3.org/2000/svg", "line");
    sechand.setAttribute("class", "secondhand");
    sechand.setAttribute("x1", "50");
    sechand.setAttribute("y1", "50");
    sechand.setAttribute("x2", "50");
    sechand.setAttribute("y2", "15");
    sechand.setAttribute("stroke", "red");
    sechand.setAttribute("stroke-width", "1");
    document.querySelector("#clock").appendChild(sechand);

    // SVG属性を設定して、時計盤の中で回転する。
    sechand.setAttribute("transform", `rotate(${secangle},50,50)`);
    minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
    hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);

    // 1秒後にこの関数を再度実行する。
    setTimeout(updateClock, 1000);
}()); // ここで関数を即座に実行していることに注意。

