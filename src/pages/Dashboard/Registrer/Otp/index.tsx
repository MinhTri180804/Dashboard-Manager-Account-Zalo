import { Result } from "antd";

const RegisterOtp: React.FC = () => {
  return (
    <Result
      status="success"
      title="Đăng kí thành công !"
      subTitle="Hãy kiểm tra email để nhận mã OTP và xác thực tài khoản."
    />
  );
};

export default RegisterOtp;
