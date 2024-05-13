import { Collapse, ConfigProvider, Space } from "antd";
import ButtonLandingPage from "../Button";

interface QAComponentProps {
  title: string;
  subTitle: string;
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const QAComponent: React.FC<QAComponentProps> = ({ title, subTitle }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-center font-montserrat text-[24px] font-bold text-[#0F2137] md:text-[32px]">
          {title}
        </h2>
        <h4 className="text-center font-montserrat text-[14px] font-normal text-[#858B91] md:text-[16px]">
          {subTitle}
        </h4>
      </div>

      <div className="mt-20 flex flex-col items-start justify-start gap-7 md:flex-row md:gap-20">
        <div className="md:w] flex flex-col items-start justify-start gap-2 md:flex-1">
          <h5 className="font-montserrat text-[20px] font-bold text-[#0F2137]">
            Bạn có câu hỏi gì ? Hãy đặt ra và chúng tôi sẽ giải đáp cho bạn
          </h5>
          <p className="font-montserrat text-[14px] font-normal">
            Nếu bạn có câu hỏi gì cần chúng tôi giải đáp hãy đặt câu hỏi ở dưới
            nhé.
          </p>
          <div className="w-full">
            <ButtonLandingPage content="Đặt câu hỏi" />
          </div>
        </div>
        <div className="md:flex-1">
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  contentBg: "#f0f0f0",
                  headerBg: "#ffff",
                },
              },
            }}
          >
            <Space direction="vertical">
              <Collapse
                collapsible="header"
                defaultActiveKey={["1"]}
                items={[
                  {
                    key: "1",
                    label:
                      "Công cụ có thể xem được thống kê hiệu quả của các chiến dịch không ?",
                    children: (
                      <p>
                        Công cụ có thể giúp bạn tự động đăng các bài viết, đặt
                        lịch đăng các bài viết theo khung giờ, thời gian,... Bạn
                        có thể tùy chỉnh tiêu để, hình ảnh, nôi dụng, thời gian
                        và các lựa chọn khác phù hợp với mục tiêu mà bạn hướng
                        tới. Nó sẽ giúp bạn tiết kiệm được rất nhiều thời gian
                        và công sức cho công việc
                      </p>
                    ),
                  },
                  {
                    key: "2",
                    label: "Công cụ có thể tự động đăng các bài viết không ?",
                    children: (
                      <p>
                        Công cụ có thể giúp bạn tự động đăng các bài viết, đặt
                        lịch đăng các bài viết theo khung giờ, thời gian,... Bạn
                        có thể tùy chỉnh tiêu để, hình ảnh, nôi dụng, thời gian
                        và các lựa chọn khác phù hợp với mục tiêu mà bạn hướng
                        tới. Nó sẽ giúp bạn tiết kiệm được rất nhiều thời gian
                        và công sức cho công việc
                      </p>
                    ),
                  },
                  {
                    key: "2",
                    label: "Công cụ có thể tự động đăng các bài viết không ?",
                    children: (
                      <p>
                        Công cụ có thể giúp bạn tự động đăng các bài viết, đặt
                        lịch đăng các bài viết theo khung giờ, thời gian,... Bạn
                        có thể tùy chỉnh tiêu để, hình ảnh, nôi dụng, thời gian
                        và các lựa chọn khác phù hợp với mục tiêu mà bạn hướng
                        tới. Nó sẽ giúp bạn tiết kiệm được rất nhiều thời gian
                        và công sức cho công việc
                      </p>
                    ),
                  },
                  {
                    key: "2",
                    label: "Công cụ có thể tự động đăng các bài viết không ?",
                    children: (
                      <p>
                        Công cụ có thể giúp bạn tự động đăng các bài viết, đặt
                        lịch đăng các bài viết theo khung giờ, thời gian,... Bạn
                        có thể tùy chỉnh tiêu để, hình ảnh, nôi dụng, thời gian
                        và các lựa chọn khác phù hợp với mục tiêu mà bạn hướng
                        tới. Nó sẽ giúp bạn tiết kiệm được rất nhiều thời gian
                        và công sức cho công việc
                      </p>
                    ),
                  },
                  {
                    key: "2",
                    label: "Công cụ có thể tự động đăng các bài viết không ?",
                    children: <p>{text}</p>,
                  },
                ]}
              />
            </Space>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default QAComponent;
