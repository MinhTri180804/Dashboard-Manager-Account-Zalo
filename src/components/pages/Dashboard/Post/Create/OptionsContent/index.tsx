import { Input, Select, UploadProps } from "antd";
import { options } from "../../../../../../pages/Dashboard/Post/Create/mock";
import Dragger from "antd/es/upload/Dragger";
import toast from "react-hot-toast";
import { InboxOutlined } from "@ant-design/icons";

interface IOptionsContentProps {
  option: string;
  setOption: (value: string) => void;
}

const DraggerProps: UploadProps = {
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

const OptionsContent: React.FC<IOptionsContentProps> = ({
  option,
  setOption,
}) => {
  return (
    <>
      <Select
        defaultValue={options[1].value}
        style={{ width: 120 }}
        options={options}
        onSelect={(value: string) => setOption(value)}
        className="!w-full"
      />
      {option === "Image" && (
        <Dragger {...DraggerProps} style={{ marginTop: 20 }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Bấm hoặc kéo thả hình ảnh vào đây</p>
        </Dragger>
      )}
      {option === "Link" && (
        <Input
          placeholder="Nhập đường dẫn"
          className="!w-full"
          style={{ marginTop: 20 }}
        />
      )}
    </>
  );
};

export default OptionsContent;
