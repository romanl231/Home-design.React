import { useNavigate } from "react-router-dom";

interface ImageLinkProps {
    icon: () => JSX.Element;
    navigateTo: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({icon, navigateTo}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo)
    }

    return(
        <div 
        className="text-[18px]" 
        onClick={handleClick}>
            {icon()} 
        </div>   
    );
};

export default ImageLink;