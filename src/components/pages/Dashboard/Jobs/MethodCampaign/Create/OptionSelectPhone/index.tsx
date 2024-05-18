import { Select } from "antd";
import SelectPhone from "./SelectPhone";
import { PhoneType } from "../../../../../../../types/Pages/Dashboard/Jobs";

interface IOptionSelectPhoneProps {
  optionPhones: PhoneType[];
  onSelectOptionPhones: (value: string) => void;
  handleDeselectOptionPhone: (value: string) => void;
  handleDeletePhone: (id: number) => void;
  handleEditPhone: (phone: PhoneType) => void;
}

const OptionSelectPhone: React.FC<IOptionSelectPhoneProps> = ({
  optionPhones,
  onSelectOptionPhones,
  handleDeselectOptionPhone,
  handleDeletePhone,
  handleEditPhone,
}) => {
  return (
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
        Bạn có thể nhập cùng lúc nhiều số điện thoại vd: 097824124,0912512315
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
  );
};

export default OptionSelectPhone;
