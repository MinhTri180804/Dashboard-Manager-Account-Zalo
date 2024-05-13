import images from "../../../../assets/images";
import dataJson from "../../../../pages/Landingpage/content.json";
import ButtonLandingPage from "../Button";

interface SolutionComponentProps {
  title: string;
  subTitle: string;
}

const SolutionComponent: React.FC<SolutionComponentProps> = ({
  title,
  subTitle,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-10">
        <div className="order-2 flex flex-col gap-7 md:order-1">
          <div className="flex flex-col items-start justify-start gap-2">
            <h4 className="font-montserrat text-[14px] font-bold uppercase text-[#8D448B] md:text-[16px]">
              {subTitle}
            </h4>

            <h2 className="font-montserrat text-[24px] font-bold text-[#0F2137] md:text-[32px]">
              {title}
            </h2>
          </div>

          <ul className="flex list-disc flex-col items-start justify-start gap-2 pl-5">
            {dataJson.Solution.list.map(
              (item: { content: string }, index: number) => (
                <li
                  className="font-montserrat text-[14px] font-normal text-[#02073E]"
                  key={index}
                >
                  {item.content}
                </li>
              ),
            )}
          </ul>

          <div className="md:w-1/2">
            <ButtonLandingPage content="Xem thêm" />
          </div>
        </div>
        <div className="order-1 md:order-2 md:flex-auto">
          <img
            src={images.digitalTools}
            alt=""
            className="h-auto w-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default SolutionComponent;
