import { useNavigate } from "react-router-dom";
import ChatSVG from "./ChatIcon";

interface ChatButtonProps {
    navigateTo: string;
    className: string;
}

const ChatButton: React.FC<ChatButtonProps> = ({navigateTo, className}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    }

    return (
        <div onClick={handleClick} className={className}>
            <ChatSVG/>
        </div>
    );
}

export default ChatButton;