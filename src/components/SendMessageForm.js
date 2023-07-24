import { useRef } from "react";
import { BsSendFill } from "react-icons/bs";
import { socket } from "../utils/socket";

const SendMessageForm = () => {
  const inputRef = useRef("");

  const onSendMessage = (message) => {
    console.log("[SendMessageForm]", message);
    socket.emit("send-message", message);
  };

  // socket.on("send-message", onSendMessage);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSendMessage(inputRef.current);
        }}
      >
        <div className="flex justify-center bg-slate-300 p-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a message"
            className="p-2 rounded-lg placeholder:italic"
          />
          <button type="submit" className="mx-2">
            <div className="rounded-full bg-blue-700 p-2">
              <BsSendFill className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessageForm;
