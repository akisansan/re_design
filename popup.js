


window.addEventListener('load', function () {
  // 始めに、通知の許可を得ているかを確認しましょう
  // 得ていなければ、尋ねましょう
  if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }

setTimeout('Timelimitcall();',1000);

  var button = document.getElementsByTagName('button')[0];
function Timelimitcall(){
  button.addEventListener('click', function () {
    if (window.Notification && Notification.permission === "granted") {
      var interval = window.setInterval(function () {
      var n = new Notification("Hi! " , {tag: 'soManyNotification'});
          window.clearInterval(interval);
      }, 200);
    }

    // 通知を受けたいか否かをユーザが告げていない場合
    // 注記: Chrome のために permission プロパティが設定されているかの確信が
    // 持てないため、値 "default" を確認するのは安全ではありません。
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }

        // ユーザが認めている場合
        if (status === "granted") {
            var interval = window.setInterval(function () {
            var n = new Notification("Hi! ", {tag: 'soManyNotification'});
              window.clearInterval(interval);
          }, 200);
        }

        // 認めていなければ、通常型の alert にフォールバックします
        else {
          alert("Hi!");
        }
      });
    }

    // ユーザが通知を拒否している場合
    else {
      // 通常型の alert にフォールバックできます
      alert("Hi!");
    }

  });
}
});
