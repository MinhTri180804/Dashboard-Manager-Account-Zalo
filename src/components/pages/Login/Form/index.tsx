import React from "react";
import type { FormProps } from "antd";
import { Form, Input } from "antd";
import authApi from "../../../../apis/authApi";
import toast from "react-hot-toast";
import { LoginResponse } from "../../../../types/Api/Response/Auth";
import { AxiosResponse } from "axios";

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
      name="form-login"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <Form.Item<FieldType>
        label="Tên đăng nhập"
        name="username"
        rules={[
          { required: true, message: "Tên đăng nhập không được để trống!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: "Mật khẩu không được để trống!" }]}
      >
        <Input.Password />
      </Form.Item>

      <div className="flex w-full items-center justify-center">
        <button className=" to-bright-orange mx-auto mt-3 inline-block w-fit cursor-pointer rounded-[6px] bg-gradient-to-r from-bright-red px-3 py-2 font-montserrat text-white">
          Đăng nhập
        </button>
      </div>
    </Form>
  );
};

export default FormLoginComponent;
