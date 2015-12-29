//now, best js

function notifyMe() {
  // ブラウザが通知をサポートしているか確認する
  if (!("Notification" in window)) {
    alert("このブラウザはシステム通知をサポートしていません");
  }

  // すでに通知の許可を得ているか確認する
  else if (Notification.permission === "granted") {
    // 許可を得ている場合は、通知を作成する
    var notification = new Notification("Hi there!"+gTimeStart);
    notification.addEventListener('click', function() {
      console.log("hey");
      open('https://www.google.co.jp/');
    });
  }

  // 許可を得ていない場合は、ユーザに許可を求めなければならない
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // ユーザが許可した場合は、通知を作成する
      if (permission === "granted") {
        var notification = new Notification("Hi there!"+ gTimeStart);
        // クリックでWebページを開く
        notification.addEventListener('click', function() {
          console.log("hey");
          open('https://www.google.co.jp/');
        });
      }
    });
  }
  setTimeout('notifyMe();',1000);
}

  var dd = new Date();    // 開始時間取得
  var gTimeStart = dd.getTime();
  gTimeStart= gTimeStart/(1000*60);
  console.log(gTimeStart);

setTimeout('notifyMe();',1000);
