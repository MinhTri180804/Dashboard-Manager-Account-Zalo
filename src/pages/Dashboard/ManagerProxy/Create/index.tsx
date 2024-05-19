import { Button, Form, Input, TimePicker, Typography } from "antd";
import toast from "react-hot-toast";
import ROUTES from "../../../../utils/routes";

const formStyle: React.CSSProperties = {};

const CreateProxy: React.FC = () => {
  const handleCreateProxy = () => {
    toast
      .promise(
        new Promise((resole) => {
          setTimeout(() => {
            resole("Tạo proxy thành công");
          }, 2000);
        }),
        {
          loading: "Đang tạo proxy",
          success: "Tạo proxy thành công",
          error: "Tạo proxy thất bại",
        },
      )
      .then(() => {
        setTimeout(() => {
          window.location.href = `${ROUTES.DASHBOARD.ROOT}/${ROUTES.DASHBOARD.MANAGER_PROXY.ROOT}`;
        }, 1000);
      });
  };

  return (
    <div>
      <section className="md:container md:mx-auto">
        <Typography.Title level={3}>Thêm mới proxy</Typography.Title>
        <div className="mt-6">
          <Form layout="vertical" style={formStyle}>
            <Form.Item label="Proxy">
              <Input type="text" placeholder="Nhập proxy" />
            </Form.Item>
            <Form.Item label="Hạn sử dụng">
              <TimePicker className="w-full" placeholder="Chọn thời gian" />
            </Form.Item>
            <Form.Item label="Ghi chú">
              <Input.TextArea placeholder="Nhập ghi chú" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                style={{
                  width: "100%",
                  padding: "10px 0px",
                  height: "auto",
                }}
                className="sticky left-0 mt-5 w-full !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80%"
                onClick={() => handleCreateProxy()}
              >
                Thêm Proxy
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default CreateProxy;
