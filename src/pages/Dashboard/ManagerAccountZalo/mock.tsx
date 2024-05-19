import { Select, TableColumnsType } from "antd";
import RenderActionsManagerAccountZalo from "../../../components/pages/Dashboard/AccountZalo/Table/Column/Actions";
import RenderStatusAccountZalo from "../../../components/pages/Dashboard/AccountZalo/Table/Column/Status";
import RenderAccountPost from "../../../components/pages/Dashboard/Post/Table/Column/Account";

interface IDataSourceManagerAccountZalo {
  id: number;
  account: {
    name: string;
    avatar: string;
    phone: string;
  };
  information: InformationAccountZalo;
  proxy: {
    id: number;
    title: string;
  };
  status: string;
}

export type InformationAccountZalo = {
  friend: number;
  group: number;
  addFriend: {
    success: number;
    total: number;
  };
};

export const columnsManagerAccountZalo: TableColumnsType = [
  {
    title: "Tài khoản",
    dataIndex: "account",
    key: "account",
    render: (account: { name: string; avatar: string; phone: string }) => (
      <RenderAccountPost account={account} />
    ),
  },
  {
    title: "Thông tin",
    dataIndex: "information",
    key: "information",
    width: 300,
    render: (information: InformationAccountZalo) => (
      <div className="w-[300px]">
        <p>
          Số bạn bè: <span className="font-bold">{information.friend}</span>
        </p>
        <p>
          Số nhóm: <span className="font-bold">{information.group}</span>
        </p>
        <p>
          Số lượng thêm bạn bè: {information.addFriend.success} /
          <span className="font-bold">{information.addFriend.total}</span>
        </p>
      </div>
    ),
  },
  {
    title: "Proxy",
    dataIndex: "proxy",
    key: "proxy",
    render: (proxy: { id: number; title: string }) => (
      <Select defaultValue={proxy.title} style={{ width: 120 }}>
        <Select.Option value={proxy.id}>{proxy.title}</Select.Option>
        <Select.Option value={2}>Proxy 2</Select.Option>
        <Select.Option value={3}>Proxy 3</Select.Option>
      </Select>
    ),
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    filters: [
      {
        text: "Đang hoạt động",
        value: "process",
      },
      {
        text: "Không hoạt động",
        value: "stop",
      },
    ],
    render: (status: string) => RenderStatusAccountZalo({ status }),
  },
  {
    title: "Tùy chọn",
    dataIndex: "options",
    key: "options",
    width: 500,
    render: () => <RenderActionsManagerAccountZalo />,
  },
];

export const dataSourceManagerAccountZalo: IDataSourceManagerAccountZalo[] = [
  {
    id: 2,
    account: {
      name: "Nguyễn Văn A",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      phone: "0123456789",
    },
    information: {
      friend: 100,
      group: 50,
      addFriend: {
        success: 10,
        total: 20,
      },
    },
    status: "process",
    proxy: {
      id: 1,
      title: "Proxy 1",
    },
  },

  {
    id: 2,
    account: {
      name: "Nguyễn Văn A",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      phone: "0123456789",
    },
    information: {
      friend: 100,
      group: 50,
      addFriend: {
        success: 10,
        total: 20,
      },
    },
    status: "process",
    proxy: {
      id: 1,
      title: "Proxy 1",
    },
  },

  {
    id: 2,
    account: {
      name: "Nguyễn Văn A",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      phone: "0123456789",
    },
    information: {
      friend: 100,
      group: 50,
      addFriend: {
        success: 10,
        total: 20,
      },
    },
    status: "stop",
    proxy: {
      id: 1,
      title: "Proxy 1",
    },
  },
];
