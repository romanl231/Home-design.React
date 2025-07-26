import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";
import LinkedInIcon from "./LinkedInIcon";
import FacebookIcon from "./FacebookIcon";
import ImageLink from "shared/components/ImageLink";

export const NetworkRefs = () => {
    return (
        <div className="flex justify-center gap-6">
          <ImageLink icon={InstagramIcon} navigateTo="/instagram" />
          <ImageLink icon={TwitterIcon} navigateTo="/twitter" />
          <ImageLink icon={LinkedInIcon} navigateTo="/linkedin" />
          <ImageLink icon={FacebookIcon} navigateTo="/facebook" />
        </div>
    );
}