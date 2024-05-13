import iconsSvg from "../../../../../assets/icons";

interface OptionProps {
  icon: string;
  title: string;
  targets: {
    content: string;
    icon: string;
  }[];
  select: boolean | false;
}

const Option: React.FC<OptionProps> = ({ icon, title, targets, select }) => {
  return (
    <div>
      <div
        className={`flex w-full items-start justify-start gap-5 ${select ? "rounded-tl-[10px] rounded-tr-[10px]" : "rounded-[10px]"} border border-[#ccc] py-[50px] pl-[40px] pr-[60px]`}
      >
        <div className="">
          <div className="flex flex-col items-start justify-start gap-4">
            <img
              src={icon}
              alt=""
              className="w-[60px] object-cover object-center"
            />

            <div className="font-montserrat text-[18px] font-bold text-[#0F2137]">
              {title}
            </div>
          </div>

          <div className="mt-5 flex flex-col items-start justify-start gap-4">
            {targets.map((target, index) => (
              <div key={index} className="flex items-start gap-3">
                <img src={target.icon} alt="" className="w-[20px]" />
                <span className="font-montserrat text-[14px] font-normal text-[#858B91]">
                  {target.content}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {select && (
        <div className="cursor-pointer rounded-bl-[10px] rounded-br-[10px] bg-[#F8F8FA] px-5 py-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start justify-start gap-1">
              <div className="font-montserrat text-[14px]">
                Bắt đầu ngay với chúng tôi
              </div>
              <div className="text-[26px] font-bold text-[#8D448B]">
                Sử dụng
              </div>
            </div>
            <img src={iconsSvg.arrowRight} alt="" className="w-[30px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Option;
