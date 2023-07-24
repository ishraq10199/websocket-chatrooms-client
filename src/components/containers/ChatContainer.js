import SendMessageForm from "../SendMessageForm";
import MessageContainer from "./MessageContainer";
import { socket } from "../../utils/socket";

const ChatContainer = () => {
  return (
    <div>
      <MessageContainer />
      <SendMessageForm />
    </div>
  );
};

export default ChatContainer;
