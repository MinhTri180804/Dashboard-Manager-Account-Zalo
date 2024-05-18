/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Flex, Select, TimePicker } from "antd";
import { optionsPost } from "../../../../../../pages/Dashboard/Post/Create/mock";

interface IOptionsContentProps {
  optionPost: string;
  setOptionPost: (value: string) => void;
  handleChangeDataPicker: (date: any, dateString: string | string[]) => void;
  handleChangeTimePicker: (time: any, timeString: string | string[]) => void;
}

const OptionsMethodPost: React.FC<IOptionsContentProps> = ({
  optionPost,
  setOptionPost,
  handleChangeDataPicker,
  handleChangeTimePicker,
}) => {
  return (
    <>
      <Select
        defaultValue={optionsPost[1].value}
        style={{ width: 120 }}
        options={optionsPost}
        onSelect={(value: string) => setOptionPost(value)}
        className="!w-full"
      />

      {optionPost === "Schedule" && (
        <Flex gap={5} style={{ width: "100%", marginTop: 20 }}>
          <DatePicker
            placeholder="Chọn ngày đăng"
            onChange={(date, dateString) =>
              handleChangeDataPicker(date, dateString)
            }
            className="!w-full"
            style={{ flex: 2 }}
          />
          <TimePicker
            placeholder="Chọn giờ đăng"
            onChange={(time, timeString) =>
              handleChangeTimePicker(time, timeString)
            }
            className="!w-full"
            style={{ flex: 1 }}
          />
        </Flex>
      )}
    </>
  );
};

export default OptionsMethodPost;
