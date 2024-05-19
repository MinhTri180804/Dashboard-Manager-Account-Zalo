import { PushpinOutlined } from "@ant-design/icons";
import { Button, Radio, TableColumnsType } from "antd";
import RenderAccountPost from "../../../../components/pages/Dashboard/Post/Table/Column/Account";

interface IDataSourceFriend {
  id: number;
  account: {
    name: string;
    avatar: string;
    phone: string;
  };
  types: string[];
}

const types: string[] = ["Bình thường", "VIP", "Đặc biệt"];

export const columnsFriend: TableColumnsType = [
  {
    title: "Tài khoản",
    dataIndex: "account",
    key: "account",
    render: (account: { name: string; avatar: string; phone: string }) => (
      <RenderAccountPost account={account} />
    ),
  },
  {
    title: "Phân loại",
    dataIndex: "types",
    key: "types",
    width: 700,
    render: (types: string[]) => (
      <div className="w-[300px]">
        <Radio.Group buttonStyle="solid">
          {types.map((type: string) => (
            <Radio.Button value={type}>{type}</Radio.Button>
          ))}
        </Radio.Group>
      </div>
    ),
  },
  {
    title: "Tùy chọn",
    dataIndex: "options",
    key: "options",
    render: () => (
      <Button type="default" icon={<PushpinOutlined />} danger>
        Gim
      </Button>
    ),
  },
];

export const dataSourceFriend: IDataSourceFriend[] = [
  {
    id: 1,
    account: {
      name: "Nguyễn Văn A",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      phone: "0123456789",
    },
    types,
  },

  {
    id: 2,
    account: {
      name: "Nguyễn Văn A",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      phone: "0123456789",
    },
    types,
  },

  {
    id: 3,
    account: {
      name: "Nguyễn Văn A",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      phone: "0123456789",
    },
    types,
  },
];
