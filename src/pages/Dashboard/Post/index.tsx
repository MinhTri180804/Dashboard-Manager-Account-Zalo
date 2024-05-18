/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Flex, Table, Typography } from "antd";
import { columns, dataSource } from "./mock";
import { Link } from "react-router-dom";
import ROUTES from "../../../utils/routes";
import "../../../styles/components/paginationInTable.css";

const PostPage = () => {
  return (
    <section className="">
      <Flex justify="space-between" align="center" className="mb-3 w-full">
        <Typography.Title level={3} className="w-full">
          Quản lí bài viết
        </Typography.Title>
        <Link
          className="mb-3 block w-full md:w-fit"
          to={`${ROUTES.DASHBOARD.POST.CREATE}`}
        >
          <Button
            type="primary"
            className="sticky left-0 hidden !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80% md:block"
            size="middle"
          >
            Lên lịch đăng bài viết
          </Button>
        </Link>
      </Flex>

      <Link
        className="mb-3 block w-full md:w-fit"
        to={`${ROUTES.DASHBOARD.POST.CREATE}`}
      >
        <Button
          type="primary"
          className="sticky left-0 mb-4 !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80% md:hidden"
          size="middle"
        >
          Lên lịch đăng bài viết
        </Button>
      </Link>
      <div className="w-full overflow-scroll">
        <Table
          columns={columns}
          dataSource={dataSource}
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

export default PostPage;
