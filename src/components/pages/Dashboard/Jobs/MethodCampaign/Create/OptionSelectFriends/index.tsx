import { Avatar, Button, Checkbox, List, Modal, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

const data = [
  {
    title: "Nguyen Van A",
    phone: "097824124",
  },
  {
    title: "Nguyen Van B",
    phone: "097824124",
  },
  {
    title: "Nguyen Van C",
    phone: "097824124",
  },
  {
    title: "Nguyen Van D",
    phone: "097824124",
    children: [
      {
        title: "Nguyen Van D1",
        phone: "097824124",
      },
      {
        title: "Nguyen Van D2",
        phone: "097824124",
      },
    ],
  },
];

const OptionSelectFriends = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button
        type="primary"
        className="mt-2 md:hidden"
        onClick={() => setIsOpenModal(true)}
      >
        Xem danh sách bạn bè
      </Button>

      <Sider className="hidden md:inline-block" theme="light" width={400}>
        <Typography.Title level={5}>
          Danh sách bạn bè của tài khoản
        </Typography.Title>
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
                  description={item.phone}
                />
              </List.Item>
            </>
          )}
        />
      </Sider>

      <Modal
        title="Danh sách bạn bè"
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
                  description={item.phone}
                />
              </List.Item>
            </>
          )}
        />
      </Modal>
    </>
  );
};

export default OptionSelectFriends;
