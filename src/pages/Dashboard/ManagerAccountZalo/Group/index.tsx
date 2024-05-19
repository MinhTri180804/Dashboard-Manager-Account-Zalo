import {
  FileJpgOutlined,
  LinkOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Flex, Space, Table, Typography } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import TypeFriendsComponent from "../../../../components/pages/Dashboard/AccountZalo/ChildrenPage/Friend/TypeFriends";
import { columnsGroup, dataSourceGroup } from "./mock";

interface GroupPageProps {}

const GroupPage: React.FC<GroupPageProps> = () => {
  const [isLoadingUpdateButton, setIsLoadingUpdateButton] = useState(false);

  const handleUpdate = () => {
    setIsLoadingUpdateButton(true);
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
      .then(() => setIsLoadingUpdateButton(false));
  };
  return (
    <section className="">
      <Flex justify="space-between" align="center" className="mb-3 w-full">
        <Typography.Title level={3} className="block w-full">
          Quản lí nhóm của tài khoản zalo
        </Typography.Title>
      </Flex>
      <div className="w-full overflow-scroll">
        <div className="sticky left-0 my-4 md:flex md:items-start md:justify-between">
          <div className=" md:flex-1">
            <Typography.Text className="mb-3 block">
              Phân loại nhóm
            </Typography.Text>
            <TypeFriendsComponent />
          </div>
          <div className="hidden md:inline-block md:flex-1 md:text-right">
            <Space size="middle">
              <Button
                type="primary"
                className=""
                loading={isLoadingUpdateButton}
                onClick={handleUpdate}
                icon={<ReloadOutlined />}
              >
                Cập nhật
              </Button>
              <Button type="default" icon={<LinkOutlined />}>
                Tham gia bằng đường dẫn
              </Button>
              <Button type="default" icon={<FileJpgOutlined />}>
                Xuất danh sách nhóm
              </Button>
            </Space>
          </div>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                colorPrimaryBorder: "#fff",
              },
            },
          }}
        >
          <Table
            columns={columnsGroup}
            dataSource={dataSourceGroup}
            pagination={{
              pageSize: 5,
              total: 50,
              showSizeChanger: false,
              position: ["bottomCenter"],
              className: "!border-[#fff]",
            }}
          ></Table>
        </ConfigProvider>
      </div>
    </section>
  );
};

export default GroupPage;
