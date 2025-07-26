import InfoField from "./InfoField";
import Navigation from "./Navigation";

const Footer: React.FC = () => {
    return (
        <section>
            <footer className="w-full z-50">
                    <Navigation/>
                    <InfoField/>
            </footer>
        </section>
    );
};

export default Footer;