import { useEffect } from "react";
import "./App.css";
import ChatContainer from "./components/containers/ChatContainer";
import { socket } from "./utils/socket";

function App() {
  useEffect(() => {
    function onConnect() {
      console.log("Connected to ", socket.id);
    }
    function onDisconnect() {
      console.log("Disconnected");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
  }, []);

  return (
    <div className="flex justify-center">
      <ChatContainer />
    </div>
  );
}

export default App;
