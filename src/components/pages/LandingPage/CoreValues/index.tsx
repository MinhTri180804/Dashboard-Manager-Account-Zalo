import images from "../../../../assets/images";
import dataJson from "../../../../pages/Landingpage/content.json";
import FeaturesItemType from "../../../../types/LandingPage/features";
import FeaturesItem from "../Features/FeaturesItem";

interface CoreValuesItemType {
  title: string;
  subTitle: string;
}

const dataCoreValues = [
  {
    name: dataJson.coreValues.featuresAutomation.name,
    description: dataJson.coreValues.featuresAutomation.description,
    image: images.featuresSix,
  },
  {
    name: dataJson.coreValues.flexibleAndEasyUsing.name,
    description: dataJson.coreValues.flexibleAndEasyUsing.description,
    image: images.featuresFour,
  },
];

const CoreValuesComponent: React.FC<CoreValuesItemType> = ({
  title,
  subTitle,
}) => {
  return (
    <div className="md:flex md:items-center md:justify-center md:gap-[40px]">
      <div className="md:flex-auto">
        <img
          src={images.browser}
          alt=""
          className="h-auto w-full rounded-[10px]"
        />
      </div>
      <div className="">
        <div className="mb-5 mt-5 flex flex-col gap-1 md:mt-0">
          <h4 className="font-montserrat text-[14px] font-bold uppercase text-[#8D448B] md:text-[16px]">
            {subTitle}
          </h4>
          <h2 className="text-[24px] font-bold text-[#0F2137] md:text-[32px]">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {dataCoreValues.map((item: FeaturesItemType, index) => (
            <FeaturesItem
              title={item.name}
              description={item.description}
              image={item.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValuesComponent;
