import { useNavigate } from "react-router-dom";
import ChatSVG from "./ChatIcon";

interface ChatButtonProps {
    navigateTo: string;
}

const ChatButton: React.FC<ChatButtonProps> = ({navigateTo}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    }

    return (<div onClick={handleClick}>
        <ChatSVG/>
    </div>);
}

export default ChatButton;