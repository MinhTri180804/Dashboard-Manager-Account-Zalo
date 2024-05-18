import { Button, TableColumnsType } from "antd";
import RenderStatusProxy from "../../../components/pages/Dashboard/Proxy/Table/Column/Status";

type IDataSourceProxy = {
  id: number;
  title: string;
  expired: string;
  status: string;
  options: {
    title: string;
    id: string;
    status: boolean;
  }[];
};

export const columnsManagerProxy: TableColumnsType = [
  {
    title: "Proxy",
    dataIndex: "title",
    key: "proxy",
    render: (title: string) => <div>{title}</div>,
  },
  {
    title: "Hạn sử dụng",
    dataIndex: "expired",
    key: "expired",
    render: (expired: string) => <div>{expired}</div>,
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
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
    render: () => <div>note</div>,
  },
  {
    title: "Tùy chọn",
    dataIndex: "options",
    key: "options",
    render: () => (
      <div className="flex items-center justify-start gap-2">
        <Button type="default">Sửa</Button>
        <Button type="default" danger>
          Xóa
        </Button>
      </div>
    ),
  },
];

export const dataSourceProxy: IDataSourceProxy[] = [
  {
    id: 1,
    title: "Proxy 1",
    expired: "20-10-2021",
    status: "process",
    options: [
      {
        title: "sửa",
        id: "edit",
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
    id: 1,
    title: "Proxy 2",
    expired: "20-10-2021",
    status: "stop",
    options: [
      {
        title: "sửa",
        id: "edit",
        status: true,
      },
      {
        title: "Xóa",
        id: "delete",
        status: true,
      },
    ],
  },
];
