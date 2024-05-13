import { useState } from "react";
import iconsSvg from "../../../../assets/icons";
import images from "../../../../assets/images";
import { ToolUiItemType } from "../../../../types/LandingPage/toolUi";

interface ToolUIComponentProps {
  title: string;
  subTitle: string;
}

const mockData: ToolUiItemType[] = [
  {
    name: "Quản lí Jobs",
    image: images.browser,
    icons: {
      black: iconsSvg.managerJobsBlack,
      gray: iconsSvg.managerJobsGray,
    },
  },
  {
    name: "Đăng bài tự động",
    image: images.browserTwo,
    icons: {
      black: iconsSvg.autoPostBlack,
      gray: iconsSvg.autoPostGray,
    },
  },
  {
    name: "Thống kê",
    image: images.browserThree,
    icons: {
      black: iconsSvg.statisticalBlack,
      gray: iconsSvg.statisticalGray,
    },
  },
  {
    name: "Quản lí tài khoản",
    image: images.browser,
    icons: {
      black: iconsSvg.accountBlack,
      gray: iconsSvg.accountGray,
    },
  },
];

const ToolUIComponent: React.FC<ToolUIComponentProps> = ({
  title,
  subTitle,
}) => {
  const [toolUiActive, setToolUiActive] = useState<number>(0);
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-center font-montserrat text-[24px] font-bold text-[#0F2137] md:text-[32px]">
          {title}
        </h2>
        <h4 className="text-center text-[14px] font-normal text-[#858B91] md:text-[16px]">
          {subTitle}
        </h4>
      </div>

      <div className="w-full">
        <div className="mt-20 flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-0 md:px-[90px]">
          {mockData.map((item: ToolUiItemType, index: number) => (
            <div
              className={`border-b-2 ${toolUiActive === index ? "border-[#0F2137]" : "border-[#cccc]"} flex w-full cursor-pointer items-center justify-center gap-1 p-[30px] pt-0`}
              onClick={() => setToolUiActive(index)}
            >
              {toolUiActive === index ? (
                <img
                  src={item.icons.black}
                  alt="icon"
                  className="h-[20px] w-[20px] object-cover object-center"
                />
              ) : (
                <img
                  src={item.icons.gray}
                  alt="icon"
                  className="h-[20px] w-[20px] object-cover object-center"
                />
              )}
              <h5
                className={`font-montserrat text-[16px] font-bold ${toolUiActive === index ? "text-[#0F2137]" : "text-[#cccc]"}`}
              >
                {item.name}
              </h5>
            </div>
          ))}
        </div>

        <div className="mt-10 w-full">
          <img
            src={mockData[toolUiActive].image}
            alt="browser"
            className="w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ToolUIComponent;
