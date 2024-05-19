const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/dang-ki",
  REGISTER_OTP: "/dang-ki/otp",
  DASHBOARD: {
    ROOT: "/dashboard",
    STATISTICAL: "thong-ke",
    MANAGER_JOBS: {
      ROOT: "quan-li-cong-viec",
      CREATE: "them-cong-viec",
    },
    MANAGER_ACCOUNT: "quan-li-tai-khoan",
    POST: {
      ROOT: "len-lich-dang-bai",
      CREATE: "tao-bai-viet",
    },
    USER_MANUAL: {
      ROOT: "huong-dan-su-dung",
      POLICY: "chinh-sach",
      USAGE: "cach-su-dung",
    },
    MANAGER_PROXY: {
      ROOT: "quan-li-proxy",
      CREATE: "them-proxy",
    },
    MANAGER_EMPLOYER: {
      ROOT: "quan-li-tai-khoan-nhan-vien",
    },
    CONFIRM_PAYMENT: "xac-nhan-thanh-toan",
    MANAGER_ACCOUNT_ZALO: {
      ROOT: "quan-li-tai-khoan-zalo",
      CREATE: "them-tai-khoan-zalo",
      FRIEND: "ban-be",
      GROUP: "nhom",
      AUTO_ADD_FRIEND: "tu-dong-them-ban",
      MODIFIED_AVATAR: "chinh-sua-anh-dai-dien",
      INVITATION_FRIEND: "loi-moi-ket-ban",
      INVITATION_REQUEST_FRIEND: "loi-moi-ket-ban-da-gui",
    },
  },
};

export default ROUTES;
