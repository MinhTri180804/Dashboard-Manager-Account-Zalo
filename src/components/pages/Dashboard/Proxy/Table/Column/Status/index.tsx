import clsx from "clsx";

interface IRenderStatusProxyProps {
  status: string;
}

const RenderStatusProxy: React.FC<IRenderStatusProxyProps> = ({ status }) => {
  const translateStatus =
    status === "pending"
      ? "Đang chờ"
      : status === "stop"
        ? "Đang dừng"
        : status === "process"
          ? "Đang hoạt động"
          : "Có lỗi";
  return (
    <div className="flex w-[200px] items-center justify-start gap-3 md:w-full">
      <span className="relative flex h-3 ">
        <span
          className={clsx(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
            [
              status === "pending" && "bg-yellow-500",
              status === "cancel" && "bg-red-500",
              status === "process" && "bg-green-500",
              status === "stop" && "bg-gray-500",
            ],
          )}
        ></span>
        <span
          className={clsx("relative inline-flex h-3 w-3 rounded-full ", [
            status === "pending" && "bg-yellow-500",
            status === "cancel" && "bg-red-500",
            status === "process" && "bg-green-500",
            status === "stop" && "bg-gray-500",
          ])}
        ></span>
      </span>
      <div
        className={clsx("min-w-[100px] md:w-fit", [
          status === "pending" && "text-yellow-500",
          status === "cancel" && "text-red-500",
          status === "process" && "text-green-500",
          status === "stop" && "text-gray-500",
        ])}
      >
        {translateStatus}
      </div>
    </div>
  );
};

export default RenderStatusProxy;
