import { useNavigate } from "react-router-dom";
import ArrowActionLink from "shared/components/ArrowActionLink";

const InfoPanel: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/findoutmore");
    }

    return (
    <div className="max-w-md text-left space-y-4">
        <h2 className="text-4xl">
        We stay by your side to design your projects
        </h2>
        <p className="text-sm leading-relaxed">
        Just a quick form to help us understand your needs better, send you a renovation estimate by email, and keep in touch for future updates.
        </p>

        <ArrowActionLink 
            linkText="Find out more" 
            handleClick={handleClick}/>
    </div>
    );
};

export default InfoPanel;
