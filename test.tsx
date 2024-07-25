import { Button } from "antd";
import React from "react";

type Props = {
  title: string;
  content: string;
};

const TestingComponent = (props: Props) => {
  const { title, content } = props;

  const handleClick = () => {
    console.log("Click");
  };

  return (
    <>
      <div>
        {title} + {content}{" "}
      </div>
      <Button type="primary" danger onClick={handleClick}>
        This is button handler
      </Button>
    </>
  );
};

export default TestingComponent;
