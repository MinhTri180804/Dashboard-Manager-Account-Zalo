import { Radio, TableColumnsType } from "antd";
import RenderActionsManagerAccountZaloGroup from "../../../../components/pages/Dashboard/AccountZalo/ChildrenPage/Group/Table/Column/Actions";

interface IDataSourceGroup {
  id: number;
  group: {
    id: number;
    name: string;
    quantityMember: number;
    avatar: string;
  };
  types: string[];
}

const types: string[] = ["Bình thường", "VIP", "Đặc biệt"];

export const columnsGroup: TableColumnsType = [
  {
    title: "Nhóm",
    dataIndex: "group",
    key: "group",
    render: (group: { name: string; avatar: string }) => (
      <div className="flex w-[250px] items-center justify-start gap-2">
        <img
          src={group.avatar}
          alt={group.name}
          className="h-10 w-10 rounded-full object-cover object-center"
        />
        <span className="ml-2">{group.name}</span>
      </div>
    ),
  },
  {
    title: "Số lượng thành viên",
    dataIndex: "group",
    key: "group",
    render: (group: { quantityMember: number }) => (
      <div className="w-[150px] md:w-[250px]">{group.quantityMember}</div>
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
    width: 600,
    render: () => <RenderActionsManagerAccountZaloGroup />,
  },
];

export const dataSourceGroup: IDataSourceGroup[] = [
  {
    id: 1,
    group: {
      id: 1,
      name: "Nhóm tiếng anh",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      quantityMember: 40,
    },
    types,
  },

  {
    id: 2,
    group: {
      id: 1,
      name: "Nhóm nấu ăn",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      quantityMember: 30,
    },
    types,
  },

  {
    id: 3,
    group: {
      id: 1,
      name: "Nhóm du lịch",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      quantityMember: 20,
    },
    types,
  },
];
