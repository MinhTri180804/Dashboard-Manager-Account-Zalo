import {
  Button,
  ConfigProvider,
  DatePickerProps,
  Form,
  Input,
  Select,
  TimePickerProps,
  Typography,
} from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import OptionsContent from "../../../../components/pages/Dashboard/Post/Create/OptionsContent";
import OptionsMethodPost from "../../../../components/pages/Dashboard/Post/Create/OptionsMethodPost";
import ROUTES from "../../../../utils/routes";
import { options, optionsAccount, optionsPost } from "./mock";
import AccountOptions from "../../../../components/pages/Dashboard/Post/Create/AccountOptions";

const formStyle: React.CSSProperties = {};

const onChangeDatePicker: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
const onChangeTimePicker: TimePickerProps["onChange"] = (time, timeString) => {
  console.log(time, timeString);
};

const handleCreatePost = () => {
  toast
    .promise(
      new Promise((resole) => {
        setTimeout(() => {
          resole("Tạo bài viết thành công");
        }, 2000);
      }),
      {
        loading: "Đang tạo bài viết",
        success: "Tạo bài viết thành công",
        error: "Tạo bài viết thất bại",
      },
    )
    .then(() => {
      setTimeout(() => {
        window.location.href = `${ROUTES.DASHBOARD.ROOT}/${ROUTES.DASHBOARD.POST.ROOT}`;
      }, 1000);
    });
};

const CreatePostPage = () => {
  const [option, setOption] = useState(options[1].value);
  const [optionPost, setOptionPost] = useState(optionsPost[1].value);
  const [optionAccount, setOptionAccount] = useState(optionsAccount[0].value);
  return (
    <section className="md:container md:mx-auto md:max-w-[70%]">
      <Typography.Title level={3}>Tạo bài viết đăng tự động</Typography.Title>
      <div className="mt-6">
        <Form layout="vertical" style={formStyle}>
          <Form.Item label="Tên bài viết">
            <Input />
          </Form.Item>
          <Form.Item label="Nội dung bài viết">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Lựa chọn nội dung">
            <OptionsContent option={option} setOption={setOption} />
          </Form.Item>
          <Form.Item label="Lựa chọn đăng bài">
            <OptionsMethodPost
              handleChangeDataPicker={onChangeDatePicker}
              handleChangeTimePicker={onChangeTimePicker}
              optionPost={optionPost}
              setOptionPost={setOptionPost}
            />
          </Form.Item>
          <Form.Item label="Chọn tài khoản đăng">
            <Select
              defaultValue={optionsAccount[0].value}
              options={optionsAccount}
              onChange={(value: string) => setOptionAccount(value)}
              className="!w-full"
            />

            {optionAccount === "more" && (
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      multipleItemHeight: 40,
                    },
                  },
                }}
              >
                <Select
                  mode="multiple"
                  placeholder="Chọn tài khoản"
                  className="!w-full"
                  style={{ marginTop: 20 }}
                >
                  <Select.Option value="taikhoan1">
                    <AccountOptions />
                  </Select.Option>
                  <Select.Option value="taikhoan2">
                    <AccountOptions />
                  </Select.Option>
                </Select>
              </ConfigProvider>
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ width: "100%", padding: "10px 0px", height: "auto" }}
              className="sticky left-0 w-full !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80%"
              onClick={() => handleCreatePost()}
            >
              Tạo bài viết
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default CreatePostPage;
