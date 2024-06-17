import React from "react";
import "./sidebar.css";
// import { Button } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { TextNodeCreator } from "../textNodeCreator/TextNodeCreator";

// const nodeTypes = ["Text"];

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Text",
    children: (
      <>
        <TextNodeCreator />
      </>
    ),
  },
  {
    key: "2",
    label: "Model",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Others",
    children: "Content of Tab Pane 3",
  },
];

export const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div>
        <h4> Nodes manager</h4>
      </div>
      <div className="node_list">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};
