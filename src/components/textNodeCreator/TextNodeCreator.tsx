import React from "react";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { newNodeCreate } from "../../redux/nodesSlice";

export const TextNodeCreator = () => {
  const dispatch = useDispatch();
  const nodeCreator = () => {
    dispatch(newNodeCreate({ create_node: true, type: "text" }));
  };
  return (
    <div>
      {" "}
      <Card
        size="small"
        title="Create text node"
        // extra={<a href="#">More</a>}
        style={{ width: 250, textAlign: "left" }}
        onClick={() => {
          nodeCreator();
        }}
      >
        <p>Click here to create messages</p>
      </Card>
    </div>
  );
};
