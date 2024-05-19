import clsx from "clsx";
import { IRenderStatusProps } from "../../../../../../../types/Pages/Dashboard/Post";

const RenderStatusAccountZalo: React.FC<IRenderStatusProps> = ({ status }) => {
  const translateStatus =
    status === "stop"
      ? "Không hoạt động"
      : status === "process"
        ? "Đang hoạt động"
        : "Có lỗi";
  return (
    <div className="flex items-center justify-start gap-3">
      <span className="relative flex h-3 w-3">
        <span
          className={clsx(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            [
              status === "process" && "bg-green-500",
              status === "stop" && "bg-gray-500",
            ],
          )}
        ></span>
        <span
          className={clsx("relative inline-flex h-3 w-3 rounded-full ", [
            status === "process" && "bg-green-500",
            status === "stop" && "bg-gray-500",
          ])}
        ></span>
      </span>
      <div
        className={clsx("min-w-[100px] md:w-fit", [
          status === "process" && "text-green-500",
          status === "stop" && "text-gray-500",
        ])}
      >
        {translateStatus}
      </div>
    </div>
  );
};
export default RenderStatusAccountZalo;
