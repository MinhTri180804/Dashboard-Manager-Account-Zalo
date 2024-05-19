import React, { useState } from "react";
import {
  AimOutlined,
  ApartmentOutlined,
  AppstoreAddOutlined,
  BankOutlined,
  BulbOutlined,
  CalendarOutlined,
  DiffOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ProfileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Layout,
  Menu,
  Space,
  theme,
} from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
import logoImages from "../../assets/logo";
import clsx from "clsx";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/routes";
import "../../styles/layout/dashboard.css";

const { Header, Sider, Content } = Layout;

const MenuItems: ItemType<MenuItemType>[] = [
  {
    key: "5",
    icon: <DiffOutlined />,
    label: <div>Hướng dẫn sử dụng</div>,
    children: [
      {
        key: "5.1",
        icon: <ProfileOutlined />,
        label: (
          <Link
            to={`${ROUTES.DASHBOARD.USER_MANUAL.ROOT}/${ROUTES.DASHBOARD.USER_MANUAL.POLICY}`}
          >
            Chính sách
          </Link>
        ),
      },
      {
        key: "5.2",
        icon: <BulbOutlined />,
        label: (
          <Link
            to={`${ROUTES.DASHBOARD.USER_MANUAL.ROOT}/${ROUTES.DASHBOARD.USER_MANUAL.USAGE}`}
          >
            Cách sử dụng
          </Link>
        ),
      },
    ],
  },
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: <Link to={ROUTES.DASHBOARD.ROOT}>Thống kê</Link>,
  },
  {
    key: "2",
    icon: <AimOutlined />,
    label: (
      <Link to={ROUTES.DASHBOARD.MANAGER_JOBS.ROOT}>Quản lí công việc</Link>
    ),
  },
  {
    key: "3",
    icon: <CalendarOutlined />,
    label: <Link to={ROUTES.DASHBOARD.POST.ROOT}>Lên lịch đăng bài</Link>,
  },
  {
    key: "4",
    icon: <TeamOutlined />,
    label: (
      <Link to={ROUTES.DASHBOARD.MANAGER_ACCOUNT_ZALO.ROOT}>
        Quản lí tài khoản zalo
      </Link>
    ),
  },
  {
    key: "5",
    icon: <ApartmentOutlined />,
    label: <Link to={ROUTES.DASHBOARD.MANAGER_PROXY.ROOT}>Quản lí proxy</Link>,
  },
  {
    key: "7",
    icon: <AppstoreAddOutlined />,
    label: (
      <Link to={ROUTES.DASHBOARD.MANAGER_EMPLOYER.ROOT}>
        Quản lí tài khoản nhân viên
      </Link>
    ),
  },
  {
    key: "8",
    icon: <BankOutlined />,
    label: (
      <Link to={ROUTES.DASHBOARD.CONFIRM_PAYMENT}>
        Xác nhận thanh toán gói dịch vụ
      </Link>
    ),
  },
];

const items = [
  {
    key: "1",
    label: <button>Cài đặt</button>,
  },
  {
    key: "4",
    danger: true,
    label: <Link to={ROUTES.LOGIN}>Đăng xuất</Link>,
  },
];

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className=" min-h-dvh">
      <Layout className="min-h-dvh">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
          className={clsx("md:inline-block", {
            hidden: collapsed,
          })}
          width={300}
        >
          <Flex
            vertical
            align="between"
            justify="space-between"
            className="min-h-dvh"
          >
            <div className="">
              <div className="mx-auto max-w-[80px] px-4 py-3">
                <img
                  src={logoImages.logoRadius}
                  alt=""
                  className="w-full object-cover object-center"
                />
              </div>
              <Menu
                theme="light"
                mode="inline"
                className="text-[16px]"
                items={MenuItems}
                onClick={() => setCollapsed(true)}
              />
            </div>
          </Flex>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Flex align="center" justify="space-between">
              <Space
                size={"small"}
                wrap
                direction={"horizontal"}
                align={"center"}
              >
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
                <div
                  className={clsx("w-[150px]", {
                    "hidden md:block": !collapsed,
                  })}
                >
                  <img
                    src={logoImages.logoAndBrandVertical}
                    alt=""
                    className="h-auto w-full object-cover object-center"
                  />
                </div>
              </Space>
              <Dropdown menu={{ items }}>
                <Space
                  style={{ paddingRight: 20, cursor: "pointer" }}
                  size={"middle"}
                >
                  <div className="hidden md:inline-block md:font-montserrat md:text-[14px] md:font-normal md:text-black">
                    Xin chào{" "}
                    <span className="font-medium">Nguyễn Minh Trí</span>
                  </div>
                  <Avatar
                    src={
                      <img
                        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715731200&semt=ais_user"
                        alt="test"
                      />
                    }
                    size={50}
                  />
                </Space>
              </Dropdown>
            </Flex>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            className={clsx({
              "blur-sm md:blur-0": !collapsed,
            })}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
