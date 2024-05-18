import { Button, Result } from "antd";

const NotFoundDashboard: React.FC = () => {
  return (
    <Result
      status={"404"}
      title={"404"}
      subTitle="Xin lỗi, Trang bạn tìm kiếm không tồn tại."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default NotFoundDashboard;
