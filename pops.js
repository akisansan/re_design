
function notifyMe() {
  // ブラウザが通知をサポートしているか確認する
  if (!("Notification" in window)) {
    alert("このブラウザはシステム通知をサポートしていません");
  }

  // すでに通知の許可を得ているか確認する
  else if (Notification.permission === "granted") {
    // 許可を得ている場合は、通知を作成する
    var notification = new Notification("Hi there!");
  }

  // 許可を得ていない場合は、ユーザに許可を求めなければならない
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // ユーザが許可した場合は、通知を作成する
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // 最後に、ユーザが通知を拒否した場合は、これ以上ユーザに
  // 迷惑をかけてはいけないことを尊重すべきです。
}

function spawnNotification(theBody,theIcon,theTitle) {
  var options = {
      body: theBody,
      icon: theIcon
  }
  var n = new Notification(theTitle,options);
  setTimeout(n.close.bind(n), 5000);
}

function randomNotification() {
  var randomQuote = quoteChooser();
  var options = {
      body: randomQuote,
      icon: 'img/sad_head.png',
  }

  var n = new Notification('Emogotchi says',options);
  setTimeout(n.close.bind(n), 5000);
}
