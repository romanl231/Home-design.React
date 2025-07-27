import { useNavigate } from "react-router-dom";
import ActionCard from "shared/components/ActionCard";
import HandleImage from "shared/components/HandleImage";
import LinkList from "shared/components/LinkList";
import Logo from "shared/components/Logo";

const Navigation: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/learn-more");
    };

    return (
        <div className="grid 
                grid-cols-1 sm:grid-cols-2 
                lg:grid-cols-3 xl:grid-cols-6 
                gap-8 p-6">
            <div>
                <Logo />
            </div>

            <LinkList
                title="Products"
                linkList={[
                    { text: "Furniture", path: "/furn" },
                    { text: "Decoration", path: "/decor" },
                    { text: "Storage", path: "/stor" },
                    { text: "Baby and child", path: "/baby-and-child" },
                    { text: "Connected home", path: "connected-home" },
                ]}
            />
            <LinkList
                title="Rooms"
                linkList={[
                    { text: "Living room", path: "/livinroom" },
                    { text: "Dining room", path: "/dininroom" },
                    { text: "Cooked", path: "/cooked" },
                    { text: "Bedroom", path: "/bedroom" },
                    { text: "Bathroom", path: "/bath" },
                    { text: "Office", path: "/office" },
                    { text: "Laundry", path: "/laundry" },
                    { text: "Garage", path: "/garage" },
                ]}
            />
            <LinkList
                title="Services"
                linkList={[
                    { text: "Click and collect", path: "/click-and-collect" },
                    { text: "Conception", path: "/conception" },
                    { text: "Installation", path: "/installation" },
                    { text: "Advices", path: "/advices" },
                    { text: "Gift card", path: "/gift-card" },
                ]}
            />
            <LinkList
                title="About"
                linkList={[
                    { text: "Our story", path: "/story" },
                    { text: "Our stores", path: "/stores" },
                    { text: "Our partners", path: "/partners" },
                ]}
            />

            <ActionCard
                title="We respect our planet"
                handleClick={handleClick}
                linkText="Learn more"
                description="We’re taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly."
                image={
                    <HandleImage
                        imageDir="src/assets/images/room-with-lamps.png"
                        imgDescription="room-with-lamps"
                    />
                }
            />
        </div>
    );
};

export default Navigation;