import { Button, Dropdown, Modal, Space } from "antd";
import { useState } from "react";
import { IRenderActionsProps } from "../../../../../../../types/Pages/Dashboard/Post";
import { items } from "../../../../../../../pages/Dashboard/Post/mock";

const RenderActionsPost: React.FC<IRenderActionsProps> = ({ actions }) => {
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
        {actions.map((action: { title: string; id: string }) => {
          switch (action.id) {
            case "view-detail":
              return (
                <Button
                  className="hover:!border-[#ef4137] hover:!text-[#ef4137]"
                  key={action.id}
                  onClick={actionViewDetails}
                >
                  {action.title}
                </Button>
              );
            case "delete":
              return (
                <Button type="primary" danger key={action.id}>
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
        title="Tiêu đề bài viết"
        open={isOpenModal}
        onOk={handleOnOk}
        onCancel={handleOnClose}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          quae impedit quaerat voluptas nobis atque expedita, alias iusto fugit
          ad, sit obcaecati illum eveniet maiores consectetur deserunt provident
          dolor repellat!
        </p>
      </Modal>
    </>
  );
};

export default RenderActionsPost;
