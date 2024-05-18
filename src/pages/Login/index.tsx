import { Typography } from "antd";
import logoImages from "../../assets/logo";
import FormLoginComponent from "../../components/pages/Login/Form";

const LoginPage: React.FC = () => {
  return (
    <div className="md:container md:mx-auto md:max-w-[1280px]">
      <div className="px-[20px] py-[80px]">
        <div className="mx-auto w-[150px]">
          <img
            src={logoImages.logoAndBrandHorizontal}
            alt=""
            className="h-auto w-full object-cover object-center"
          />
        </div>
        <div className="mx-auto md:max-w-[600px]">
          <Typography.Title level={4} className="mb-4">
            Đăng nhập
          </Typography.Title>
          <FormLoginComponent />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
