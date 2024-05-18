import { UserOutlined } from "@ant-design/icons";
import { MenuProps, TableColumnsType } from "antd";
import RenderStatus from "../../../components/pages/Dashboard/Post/Table/Column/Status";
import {
  AccountType,
  ActionType,
  IDataSourceJob,
} from "../../../types/Pages/Dashboard/Jobs";
import clsx from "clsx";
import RenderMethodCampaign from "../../../components/pages/Dashboard/Jobs/MethodCampaign";
import RenderActionsJob from "../../../components/pages/Dashboard/Jobs/MethodCampaign/Table/Column/Actions";
import RenderAccountJob from "../../../components/pages/Dashboard/Jobs/MethodCampaign/Table/Column/Account";

export const columns: TableColumnsType = [
  {
    title: "Chiến dịch",
    dataIndex: "campaign",
    key: "campaign",
  },
  {
    title: "Tài khoản",
    dataIndex: "accounts",
    key: "accounts",
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
    filterMode: "tree",
    render: (accounts: AccountType[]) => (
      <RenderAccountJob accounts={accounts} />
    ),
  },
  {
    title: "Mục tiêu",
    dataIndex: "methodCampaign",
    key: "methodCampaign",
    render: (methodCampaign: { id: string; label: string }) => (
      <RenderMethodCampaign methodCampaign={methodCampaign} />
    ),
  },
  {
    title: "Số lượng thành công",
    dataIndex: "resultProcess",
    key: "resultProcess",
    sorter: (a: IDataSourceJob, b: IDataSourceJob) =>
      a.resultProcess.countSuccess - b.resultProcess.countSuccess,
    render: (value) => (
      <span
        className={clsx([
          value.countSuccess === value.target && "text-green-500",
        ])}
      >
        <span className="">{value.countSuccess}</span> /{" "}
        <span className="font-bold">{value.target}</span>
      </span>
    ),
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    sorter: (a: IDataSourceJob, b: IDataSourceJob) =>
      a.status.localeCompare(b.status),
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
    render: (status: string) => <RenderStatus status={status} />,
  },
  {
    title: "Tùy chọn",
    dataIndex: "options",
    key: "options",
    render: (options: ActionType[]) => <RenderActionsJob actions={options} />,
  },
];

export const dataSource: IDataSourceJob[] = [
  {
    id: 1,
    campaign: "Chiến dịch số 1",
    accounts: [
      {
        id: 1,
        name: "Nguyễn Văn A",
        phone: "0123456789",
        avatar:
          "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
      },
      {
        id: 2,
        name: "Nguyễn Văn B",
        phone: "0123456789",
        avatar:
          "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
      },
    ],
    methodCampaign: {
      id: "allUserInGroup",
      label: "Tất cả thành viên trong nhóm",
    },
    resultProcess: {
      countSuccess: 40,
      target: 60,
    },
    status: "process",
    options: [
      {
        title: "Xem chi tiết",
        id: "view-detail",
        status: true,
      },
      {
        title: "Dừng",
        id: "stop",
        status: true,
      },
      {
        title: "Tiếp tục",
        id: "continue",
        status: false,
      },
      {
        title: "Xóa",
        id: "delete",
        status: true,
      },
    ],
  },

  {
    id: 2,
    campaign: "chiến dịch số 2",
    accounts: [
      {
        id: 2,
        name: "Nguyễn Văn B",
        phone: "0123456789",
        avatar:
          "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
      },
    ],
    methodCampaign: {
      id: "numberPhone",
      label: "Gửi đến số điện thoại",
    },
    resultProcess: {
      countSuccess: 12,
      target: 40,
    },
    status: "stop",
    options: [
      {
        title: "Xem chi tiết",
        id: "view-detail",
        status: true,
      },
      {
        title: "Dừng",
        id: "stop",
        status: false,
      },
      {
        title: "Tiếp tục",
        id: "continue",
        status: true,
      },
      {
        title: "Xóa",
        id: "delete",
        status: true,
      },
    ],
  },
  {
    id: 3,
    campaign: "chiến dịch số 3",
    accounts: [
      {
        id: 3,
        name: "Nguyễn Văn C",
        phone: "0123456789",
        avatar:
          "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
      },
      {
        id: 3,
        name: "Nguyễn Văn C",
        phone: "0123456789",
        avatar:
          "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
      },
      {
        id: 3,
        name: "Nguyễn Văn C",
        phone: "0123456789",
        avatar:
          "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
      },
    ],
    methodCampaign: {
      id: "allGroup",
      label: "Gửi đến tất cả nhóm",
    },
    resultProcess: {
      countSuccess: 30,
      target: 30,
    },
    status: "done",
    options: [
      {
        title: "Xem chi tiết",
        id: "view-detail",
        status: true,
      },
      {
        title: "Dừng",
        id: "stop",
        status: false,
      },
      {
        title: "Tiếp tục",
        id: "continue",
        status: false,
      },
      {
        title: "Xóa",
        id: "delete",
        status: true,
      },
    ],
  },
  {
    id: 4,
    campaign: "chiến dịch số 4",
    accounts: [
      {
        id: 4,
        name: "Nguyễn Văn D",
        phone: "0123456789",
        avatar:
          "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
      },
      {
        id: 4,
        name: "Nguyễn Văn D",
        phone: "0123456789",
        avatar:
          "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
      },
      {
        id: 4,
        name: "Nguyễn Văn D",
        phone: "0123456789",
        avatar:
          "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
      },
      {
        id: 4,
        name: "Nguyễn Văn D",
        phone: "0123456789",
        avatar:
          "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
      },
    ],
    methodCampaign: {
      id: "allFriend",
      label: "Gửi đến tất cả bạn bè",
    },
    resultProcess: {
      target: 120,
      countSuccess: 120,
    },
    status: "done",
    options: [
      {
        title: "Xem chi tiết",
        id: "view-detail",
        status: true,
      },
      {
        title: "Dừng",
        id: "stop",
        status: false,
      },
      {
        title: "Tiếp tục",
        id: "continue",
        status: false,
      },
      {
        title: "Xóa",
        id: "delete",
        status: true,
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
