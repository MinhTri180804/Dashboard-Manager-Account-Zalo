import { Button, Flex, Modal, Space } from "antd";
import { useState } from "react";

interface IRenderMethodCampaignProps {
  methodCampaign: {
    id: string;
    label: string;
  };
}

const RenderMethodCampaign: React.FC<IRenderMethodCampaignProps> = ({
  methodCampaign,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  switch (methodCampaign.id) {
    case "numberPhone":
      return (
        <>
          <Space size="small">
            <span className="block w-[100px] md:w-full">
              {methodCampaign.label}
            </span>
            <Button type="link" onClick={() => setIsOpenModal(true)}>
              Xem danh sách
            </Button>
          </Space>
          <Modal
            title="Danh sách số điện thoại"
            open={isOpenModal}
            onOk={() => setIsOpenModal(false)}
            onCancel={() => setIsOpenModal(false)}
          >
            {Array.from({ length: 10 }).map(() => (
              <div className=" border-t py-2">
                <Flex justify="space-between" align="center">
                  <span>0398124121</span>
                  <span>Trạng thái</span>
                </Flex>
              </div>
            ))}
          </Modal>
        </>
      );
    case "allUserInGroup":
      return (
        <span className="block w-[100px] md:w-full">
          {methodCampaign.label}
        </span>
      );
    case "allGroup":
      return (
        <span className="block w-[100px] md:w-full">
          {methodCampaign.label}
        </span>
      );
    case "allFriend":
      return (
        <span className="block w-[100px] md:w-full">
          {methodCampaign.label}
        </span>
      );
  }
};

export default RenderMethodCampaign;
