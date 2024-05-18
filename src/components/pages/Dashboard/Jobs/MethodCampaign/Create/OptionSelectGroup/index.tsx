import { Avatar, Button, Checkbox, List, Modal, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

const data = [
  {
    title: "Nhóm 1",
    countUsers: 10,
  },
  {
    title: "Nhóm 2",
    countUsers: 10,
  },
  {
    title: "Nhóm 3",
    countUsers: 10,
  },
  {
    title: "Nhóm 4",
    countUsers: 10,
  },
];

const OptionSelectGroup = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button
        type="primary"
        className="mt-2 md:hidden"
        onClick={() => setIsOpenModal(true)}
      >
        Xem danh sách nhóm
      </Button>

      <Sider className="hidden md:inline-block" theme="light" width={400}>
        <Typography.Title level={5}>Danh sách nhóm</Typography.Title>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <>
              <List.Item className="gap-5">
                <Checkbox checked />
                <List.Item.Meta
                  className="w-full"
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={`${item.countUsers} thành viên`}
                />
              </List.Item>
            </>
          )}
        />
      </Sider>

      <Modal
        title="Danh sách nhóm"
        visible={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <>
              <List.Item className="gap-5">
                <Checkbox checked />
                <List.Item.Meta
                  className="w-full"
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={`${item.countUsers} thành viên`}
                />
              </List.Item>
            </>
          )}
        />
      </Modal>
    </>
  );
};

export default OptionSelectGroup;
