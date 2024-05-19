import { Button } from "antd";
import { Link } from "react-router-dom";
import ROUTES from "../../../../../../../utils/routes";

const RenderActionsManagerAccountZalo = () => {
  return (
    <div className="flex w-[300px] flex-wrap items-center justify-start gap-2 md:w-full">
      <Button type="default">
        <Link to="">Tin nhắn</Link>
      </Button>
      <Button type="default">
        <Link to={`5/${ROUTES.DASHBOARD.MANAGER_ACCOUNT_ZALO.FRIEND}`}>
          Bạn bè
        </Link>
      </Button>
      <Button type="default">
        <Link to={`5/${ROUTES.DASHBOARD.MANAGER_ACCOUNT_ZALO.GROUP}`}>
          Nhóm
        </Link>
      </Button>
      <Button type="default">
        <Link to={`5/${ROUTES.DASHBOARD.MANAGER_ACCOUNT_ZALO.AUTO_ADD_FRIEND}`}>
          Kết bạn tự động
        </Link>
      </Button>
      <Button type="default">
        <Link
          to={`5/${ROUTES.DASHBOARD.MANAGER_ACCOUNT_ZALO.INVITATION_FRIEND}`}
        >
          Lời mời kết bạn
        </Link>
      </Button>
      <Button type="default">
        <Link
          to={`5/${ROUTES.DASHBOARD.MANAGER_ACCOUNT_ZALO.INVITATION_REQUEST_FRIEND}`}
        >
          Lời mời đã gửi
        </Link>
      </Button>
      <Button type="default">Đổi ảnh đại diện</Button>
      <Button type="default">Xuất file backup bạn bè</Button>
      <Button type="default" danger>
        Xóa
      </Button>
    </div>
  );
};

export default RenderActionsManagerAccountZalo;
