import { Button, Form, Input, Select, Typography } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import SelectPhone from "../../../../components/pages/Dashboard/Jobs/MethodCampaign/Create/OptionSelectPhone/SelectPhone";
import { PhoneType } from "../../../../types/Pages/Dashboard/Jobs";
import validatePhoneVN from "../../../../utils/validationPhone";
import { useNavigate } from "react-router-dom";

type optionsPhoneType = {
  id: number;
  phone: string;
  isValid: boolean;
};

interface IAutoAddFriendPageProps {}
const AutoAddFriendPage: React.FC<IAutoAddFriendPageProps> = () => {
  const [optionPhones, setOptionPhones] = useState<optionsPhoneType[]>([]);

  const navigate = useNavigate();
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

  const handleDeselectOptionPhone = (value: string) => {
    const id = optionPhones.find((phone) => phone.phone === value)?.id;
    if (id) {
      handleDeletePhone(id);
      toast.success("Xóa số điện thoại thành công");
    }
  };

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = () => {
    setButtonLoading(true);
    toast
      .promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(toast.success);
          }, 2000);
        }),
        {
          loading: "Đang cập nhật",
          success: "Cập nhật thành công",
          error: "Cập nhật thất bại",
        },
      )
      .then(() => {
        setButtonLoading(false);
        navigate(-1);
      });
  };
  return (
    <section className="md:container md:mx-auto">
      <Typography.Title level={3}>Tự động kết bạn</Typography.Title>
      <div className="mt-6">
        <Form layout="vertical">
          <Form.Item label="Lời chào kết bạn">
            <Input type="text" placeholder="Nhập lời chào kết bạn" />
          </Form.Item>
          <Form.Item label="Thời gian ngưng giữa 2 lần kết bạn ( Phút )">
            <Input type="number" placeholder="VD: 10" />
            <Typography.Text type="secondary" className="mt-2 block italic">
              Lưu ý thời gian phải giãn cách nhau tầm 10p, nếu như kết bạn liên
              tục thì sẽ bị khóa kết bạn
            </Typography.Text>
          </Form.Item>
          <Form.Item label="Chọn danh sách số điện thoại kết bạn">
            <>
              <Select
                className="mt-2"
                mode="tags"
                placeholder="Nhập số điện thoại và enter"
                onSelect={(value: string) => onSelectOptionPhones(value)}
                value={optionPhones.map((phone) => phone.phone)}
                onDeselect={(value: string) => handleDeselectOptionPhone(value)}
              />
              <p className="mt-2 block text-[12px] italic text-gray-500">
                Bạn có thể nhập cùng lúc nhiều số điện thoại vd:
                097824124,0912512315
              </p>

              {optionPhones.length > 0 && (
                <>
                  <SelectPhone
                    optionPhones={optionPhones}
                    handleDeletePhone={handleDeletePhone}
                    handleEditPhone={handleEditPhone}
                  />
                </>
              )}
            </>
          </Form.Item>
          <Button
            type="primary"
            style={{
              width: "100%",
              padding: "10px 0px",
              height: "auto",
            }}
            className="sticky left-0 mt-5 w-full !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80%"
            onClick={handleSubmit}
            loading={buttonLoading}
          >
            Áp dụng
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default AutoAddFriendPage;
