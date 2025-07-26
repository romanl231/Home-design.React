import DownArrowSvg from "./DownArrowSvg";

interface DownArrowButtonProps {
    handleClick: () => void;
}

const DownArrowButton: React.FC<DownArrowButtonProps> = ({handleClick}) => {
    return (
        <div onClick={handleClick}>
            <DownArrowSvg/>
        </div>
    );
};

export default DownArrowButton;