import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import authApi from "../../../../apis/authApi";
import toast from "react-hot-toast";
import { LoginResponse } from "../../../../types/Api/Response/Auth";
import { AxiosResponse } from "axios";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ROUTES from "../../../../utils/routes";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
  const { username, password } = values;
  if (!username || !password)
    return toast.error("Username or password is empty!");

  try {
    await authApi
      .login({ username, password })
      .then((res: AxiosResponse<LoginResponse>) => {
        if (
          res.data.resultCode === 200 &&
          res.data.success &&
          res.status === 200
        ) {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("refreshToken", res.data.data.refreshToken);
          window.location.href = "/dashboard";
          toast.success("Đăng nhập thành công !");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Đăng nhập thất bại !");
      });
  } catch (error) {
    console.error(error);
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormLoginComponent: React.FC = () => {
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          type="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Ghi nhớ</Checkbox>
          </Form.Item>

          <Link to={"1"} className="login-form-forgot underline">
            Quên mật khẩu
          </Link>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className=" login-form-button w-full !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80%"
        >
          Đăng nhập ngay
        </Button>
        <div className="mt-2">
          Hoặc {""}
          <Link
            to={ROUTES.REGISTER}
            className="text-[14px] font-medium underline"
          >
            Bạn chưa có tài khoản ?
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default FormLoginComponent;
