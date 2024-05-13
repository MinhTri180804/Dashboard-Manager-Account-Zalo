import images from "../../assets/images";
import logoImages from "../../assets/logo";
import CoreValuesComponent from "../../components/pages/LandingPage/CoreValues";
import FeaturesComponent from "../../components/pages/LandingPage/Features";
import HeaderComponent from "../../components/pages/LandingPage/Header";
import HeadingLandingPageComponent from "../../components/pages/LandingPage/Heading";
import QAComponent from "../../components/pages/LandingPage/QA";
import SmartOptionsComponent from "../../components/pages/LandingPage/SmartOptions";
import SolutionComponent from "../../components/pages/LandingPage/Solution";
import ToolUIComponent from "../../components/pages/LandingPage/ToolUi";
import contentJson from "./content.json";

const LandingPage = () => {
  return (
    <>
      <div>
        <HeaderComponent />
        <section className="bg-[#F9FBFD] px-5 pt-[40px]">
          <HeadingLandingPageComponent
            logo={logoImages.logo}
            content={contentJson.heading.content}
            imageHeading={images.browserThree}
          />
        </section>
        <section className="px-[20px] py-[80px]">
          <FeaturesComponent
            title={contentJson.features.title}
            subTitle={contentJson.features.subTitle}
          />
        </section>
        <section className="px-[20px] py-[60px] md:container md:mx-auto md:max-w-[1280px] md:px-0">
          <CoreValuesComponent
            title={contentJson.coreValues.title}
            subTitle={contentJson.coreValues.subTitle}
          />
        </section>
        <section className="px-[20px] py-[60px] md:container md:mx-auto md:max-w-[1280px] md:px-[50px]">
          <SolutionComponent
            title={contentJson.Solution.title}
            subTitle={contentJson.Solution.subTitle}
          />
        </section>
        <section className="bg-[#F9FAFC] px-[20px] py-[60px] ">
          <div className="md:container md:mx-auto md:max-w-[1280px] md:px-[50px]">
            <ToolUIComponent
              title={contentJson.toolUI.title}
              subTitle={contentJson.toolUI.subTitle}
            />
          </div>
        </section>
        <section className="px-[20px] py-[60px] md:container md:mx-auto md:max-w-[1280px] md:px-[50px]">
          <SmartOptionsComponent
            title={contentJson.smartOptions.title}
            subTitle={contentJson.smartOptions.subTitle}
          />
        </section>
        <section className="px-[20px] py-[60px] md:container md:mx-auto md:max-w-[1280px] md:px-[150px]">
          <QAComponent
            title={contentJson.QA.title}
            subTitle={contentJson.QA.subTitle}
          />
        </section>
      </div>
      <footer className="bg-[#020718] px-[20px] py-[30px]">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-center font-montserrat text-[18px] font-bold text-[#FFFFFF] md:text-[24px]">
              {contentJson.footer.title}
            </h2>
            <h4 className="text-center font-montserrat text-[12px] font-normal text-[#FFFFFF] md:text-[14px]">
              {contentJson.footer.subTitle}
            </h4>
          </div>
          <div className="flex items-center justify-center gap-2">
            <input
              type="email"
              className="bg-[#161B2A] px-2 py-2 placeholder:text-[12px]"
              placeholder="Nhập email của bạn"
            />
            <button className="h-full rounded-[5px] bg-white px-2 py-2 text-black">
              Đăng kí ngay
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center pt-10">
          <img
            src={logoImages.logoAndBrandWhite}
            alt=""
            className="w-[150px]"
          />
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
