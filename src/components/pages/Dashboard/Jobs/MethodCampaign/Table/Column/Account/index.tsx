import { Avatar, Flex, Tooltip } from "antd";
import { AccountType } from "../../../../../../../../types/Pages/Dashboard/Jobs";

interface IRenderAccountJobProps {
  accounts: AccountType[];
}

const RenderAccountJob: React.FC<IRenderAccountJobProps> = ({ accounts }) => {
  console.log(accounts);
  if (accounts.length > 1) {
    return (
      <Avatar.Group
        maxCount={2}
        maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
      >
        {accounts.map((account, index: number) => (
          <Tooltip className="cursor-pointer" title={account.phone} key={index}>
            <Avatar src={account.avatar} key={index} />
          </Tooltip>
        ))}
      </Avatar.Group>
    );
  }

  return (
    <Flex align="center" justify="start" gap={10} className="min-w-[200px]">
      <img
        src={accounts[0].avatar}
        alt="avatar"
        style={{ width: 50, height: 50, borderRadius: "50%" }}
      />

      <Flex vertical align="start" justify="start" gap={10}>
        <span>{accounts[0].name}</span>
        <span>{accounts[0].phone}</span>
      </Flex>
    </Flex>
  );
};

export default RenderAccountJob;
