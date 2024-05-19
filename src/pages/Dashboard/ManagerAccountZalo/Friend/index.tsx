import { Button, ConfigProvider, Flex, Table, Typography } from "antd";
import { columnsFriend, dataSourceFriend } from "./mock";
import TypeFriendsComponent from "../../../../components/pages/Dashboard/AccountZalo/ChildrenPage/Friend/TypeFriends";

interface IFriendPageProps {}

const FriendPage: React.FC<IFriendPageProps> = () => {
  return (
    <section className="">
      <Flex justify="space-between" align="center" className="mb-3 w-full">
        <Typography.Title level={3} className="block w-full">
          Quản lí bạn bè của tài khoản zalo
        </Typography.Title>
      </Flex>
      <div className="w-full overflow-scroll">
        <div className="sticky left-0 my-4 md:flex md:items-start md:justify-between">
          <div className=" md:flex-1">
            <Typography.Text className="mb-3 block">
              Phân loại bạn bè
            </Typography.Text>
            <TypeFriendsComponent />
          </div>
          <div className="hidden md:inline-block md:flex-1 md:text-right">
            <Button type="primary" className="w-[20%]">
              Cập nhật
            </Button>
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
            columns={columnsFriend}
            dataSource={dataSourceFriend}
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

export default FriendPage;
