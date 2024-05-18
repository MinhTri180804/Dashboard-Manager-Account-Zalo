/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, Form, Input, List, Select, Typography } from "antd";
import formatCurrencyVN from "../../../utils/formatCurrencyVN";
import { useState } from "react";
import clsx from "clsx";

const formStyle: React.CSSProperties = {};

const optionsBank = [
  {
    value: "1",
    label: "Ngân hàng A",
  },
  {
    value: "2",
    label: "Ngân hàng B",
  },
  {
    value: "3",
    label: "Ngân hàng C",
  },
  {
    value: "4",
    label: "Ngân hàng D",
  },
];

const data = [
  {
    id: 1,
    title: "Gói 1",
  },
  {
    id: 2,
    title: "Gói 2",
  },
  {
    id: 3,
    title: "Gói 3",
  },
  {
    id: 4,
    title: "Gói 4",
  },
];
const ConfirmPaymentPage = () => {
  const [price, setPrice] = useState<string>("0");
  const [service, setService] = useState<number>(0);
  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    value = value.replace(/[^0-9]/g, "");

    if (value) {
      setPrice(formatCurrencyVN(Number(value)));
    } else {
      setPrice("0");
    }
  };

  const confirmPayment = () => {
    console.log("Bank", "Account", "Name", "Price", "Service");
  };
  return (
    <section className="md:container md:mx-auto md:max-w-[70%]">
      <Typography.Title level={3}>
        Xác nhận thanh toán dịch vụ sử dụng
      </Typography.Title>
      <div className="mt-6">
        <Form layout="vertical" style={formStyle}>
          <Form.Item label="Ngân hàng">
            <Select placeholder="Chọn ngân hàng" options={optionsBank} />
          </Form.Item>
          <Form.Item label="Số tài khoản">
            <Input type="number" placeholder="Nhập số tài khoản" />
          </Form.Item>
          <Form.Item label="Tên tài khoản">
            <Input type="text" placeholder="Nhập tên tài khoản" />
          </Form.Item>
          <Form.Item label="Số tiền">
            <Input
              type="text"
              placeholder="Nhập số tiền"
              defaultValue={price}
              onChange={(e) => onChangePrice(e)}
              value={price}
            />
          </Form.Item>
          <Form.Item label="Lựa chọn gói mua">
            <List
              className="mt-3"
              grid={{
                gutter: 16,
                column: 4,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 4,
                xxl: 4,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    title={item.title}
                    onClick={() => setService(item.id)}
                    className={clsx("cursor-pointer", [
                      service === item.id
                        ? "border-2 border-[#ef4137]"
                        : "border-[#e5e7eb]",
                    ])}
                  >
                    Mô tả gói
                  </Card>
                </List.Item>
              )}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ width: "100%", padding: "10px 0px", height: "auto" }}
              className="sticky left-0 w-full !bg-gradient-to-r from-[#ef4137] to-[#f79756] text-white hover:from-80%"
              onClick={() => confirmPayment()}
            >
              Xác nhận thanh toán
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default ConfirmPaymentPage;
