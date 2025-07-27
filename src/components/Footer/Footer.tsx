import InfoField from "./InfoField";
import Navigation from "./Navigation";

const Footer: React.FC = () => {
    return (
        <section>
            <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-10 py-6">
                <footer className="w-full z-49">
                        <Navigation/>
                        <InfoField/>
                </footer>
            </div>
        </section>
    );
};

export default Footer;