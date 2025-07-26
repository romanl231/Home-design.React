import ArrowActionLink from "./ArrowActionLink";

interface ActionCardProps {
    handleClick: () => void;
    title: string;
    linkText: string;
    description: string;
    image: JSX.Element;
}

const ActionCard: React.FC<ActionCardProps> = (
    {
        linkText, 
        handleClick, 
        title, 
        description, 
        image}) => {
    return (
        <div className="flex flex-col justify-between items-start max-w-[400px]">
            <h2>{title}</h2>

            <div className="w-full flex justify-center">
                {image}
            </div>

            <p className="text-left">
                {description}
            </p>

            <ArrowActionLink
                linkText={linkText}
                handleClick={handleClick}
            />
        </div>
    );
}

export default ActionCard;