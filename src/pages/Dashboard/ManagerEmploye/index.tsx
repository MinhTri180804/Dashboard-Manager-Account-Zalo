import { Button, ConfigProvider, Flex, Table, Typography } from "antd";
import { columnsManagerEmployer, dataSourceManagerEmployer } from "./mock";

const ManagerEmployer: React.FC = () => {
  return (
    <section className="">
      <Flex justify="space-between" align="center" className="mb-3 w-full">
        <Typography.Title level={3} className="block w-full">
          Quản lí tài khoản nhân viên
        </Typography.Title>
      </Flex>
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
            columns={columnsManagerEmployer}
            dataSource={dataSourceManagerEmployer}
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

export default ManagerEmployer;
