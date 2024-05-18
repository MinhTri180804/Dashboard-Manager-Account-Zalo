import { Button, Dropdown, Modal, Space } from "antd";
import { useState } from "react";
import { items } from "../../../../../../../../pages/Dashboard/ManagerJobs/mock";
import { ActionType } from "../../../../../../../../types/Pages/Dashboard/Jobs";
interface IRenderActionsProps {
  actions: ActionType[];
}

const RenderActionsJob: React.FC<IRenderActionsProps> = ({ actions }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const actionViewDetails = () => {
    setIsOpenModal(true);
  };

  const handleOnClose = () => {
    setIsOpenModal(false);
  };

  const handleOnOk = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <Space size={"middle"} className="hidden md:flex">
        {actions.map((action: ActionType) => {
          switch (action.id) {
            case "view-detail":
              return (
                <Button
                  disabled={!action.status}
                  className="hover:!border-[#ef4137] hover:!text-[#ef4137]"
                  key={action.id}
                  onClick={actionViewDetails}
                >
                  {action.title}
                </Button>
              );
            case "delete":
              return (
                <Button
                  disabled={!action.status}
                  type="primary"
                  danger
                  key={action.id}
                >
                  {action.title}
                </Button>
              );
            case "stop":
              return (
                <Button
                  type="primary"
                  key={action.id}
                  disabled={!action.status}
                  className="bg-gray-500 text-white  hover:!bg-gray-600 disabled:hover:!bg-gray-100"
                >
                  {action.title}
                </Button>
              );
            case "continue":
              return (
                <Button
                  type="primary"
                  key={action.id}
                  disabled={!action.status}
                >
                  {action.title}
                </Button>
              );
            default:
              return null;
          }
        })}
      </Space>

      <Dropdown
        menu={{ items }}
        placement="bottom"
        arrow
        className="md:!hidden"
      >
        <Button>Tùy chọn</Button>
      </Dropdown>

      <Modal
        title="Chi tiết công việc"
        open={isOpenModal}
        onOk={handleOnOk}
        okButtonProps={{ hidden: true }}
        cancelText="Đóng"
        onCancel={() => handleOnClose()}
      >
        <div className="w-full">
          <div className="flex w-full">
            <div className="w-[40%]">Tên chiến dịch:</div>
            <div className="w-[60%] font-medium">Chiến dịch số 1</div>
          </div>
          <div className="flex w-full">
            <div className="w-[40%]">Mục tiêu:</div>
            <div className="w-[60%] font-medium">Gửi đến tất cả nhóm</div>
          </div>
          <div className="flex w-full">
            <div className="w-[40%]">Khung giờ gửi:</div>
            <div className="w-[60%] font-medium">Cả ngày</div>
          </div>
          <div className="flex w-full">
            <div className="w-[40%]">Độ trễ:</div>
            <div className="w-[60%] font-medium">400-500 giây</div>
          </div>
          <div className="flex w-full">
            <div className="w-[40%]">Gửi thành công:</div>
            <div className="w-[60%] font-medium text-green-500">30</div>
          </div>
          <div className="flex w-full">
            <div className="w-[40%]">Tổng số:</div>
            <div className="w-[60%] font-medium ">50</div>
          </div>
          <div className="flex w-full">
            <div className="w-[40%]">Trạng thái:</div>
            <div className="w-[60%] font-medium text-blue-500">
              Đang thực hiện
            </div>
          </div>
          <div className="mt-3 flex w-full">
            <div className="w-[40%]">Tài khoản:</div>
            <div className="flex flex-col items-start justify-start gap-3">
              <div className="flex items-center justify-start gap-2">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user"
                  alt=""
                  className="h-[40px] w-[40px] rounded-full object-cover object-center"
                />
                <div className="">
                  <div className="">Nguyen Van B</div>
                  <div className="text-[12px]">03987841212</div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user"
                  alt=""
                  className="h-[40px] w-[40px] rounded-full object-cover object-center"
                />
                <div className="">
                  <div className="">Nguyen Van B</div>
                  <div className="text-[12px]">03987841212</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium "> Nội dung</div>
            <div className="mt-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              possimus eos eaque sit. Magnam autem rerum architecto excepturi
              eum consequuntur delectus, vero suscipit eligendi, quo saepe, est
              sapiente tempore tenetur!
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RenderActionsJob;
