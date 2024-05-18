/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import authApi from "../../../../apis/authApi";
import { AxiosResponse } from "axios";
import { LoginResponse } from "../../../../types/Api/Response/Auth";
import toast from "react-hot-toast";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish = async (values: any) => {
  const { email, password, confirm } = values;
  try {
    await authApi
      .register({ username: email, password, confirmPassword: confirm })
      .then((res: AxiosResponse<LoginResponse>) => {
        if (
          res.data.resultCode === 200 &&
          res.data.success &&
          res.status === 200
        ) {
          window.location.href = "/dang-ki/opt";
          toast.success("Đăng kí thành công !");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Đăng kí thất bại !");
      });
  } catch (error) {
    console.error(error);
  }
};
const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormRegisterComponent: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      layout="vertical"
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "Không phải định dạng E-mail!",
          },
          {
            required: true,
            message: "Không được bỏ trống E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Không được bỏ trống mật khẩu!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Không được bỏ trống xác thực mật khẩu!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Mật khẩu xác thực không trùng khớp!"),
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className=" login-form-button w-full !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80%"
        >
          Đăng kí tài khoản
        </Button>
        <div className="mt-2">
          Or{" "}
          <Link to="" className="text-[14px] font-medium underline">
            Đã có tài khoản
          </Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default FormRegisterComponent;
