import images from "../../../../assets/images";
import dataJson from "../../../../pages/Landingpage/content.json";
import FeaturesItemType from "../../../../types/Pages/LandingPage/features";
import FeaturesItem from "./FeaturesItem";

interface FeaturesComponentProps {
  title: string;
  subTitle: string;
}

const dataFeatures: FeaturesItemType[] = [
  {
    name: dataJson.features.list.managerJob.nameFeatures,
    description: dataJson.features.list.managerJob.description,
    image: images.features,
  },
  {
    name: dataJson.features.list.autoPost.nameFeatures,
    description: dataJson.features.list.autoPost.description,
    image: images.featuresTwo,
  },
  {
    name: dataJson.features.list.managerAccount.nameFeatures,
    description: dataJson.features.list.managerAccount.description,
    image: images.featuresThree,
  },
  {
    name: dataJson.features.list.managerProxy.nameFeatures,
    description: dataJson.features.list.managerProxy.description,
    image: images.featuresFour,
  },
  {
    name: dataJson.features.list.flexibleDevice.nameFeatures,
    description: dataJson.features.list.flexibleDevice.description,
    image: images.featuresFive,
  },
  {
    name: dataJson.features.list.support.nameFeatures,
    description: dataJson.features.list.support.description,
    image: images.featuresSix,
  },
];

const FeaturesComponent: React.FC<FeaturesComponentProps> = ({
  title,
  subTitle,
}) => {
  return (
    <div>
      <h2 className="px-[30px] text-center font-montserrat text-[24px] font-bold text-[#0F2137] md:text-[32px]">
        {title}
      </h2>
      <h4 className="mt-2 text-center font-montserrat text-[14px] text-[#858B91] md:text-[16px]">
        {subTitle}
      </h4>

      <div className="mt-[50px] flex w-full flex-col gap-7 md:container md:mx-auto md:grid md:max-w-[1280px] md:grid-cols-12 md:gap-[35px]">
        {dataFeatures.map((item: FeaturesItemType, index) => (
          <FeaturesItem
            title={item.name}
            description={item.description}
            image={item.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesComponent;
