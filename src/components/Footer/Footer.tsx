import InfoField from "./InfoField";
import Navigation from "./Navigation";

const Footer: React.FC = () => {
    return (
        <footer className="w-full z-50">
                <Navigation/>
                <InfoField/>
        </footer>
    );
};

export default Footer;