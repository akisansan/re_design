require "em-websocket"


# 配列ではなくEventMachineオブジェクトを生成
connections = EM::Channel.new


EM::WebSocket.start(host: "localhost", port: 3000) do |ws_conn|
  ws_conn.onopen do
    # EventMachine#subscribeを用い、コネクションオブジェクトと処理を登録
    connections.subscribe{|message| ws_conn.send(message) }
  end


  ws_conn.onmessage do |message|
    # onopen内で登録した処理を呼び出し
    connections.push(message)
  end
end
