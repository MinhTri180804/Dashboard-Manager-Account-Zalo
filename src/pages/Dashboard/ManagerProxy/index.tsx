import { PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Table, Typography } from "antd";
import { Link } from "react-router-dom";
import ROUTES from "../../../utils/routes";
import { columnsManagerProxy, dataSourceProxy } from "./mock";

const ManagerProxyPage: React.FC = () => {
  return (
    <section className="">
      <Flex justify="space-between" align="center" className="mb-3 w-full">
        <Typography.Title level={3} className="w-full">
          Quản lí Proxy
        </Typography.Title>
        <Link
          className="mb-3 block w-full md:w-fit"
          to={`${ROUTES.DASHBOARD.MANAGER_PROXY.CREATE}`}
        >
          <Button
            type="primary"
            className="sticky left-0 hidden !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80% md:block"
            size="middle"
            icon={<PlusOutlined />}
          >
            Thêm Proxy
          </Button>
        </Link>
      </Flex>

      <Link
        className="mb-3 block w-full md:w-fit"
        to={`${ROUTES.DASHBOARD.MANAGER_PROXY.CREATE}`}
      >
        <Button
          type="primary"
          className="sticky left-0 mb-4 !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80% md:hidden"
          size="middle"
        >
          Thêm Proxy
        </Button>
      </Link>
      <div className="w-full overflow-scroll">
        <Table
          columns={columnsManagerProxy}
          dataSource={dataSourceProxy}
          pagination={{
            pageSize: 5,
            total: 50,
            showSizeChanger: false,
            position: ["bottomCenter"],
          }}
        />
      </div>
    </section>
  );
};

export default ManagerProxyPage;
