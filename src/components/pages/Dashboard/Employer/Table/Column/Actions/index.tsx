import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Flex, Modal, Switch } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";

const RenderActionsManagerEmployer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [fullFeature, setFullFeature] = useState(false);

  const handleConfirmSetting = () => {
    toast
      .promise(
        new Promise((resole) => {
          setTimeout(() => {
            resole("Thiết lập thành công");
          }, 2000);
        }),
        {
          loading: "Đang thiết lập",
          success: "Thiết lập thành công",
          error: "Thiết lập thất bại",
        },
      )
      .then(() => {
        setIsOpenModal(false);
      });
  };
  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <Button
          type="default"
          onClick={() => setIsOpenModal(true)}
          icon={<EditOutlined />}
        >
          Tùy chỉnh
        </Button>
        <Button type="default" danger icon={<DeleteOutlined />}>
          Xóa
        </Button>
      </div>
      <Modal
        title="Tùy chỉnh chức năng tài khoản"
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={null}
      >
        <div className="mt-3">
          <Flex
            align="center"
            justify="start"
            gap={10}
            className="min-w-[200px]"
          >
            <img
              src={"https://www.w3schools.com/howto/img_avatar.png"}
              alt="avatar"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />

            <Flex vertical align="start" justify="start" gap={10}>
              <span>Nguyen Van A</span>
              <span>0398785443</span>
            </Flex>
          </Flex>

          <div className="mt-4 flex w-full flex-col gap-4">
            <div className="flex w-full items-center justify-between">
              <span className=" font-semibold">Đầy đủ quyền</span>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked={fullFeature}
                onChange={(checked) => setFullFeature(checked)}
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <span className=" font-semibold">Lên lịch đăng bài</span>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <span className=" font-semibold">Trả lời tin nhắn</span>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <span className=" font-semibold">Tùy chỉnh công việc</span>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </div>
          </div>
          <Button
            type="primary"
            style={{ width: "100%", padding: "10px 0px", height: "auto" }}
            className="sticky left-0 mt-5 w-full !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80%"
            onClick={() => handleConfirmSetting()}
          >
            Thiết lập
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default RenderActionsManagerEmployer;
