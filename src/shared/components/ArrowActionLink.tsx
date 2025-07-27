import ArrowSvg from "./ArrowSvg";

interface ArrowActionLinkProps {
  linkText: string;
  handleClick: () => void;
}

const ArrowActionLink: React.FC<ArrowActionLinkProps> = ({ linkText, handleClick }) => {
  return (
    <div onClick={handleClick} style={{ color: "#A06056" }} className="cursor-pointer flex items-center gap-2 text-[20px]">
      {linkText}
      <ArrowSvg />
    </div>
  );
};

export default ArrowActionLink;