import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  PushpinOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Checkbox,
  Form,
  Input,
  List,
  Modal,
  Space,
  Switch,
  Typography,
} from "antd";
import { useState } from "react";
import toast from "react-hot-toast";

const data = [
  {
    title: "Nguyen Van A",
  },
  {
    title: "Nguyen Van B",
  },
  {
    title: "Nguyen Van C",
  },
  {
    title: "Nguyen Van D",
  },
];

const RenderActionsManagerAccountZaloGroup = () => {
  const [isOpenModalAddFriendInGroup, setIsOpenModalAddFriendInGroup] =
    useState(false);
  const [isOpenModalAddFriendIntoGroup, setIsOpenModalAddFriendIntoGroup] =
    useState(false);
  const [optionAllMember, setOptionAllMember] = useState(false);
  const [isLoadingConfirm, setIsLoadingConfirm] = useState(false);

  const handleConfirmIntoGroup = () => {
    setIsLoadingConfirm(true);
    toast
      .promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(toast.success);
          }, 2000);
        }),
        {
          loading: "Đang cập nhật",
          success: "Cập nhật thành công",
          error: "Cập nhật thất bại",
        },
      )
      .then(() => {
        setIsLoadingConfirm(false);
        setIsOpenModalAddFriendIntoGroup(false);
      });
  };
  const handleConfirm = () => {
    setIsLoadingConfirm(true);
    toast
      .promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(toast.success);
          }, 2000);
        }),
        {
          loading: "Đang cập nhật",
          success: "Cập nhật thành công",
          error: "Cập nhật thất bại",
        },
      )
      .then(() => {
        setIsLoadingConfirm(false);
        setIsOpenModalAddFriendInGroup(false);
      });
  };
  return (
    <Space size={"middle"} className="md:max-w-[600px]" wrap>
      <Button
        type="default"
        icon={<UserAddOutlined />}
        onClick={() => setIsOpenModalAddFriendIntoGroup(true)}
      >
        Thêm thành viên vào nhóm
      </Button>
      <Button
        type="default"
        icon={<UsergroupAddOutlined />}
        onClick={() => setIsOpenModalAddFriendInGroup(true)}
      >
        Kết bạn thành viên trong nhóm
      </Button>
      <Button type="default" icon={<PushpinOutlined />} danger>
        Gim
      </Button>
      <Button type="primary" icon={<DeleteOutlined />} danger>
        Thoát
      </Button>
      <Modal
        title="Thêm bạn bè trong nhóm"
        open={isOpenModalAddFriendInGroup}
        onCancel={() => setIsOpenModalAddFriendInGroup(false)}
        onOk={handleConfirm}
        okText="Kết bạn"
        cancelText="Hủy"
        okButtonProps={{ loading: isLoadingConfirm }}
      >
        <div className="">
          <div className="flex flex-col items-center justify-center gap-2">
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
              size={64}
            />
            <Typography.Text>Nhóm tiếng anh</Typography.Text>
          </div>
          <Form layout="vertical" style={{ width: "100%", marginTop: 10 }}>
            <Form.Item label="Lời chào">
              <Input.TextArea placeholder="Nhập lời chào" />
            </Form.Item>
          </Form>
          <div className="my-2 flex items-center justify-between gap-2">
            <label>Tất cả thành viên</label>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              onChange={(checked: boolean) => setOptionAllMember(checked)}
              checked={optionAllMember}
            />
          </div>
          <div className="my-2 flex items-center justify-between gap-2">
            <label>Nhóm trường & nhóm phó</label>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </div>

          {!optionAllMember && (
            <div className="mt-5">
              <Typography.Text>Danh sách bạn bè</Typography.Text>

              <List
                dataSource={data}
                renderItem={(item, index) => (
                  <div className="flex w-full items-center justify-between">
                    <List.Item className="w-full flex-1">
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                          />
                        }
                        title={<a href="https://ant.design">{item.title}</a>}
                      />
                    </List.Item>
                    <Checkbox className=" w-full flex-1 justify-end" />
                  </div>
                )}
              />
            </div>
          )}
        </div>
      </Modal>
      <Modal
        title="Thêm bạn bè vào nhóm"
        open={isOpenModalAddFriendIntoGroup}
        onCancel={() => setIsOpenModalAddFriendIntoGroup(false)}
        onOk={handleConfirmIntoGroup}
        okText="Áp dụng"
        cancelText="Hủy"
        okButtonProps={{ loading: isLoadingConfirm }}
      >
        <div className="">
          <div className="flex flex-col items-center justify-center gap-2">
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
              size={64}
            />
            <Typography.Text>Nhóm tiếng anh</Typography.Text>
          </div>
          <div className="my-2 flex items-center justify-between gap-2">
            <label>Tất cả bạn bè</label>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              onChange={(checked: boolean) => setOptionAllMember(checked)}
              checked={optionAllMember}
            />
          </div>

          {!optionAllMember && (
            <div className="mt-5">
              <Typography.Text>Danh sách bạn bè</Typography.Text>

              <List
                dataSource={data}
                renderItem={(item, index) => (
                  <div className="flex w-full items-center justify-between">
                    <List.Item className="w-full flex-1">
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                          />
                        }
                        title={<a href="https://ant.design">{item.title}</a>}
                      />
                    </List.Item>
                    <Checkbox className=" w-full flex-1 justify-end" />
                  </div>
                )}
              />
            </div>
          )}
        </div>
      </Modal>
    </Space>
  );
};

export default RenderActionsManagerAccountZaloGroup;
