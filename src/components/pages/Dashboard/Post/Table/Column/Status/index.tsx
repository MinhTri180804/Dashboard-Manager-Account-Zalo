import clsx from "clsx";
import { IRenderStatusProps } from "../../../../../../../types/Pages/Dashboard/Post";

const RenderStatus: React.FC<IRenderStatusProps> = ({ status }) => {
  const translateStatus =
    status === "done"
      ? "Đã hoàn thành"
      : status === "pending"
        ? "Đang chờ"
        : status === "stop"
          ? "Đang dừng"
          : status === "process"
            ? "Đang thực hiện"
            : "Có lỗi";
  return (
    <div className="flex items-center justify-start gap-3">
      <span className="relative flex h-3 w-3">
        <span
          className={clsx(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            [
              status === "done" && "bg-green-500",
              status === "pending" && "bg-yellow-500",
              status === "cancel" && "bg-red-500",
              status === "process" && "bg-blue-500",
              status === "stop" && "bg-gray-500",
            ],
          )}
        ></span>
        <span
          className={clsx("relative inline-flex h-3 w-3 rounded-full ", [
            status === "done" && "bg-green-500",
            status === "pending" && "bg-yellow-500",
            status === "cancel" && "bg-red-500",
            status === "process" && "bg-blue-500",
            status === "stop" && "bg-gray-500",
          ])}
        ></span>
      </span>
      <div
        className={clsx("min-w-[100px] md:w-fit", [
          status === "done" && "text-green-500",
          status === "pending" && "text-yellow-500",
          status === "cancel" && "text-red-500",
          status === "process" && "text-blue-500",
          status === "stop" && "text-gray-500",
        ])}
      >
        {translateStatus}
      </div>
    </div>
  );
};
export default RenderStatus;
