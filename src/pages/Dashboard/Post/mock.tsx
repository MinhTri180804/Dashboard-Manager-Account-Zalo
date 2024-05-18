import { UserOutlined } from "@ant-design/icons";
import { MenuProps, TableColumnsType } from "antd";
import RenderStatus from "../../../components/pages/Dashboard/Post/Table/Column/Status";
import {
  AccountType,
  IDataSourcePost,
} from "../../../types/Pages/Dashboard/Post";
import RenderActionsPost from "../../../components/pages/Dashboard/Post/Table/Column/Actions";
import RenderAccountPost from "../../../components/pages/Dashboard/Post/Table/Column/Account";

export const columns: TableColumnsType = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: IDataSourcePost, b: IDataSourcePost) => a.id - b.id,
  },
  {
    title: <div className="min-w-[120px] md:w-fit">Tiêu đề bài viết</div>,
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Tài khoản đăng",
    dataIndex: "account",
    key: "account",
    filters: [
      {
        text: "Tài khoản",
        value: "TaiKhoan",
        children: [
          {
            text: "Tài khoản 1",
            value: "taikhoan1",
          },
          {
            text: "Tài khoản 2",
            value: "taikhoan2",
          },
        ],
      },
    ],
    render: (account: AccountType) => <RenderAccountPost account={account} />,
  },
  {
    title: <div className="min-w-[100px] md:w-fit">Ngày đăng</div>,
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (status: string) => <RenderStatus status={status} />,
  },
  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
    render: (actions: { title: string; id: string }[]) => (
      <RenderActionsPost actions={actions} />
    ),
  },
];

export const dataSource: IDataSourcePost[] = [
  {
    id: 1,
    title: "Bài viết số 1",
    date: "2021-10-10",
    account: {
      id: 1,
      name: "Nguyễn Văn A",
      phone: "0123456789",
      avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    },
    status: "done",
    action: [
      {
        title: "Xem nội dung",
        id: "view-detail",
      },
      {
        title: "Xóa",
        id: "delete",
      },
    ],
  },
  {
    id: 2,
    title: "Bài viết số 2",
    date: "2021-10-10",
    account: {
      id: 2,
      name: "Nguyễn Văn B",
      phone: "0123456789",
      avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    },
    status: "pending",
    action: [
      {
        title: "Xem nội dung",
        id: "view-detail",
      },
      {
        title: "Xóa",
        id: "delete",
      },
    ],
  },
];

export const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
