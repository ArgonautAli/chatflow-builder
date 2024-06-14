import React from "react";
import "./sidebar.css";
import { Button } from "antd";

const nodeTypes = ["Text"];

export const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div>
        <h4> Nodes manager</h4>
      </div>
      <div className="node_list">
        {nodeTypes.map((node: string) => (
          <>
            <Button type="primary" size={"large"}>
              {node}
            </Button>
          </>
        ))}
      </div>
    </div>
  );
};
