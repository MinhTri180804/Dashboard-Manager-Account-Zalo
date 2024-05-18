import { Typography } from "antd";
import FormRegisterComponent from "../../../components/pages/Register/Form";
import logoImages from "../../../assets/logo";

const RegisterPage: React.FC = () => {
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
            Đăng kí
          </Typography.Title>
          <FormRegisterComponent />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
