import React from "react";
import { useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    }

    return <h1 className="text-[34px]" onClick={handleClick}>antic</h1>
}

export default Logo;