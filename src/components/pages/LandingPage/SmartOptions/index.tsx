import iconsSvg from "../../../../assets/icons";
import Option from "./Option";

interface SmartOptionsComponentProps {
  title: string;
  subTitle: string;
}

const mockData = {
  traditional: {
    icon: iconsSvg.userIcon,
    title: "Cách truyền thống",
    targets: [
      {
        content:
          "Lặp đi lặp lại các công việc 1 cách thủ công tốn nhiều thời gian",
        icon: iconsSvg.noCheckGray,
      },
      {
        content: "Khó quản lí các công việc và hiệu suất mang lại không cao",
        icon: iconsSvg.noCheckGray,
      },
      {
        content: "Cần nhiều nhân lực cho những công việc thực hiện thủ công",
        icon: iconsSvg.noCheckGray,
      },
      {
        content: "Tốn nhiều chi phí và công sức cho những công việc",
        icon: iconsSvg.noCheckGray,
      },
    ],
  },
  tool: {
    icon: iconsSvg.toolIcon,
    title: "Sử dụng công cụ thông minh",
    targets: [
      {
        content:
          "Các công việc được thực hiện 1 các tự động hóa và không mất thời gian",
        icon: iconsSvg.checkGreen,
      },
      {
        content:
          "Quản lí các công việc dễ dàng, trực quan và mang lại hiệu quả cao",
        icon: iconsSvg.checkGreen,
      },
      {
        content: "Không cần nhiều nhân lực cho những công việc thủ công",
        icon: iconsSvg.checkGreen,
      },
      {
        content:
          "Tiết kiệm chi phí, thời gian, công sức cho những công việc thủ công",
        icon: iconsSvg.checkGreen,
      },
    ],
  },
};

const SmartOptionsComponent: React.FC<SmartOptionsComponentProps> = ({
  title,
  subTitle,
}) => {
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

      <div className="md: mt-20 flex flex-col items-start justify-start gap-10 md:flex-row md:px-[120px]">
        <Option
          icon={mockData.traditional.icon}
          title={mockData.traditional.title}
          targets={mockData.traditional.targets}
          select={false}
        />
        <Option
          icon={mockData.tool.icon}
          title={mockData.tool.title}
          targets={mockData.tool.targets}
          select={true}
        />
      </div>
    </div>
  );
};

export default SmartOptionsComponent;
