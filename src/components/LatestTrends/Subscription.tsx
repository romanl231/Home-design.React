import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowActionLink from "shared/components/ArrowActionLink";
import InputField from "shared/components/EmailInputField";
import SubscribeButton from "./SubscribeButton";
import { SubscribtionService } from "api/subscription";

const Subscription: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const handleClick = () => {
        navigate("/sub-info")
    };

    const handleSubscribtion = () => {
        if(email != "" && email != null) {
            SubscribtionService.subscribe({email});
            alert("Hello subscriber");
        }
        else {
            alert("Input email first");
        }
    }

    return (
        <section className="bg-white-custom">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 px-6 py-10">
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-semibold">Be aware of the latest trends</h2>
                    <p className="text-base text-gray-700">
                        Stay informed of new trends, but also of our various offers.
                    </p>
                    <ArrowActionLink linkText="Learn more" handleClick={handleClick} />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:items-center w-full lg:w-auto">
                    <form onSubmit={handleSubscribtion}>
                        <InputField 
                            email={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <SubscribeButton />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscription;