import { useNavigate } from "react-router-dom";
import ArrowActionLink from "shared/components/ArrowActionLink";

const navigate = useNavigate();

const handleClick = () => {
    navigate("/find-out-more");
}

const InfoPanel = () => (
  <div className="max-w-md text-left space-y-4">
    <h2 className="text-4xl text-[#4a4035]">
      We stay by your side to design your projects
    </h2>
    <p className="text-[#6f6256] text-sm leading-relaxed">
      Just a quick form to help us understand your needs better, send you a renovation estimate by email, and keep in touch for future updates.
    </p>
    <ArrowActionLink 
        linkText="Find out more" 
        handleClick={handleClick}/>
  </div>
);

export default InfoPanel;
