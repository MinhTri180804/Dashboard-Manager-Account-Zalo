import { ConfigProvider, Flex, Table, Typography } from "antd";
import {
  columnsManagerAccountZalo,
  dataSourceManagerAccountZalo,
} from "./mock";

const ManagerAccountZaloPage = () => {
  return (
    <section className="">
      <Flex justify="space-between" align="center" className="mb-3 w-full">
        <Typography.Title level={3} className="block w-full">
          Quản lí tài khoản zalo
        </Typography.Title>
        {/* <Link
          className="mb-3 hidden md:block md:w-fit"
          to={`${ROUTES.DASHBOARD.MANAGER_JOBS.CREATE}`}
        >
          <Button
            type="primary"
            className="sticky left-0 hidden flex-1  !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80% md:block"
            size="middle"
          >
            Thêm taif k
          </Button>
        </Link> */}
      </Flex>
      {/* <Link
        className="mb-3 md:hidden md:w-fit"
        to={`${ROUTES.DASHBOARD.MANAGER_JOBS.CREATE}`}
      >
        <Button
          type="primary"
          className="sticky left-0  mb-3 !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80% md:hidden"
          size="middle"
        >
          Thêm công việc
        </Button>
      </Link> */}
      <div className="w-full overflow-scroll">
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
            columns={columnsManagerAccountZalo}
            dataSource={dataSourceManagerAccountZalo}
            pagination={{
              pageSize: 5,
              total: 50,
              showSizeChanger: false,
              position: ["bottomCenter"],
              className: "!border-[#fff]",
            }}
          />
        </ConfigProvider>
      </div>
    </section>
  );
};

export default ManagerAccountZaloPage;
