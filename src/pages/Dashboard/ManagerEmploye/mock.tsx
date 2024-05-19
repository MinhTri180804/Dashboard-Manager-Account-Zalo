import { TableColumnsType, Tag } from "antd";
import RenderActionsManagerEmployer from "../../../components/pages/Dashboard/Employer/Table/Column/Actions";
import RenderAccountPost from "../../../components/pages/Dashboard/Post/Table/Column/Account";
import RenderStatusProxy from "../../../components/pages/Dashboard/Proxy/Table/Column/Status";

interface IDataSourceManagerEmployer {
  id: number;
  account: {
    name: string;
    avatar: string;
    phone: string;
  };
  features: {
    title: string;
    id: string;
  }[];
  status: string;
  options: {
    title: string;
    id: string;
  }[];
}
export const columnsManagerEmployer: TableColumnsType = [
  {
    title: "Tài khoản",
    dataIndex: "account",
    key: "account",
    render: (account: { name: string; avatar: string; phone: string }) => (
      <RenderAccountPost account={account} />
    ),
  },
  {
    title: "Chức năng",
    dataIndex: "features",
    key: "features",
    render: (
      features: {
        title: string;
        id: string;
      }[],
    ) => (
      <div>
        {features.map((feature) => (
          <Tag color="blue" key={feature.id}>
            {feature.title}
          </Tag>
        ))}
      </div>
    ),
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    filters: [
      {
        text: "Đã hoàn thành",
        value: "done",
      },
      {
        text: "Đang hoạt động",
        value: "process",
      },
      {
        text: "Đang dừng",
        value: "stop",
      },
      {
        text: "Đã hủy",
        value: "cancel",
      },
    ],
    render: (status: string) => RenderStatusProxy({ status }),
  },
  {
    title: "Tùy chọn",
    dataIndex: "options",
    key: "options",
    render: () => <RenderActionsManagerEmployer />,
  },
];

export const dataSourceManagerEmployer: IDataSourceManagerEmployer[] = [
  {
    id: 2,
    account: {
      name: "Nguyễn Văn A",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      phone: "0123456789",
    },
    features: [
      {
        title: "Chức năng 1",
        id: "feature1",
      },
      {
        title: "Chức năng 2",
        id: "feature2",
      },
    ],
    status: "process",
    options: [
      {
        title: "Tùy chỉnh",
        id: "edit",
      },
      {
        title: "Xóa",
        id: "delete",
      },
    ],
  },

  {
    id: 1,
    account: {
      name: "Nguyễn Văn B",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      phone: "0123456789",
    },
    features: [
      {
        title: "Chức năng 1",
        id: "feature1",
      },
      {
        title: "Chức năng 2",
        id: "feature2",
      },
    ],
    status: "process",
    options: [
      {
        title: "Tùy chỉnh",
        id: "edit",
      },
      {
        title: "Xóa",
        id: "delete",
      },
    ],
  },
];
