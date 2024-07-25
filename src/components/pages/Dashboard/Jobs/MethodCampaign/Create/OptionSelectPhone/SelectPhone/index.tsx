import { Button, Input, Modal, Space } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { PhoneType } from "../../../../../../../../types/Pages/Dashboard/Jobs";
import validatePhoneVN from "../../../../../../../../utils/validationPhone";
import toast from "react-hot-toast";

interface ISelectPhoneProps {
  optionPhones: PhoneType[];
  handleDeletePhone: (id: number) => void;
  handleEditPhone: (phone: PhoneType) => void;
}
const SelectPhone: React.FC<ISelectPhoneProps> = ({
  optionPhones,
  handleDeletePhone,
  handleEditPhone,
}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [phoneEdit, setPhoneEdit] = useState<PhoneType>();
  const [statusEdit, setStatusEdit] = useState<boolean>(false);

  const onEditPhone = (phone: PhoneType) => {
    setPhoneEdit(phone);
    setIsOpenModal(true);
  };

  const handleOnOk = () => {
    if (phoneEdit) {
      setStatusEdit(validatePhoneVN(phoneEdit?.phone));
      if (validatePhoneVN(phoneEdit?.phone)) {
        handleEditPhone;
        toast.success("Chỉnh sửa số điện thoại thành công");
        setIsOpenModal(false);
        handleEditPhone({
          ...phoneEdit,
          isValid: true,
        });
      }
    }
  };
  

  const handleOnChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (phoneEdit) {
      setPhoneEdit({ ...phoneEdit, phone: e.target.value });
    }
  };

  return (
    <div className="mt-4">
      <ul>
        {optionPhones.map((phone, index) => (
          <li
            className="flex items-center justify-between border-t py-2"
            key={index}
          >
            <div className={clsx([phone.isValid ? "" : "text-red-500"])}>
              {phone.phone}
            </div>
            {phone.isValid ? (
              <Space size={"middle"}>
                <div className="text-green-500">Hợp lệ</div>
                <Button
                  type="primary"
                  danger
                  size="small"
                  onClick={() => handleDeletePhone(phone.id)}
                >
                  Xóa
                </Button>
              </Space>
            ) : (
              <Space size="small">
                <Button
                  type="primary"
                  size="small"
                  onClick={() => onEditPhone(phone)}
                >
                  Sửa
                </Button>
                <Button
                  type="primary"
                  danger
                  size="small"
                  onClick={() => handleDeletePhone(phone.id)}
                >
                  Xóa
                </Button>
              </Space>
            )}
          </li>
        ))}
      </ul>
      <Modal
        title="Sửa số điện thoại"
        open={isOpenModal}
        onOk={handleOnOk}
        onCancel={() => setIsOpenModal(false)}
        okText="Lưu"
        cancelText="Hủy"
      >
        <Input
          type="text"
          placeholder="Nhập số điện thoại"
          value={phoneEdit?.phone}
          className={clsx([statusEdit ? "" : "border-red-500"])}
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </Modal>
    </div>
  );
};

export default SelectPhone;
