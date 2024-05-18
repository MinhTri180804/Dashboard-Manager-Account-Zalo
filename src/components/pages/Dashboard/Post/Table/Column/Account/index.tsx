import { Flex } from "antd";
import { IRenderAccountProps } from "../../../../../../../types/Pages/Dashboard/Post";

const RenderAccountPost: React.FC<IRenderAccountProps> = ({ account }) => (
  <Flex align="center" justify="start" gap={10} className="min-w-[200px]">
    <img
      src={account.avatar}
      alt="avatar"
      style={{ width: 50, height: 50, borderRadius: "50%" }}
    />

    <Flex vertical align="start" justify="start" gap={10}>
      <span>{account.name}</span>
      <span>{account.phone}</span>
    </Flex>
  </Flex>
);

export default RenderAccountPost;
