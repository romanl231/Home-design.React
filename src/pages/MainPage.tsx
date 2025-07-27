import FindYourRoom from "components/DesignScroller/FindYourRoom";
import IntroSection from "components/Intro/IntroSection";
import Subscription from "components/LatestTrends/Subscription";

const Homepage = () => {
    return (
        <div>
            <IntroSection/>
            <FindYourRoom/>
            <Subscription/>
        </div>
    );
};

export default Homepage;