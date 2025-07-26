import { useNavigate } from "react-router-dom";

interface LinkProps {
    linkText: string;
    navigateTo: string;
}

const Link: React.FC<LinkProps> = ({linkText, navigateTo}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo)
    }

    return(
     <div className="text-[18px]" 
     onClick={handleClick}>
        {linkText} </div>   
    );
};

export default Link;