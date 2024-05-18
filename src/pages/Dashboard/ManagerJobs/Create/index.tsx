/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Layout,
  Select,
  TimePicker,
  Typography,
  UploadProps,
} from "antd";
import { Content } from "antd/es/layout/layout";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import toast from "react-hot-toast";
import OptionSelectFriends from "../../../../components/pages/Dashboard/Jobs/MethodCampaign/Create/OptionSelectFriends";
import OptionSelectGroup from "../../../../components/pages/Dashboard/Jobs/MethodCampaign/Create/OptionSelectGroup";
import OptionSelectPhone from "../../../../components/pages/Dashboard/Jobs/MethodCampaign/Create/OptionSelectPhone";
import AccountOptions from "../../../../components/pages/Dashboard/Post/Create/AccountOptions";
import { PhoneType } from "../../../../types/Pages/Dashboard/Jobs";
import ROUTES from "../../../../utils/routes";
import validatePhoneVN from "../../../../utils/validationPhone";

const formStyle: React.CSSProperties = {};

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      toast.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      toast.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const optionsTarget = [
  {
    value: "1",
    label: "Gửi đến tất cả bạn bè",
  },
  {
    value: "2",
    label: "Gửi đến tất cả nhóm",
  },
  {
    value: "3",
    label: "Gửi đến số điện thoại",
  },
  {
    value: "4",
    label: "Gửi đến tất cả thành viên trong nhóm",
  },
];

const optionsZone = [
  {
    value: "1",
    label: "Cả ngày",
  },
  {
    value: "2",
    label: "Tùy chọn khung giờ",
  },
];

type optionsPhoneType = {
  id: number;
  phone: string;
  isValid: boolean;
};
const CreateJobPage: React.FC = () => {
  const [optionTarget, setOptionTarget] = useState(optionsTarget[0].value);
  const [optionPhones, setOptionPhones] = useState<optionsPhoneType[]>([]);
  const [optionZone, setOptionZone] = useState(optionsZone[0].value);

  const onChangeOptionTarget = (value: string) => {
    setOptionTarget(value);
  };

  const onSelectOptionPhones = (value: string) => {
    if (value.includes(",")) {
      const phones = value.split(",").filter((phone) => phone !== "");
      phones.map((phone) => {
        setOptionPhones((prev) => [
          ...prev,
          {
            phone,
            isValid: validatePhoneVN(phone),
            id: optionPhones.length + Math.random(),
          },
        ]);
      });
      return;
    }

    setOptionPhones((prev) => [
      ...prev,
      {
        phone: value,
        isValid: validatePhoneVN(value),
        id: optionPhones.length + Math.random(),
      },
    ]);
  };

  const handleDeletePhone = (id: number) => {
    setOptionPhones((prev) => prev.filter((phone) => phone.id !== id));
    toast.success("Xóa số điện thoại thành công");
  };

  const handleDeselectOptionPhone = (value: string) => {
    const id = optionPhones.find((phone) => phone.phone === value)?.id;
    if (id) {
      handleDeletePhone(id);
      toast.success("Xóa số điện thoại thành công");
    }
  };

  const handleEditPhone = (phone: PhoneType) => {
    setOptionPhones((prev) =>
      prev.map((item) => {
        if (item.id === phone.id) {
          return {
            ...item,
            phone: phone.phone,
            isValid: phone.isValid,
          };
        }
        return item;
      }),
    );
  };

  const handleCreateCampaign = () => {
    toast
      .promise(
        new Promise((resole) => {
          setTimeout(() => {
            resole("Tạo công việc thành công");
          }, 2000);
        }),
        {
          loading: "Đang tạo công việc",
          success: "Tạo công việc thành công",
          error: "Tạo công việc thất bại",
        },
      )
      .then(() => {
        setTimeout(() => {
          window.location.href = `${ROUTES.DASHBOARD.ROOT}/${ROUTES.DASHBOARD.MANAGER_JOBS.ROOT}`;
        }, 1000);
      });
  };

  return (
    <section className="md:container md:mx-auto">
      <Typography.Title level={3}>Tạo bài viết đăng tự động</Typography.Title>
      <div className="mt-6">
        <Layout className="gap-16 bg-white">
          <Content className="bg-white">
            <Form layout="vertical" style={formStyle}>
              <Form.Item label="Tên chiến dịch">
                <Input type="text" placeholder="Nhập tên chiến dịch" />
              </Form.Item>
              <Form.Item label="Mục tiêu chiến dịch">
                <Select
                  placeholder="Chọn mục tiêu chiến dịch"
                  options={optionsTarget}
                  defaultValue={optionsTarget[0].value}
                  onChange={(value: string) => onChangeOptionTarget(value)}
                />
                {optionTarget === "3" && (
                  <OptionSelectPhone
                    optionPhones={optionPhones}
                    handleDeletePhone={handleDeletePhone}
                    handleDeselectOptionPhone={handleDeselectOptionPhone}
                    onSelectOptionPhones={onSelectOptionPhones}
                    handleEditPhone={handleEditPhone}
                  />
                )}
                <div className="md:hidden">
                  {optionTarget === "1" && <OptionSelectFriends />}
                </div>
                <div className="md:hidden">
                  {optionTarget === "2" && <OptionSelectGroup />}
                </div>
              </Form.Item>
              <Form.Item label="Nội dung chiến dịch">
                <Input.TextArea placeholder="Nhập nội dung chiến dịch" />
              </Form.Item>
              <Form.Item label="Hình ảnh kèm theo">
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Kéo thả hoặc bấm vào để chọn hình ảnh đính kèm
                  </p>
                </Dragger>
              </Form.Item>
              <Form.Item label="Lựa chọn khung giờ">
                <Select
                  placeholder="Chọn khung giờ"
                  options={optionsZone}
                  defaultValue={optionZone}
                  onSelect={(value: string) => setOptionZone(value)}
                />

                {optionZone === "2" && (
                  <TimePicker.RangePicker className="mt-3 w-full" />
                )}
              </Form.Item>
              <Form.Item label="Khoảng chờ mỗi lần gửi ( giây )">
                <Input
                  type="number"
                  placeholder="Nhập khoảng chờ mỗi lần gửi ( giây )"
                />
              </Form.Item>
              <div className="gap-2 lg:flex lg:items-center lg:justify-between">
                <Form.Item label="Số lần lặp lại" className="w-full">
                  <Input type="number" placeholder="Nhập số lần lặp lại" />
                </Form.Item>
                <Form.Item label="Độ trễ" className="w-full">
                  <Input type="number" placeholder="Nhập độ trễ" />
                </Form.Item>
              </div>
              <Form.Item label="Chọn tài khoản đăng">
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
                  >
                    <Select.Option value="taikhoan1">
                      <AccountOptions />
                    </Select.Option>
                    <Select.Option value="taikhoan2">
                      <AccountOptions />
                    </Select.Option>
                  </Select>
                </ConfigProvider>
                <Form.Item>
                  <Button
                    type="primary"
                    style={{
                      width: "100%",
                      padding: "10px 0px",
                      height: "auto",
                    }}
                    className="sticky left-0 mt-5 w-full !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80%"
                    onClick={() => handleCreateCampaign()}
                  >
                    Tạo công việc
                  </Button>
                </Form.Item>
              </Form.Item>
            </Form>
          </Content>
          <div className="hidden md:block">
            {optionTarget === "1" && <OptionSelectFriends />}
          </div>

          <div className="hidden md:block">
            {optionTarget === "2" && <OptionSelectGroup />}
          </div>
        </Layout>
      </div>
    </section>
  );
};

export default CreateJobPage;
