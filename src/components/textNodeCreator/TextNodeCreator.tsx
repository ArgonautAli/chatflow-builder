import React from "react";
import { Card } from "antd";

export const TextNodeCreator = () => {
  return (
    <div>
      {" "}
      <Card
        size="small"
        title="Create text node"
        // extra={<a href="#">More</a>}
        style={{ width: 250, textAlign: "left" }}
        onClick={() => {
          console.log("created");
        }}
      >
        <p>Click here to create messages</p>
      </Card>
    </div>
  );
};
