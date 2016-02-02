var temperature = 0;        //温度
var humidity = 0;           //湿度
var pressure = 0;           //気圧

function notifyMe() {
  $.getJSON("http://192.168.1.172/redesign/humidity/env_data", function(data) {
    temperature = data.temperature;
    humidity = data.humidity;
    pressure = data.pressure;
  });

  //閾値以上になった場合に通知作成
  if (humidity > 30.0) {
    if (!("Notification" in window)) {
      alert("このブラウザはシステム通知をサポートしていません");
    }

    // すでに通知の許可を得ているか確認する
    else if (Notification.permission === "granted") {
      // 許可を得ている場合は、通知を作成する
      var notification = new Notification("Hi there!" + humidity);//Notification以下が通知内容
      notification.addEventListener('click', function() {
        console.log("hey");
        //  window.open('https://www.google.co.jp/');
        location.href = "https://www.google.co.jp";//通知バークリック時のジャンプ先
      });
    }

    // 許可を得ていない場合は、ユーザに許可を求めなければならない
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function(permission) {
        // ユーザが許可した場合は、通知を作成する
        if (permission === "granted") {
          var notification = new Notification("Hi there!" + humidity);
          // クリックでWebページを開く
          notification.addEventListener('click', function() {
            console.log("hey");
            //  window.open('https://www.google.co.jp/','home');
            location.href = "https://www.google.co.jp";
          });
        }
      });
    }
  }
}


timerID = setInterval('notifyMe();' /*定期的に呼び出す関数名*/ , 2000 /*呼び出す間隔*/ );
