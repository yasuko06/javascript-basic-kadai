// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");
const h2 = document.getElementById("text");

// HTML要素がクリックされたときにイベント処理を実行し２秒後に表示を変更する

btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました。';
}, 2000);
});
