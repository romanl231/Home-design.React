import ImageLink from "shared/components/ImageLink";

import Link from "../../shared/components/Link";
import { NetworkRefs } from "./NetworkRefs";
import { CopyrightInfo } from "./CopyrightInfo";

const InfoField: React.FC = () => {
  return (
    <div className="w-full pt-6 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
        <NetworkRefs/>
        <CopyrightInfo/>
      </div>
    </div>
  );
};

export default InfoField;