import React from "react";
import "./flowBuilder.css";
import "reactflow/dist/style.css";
import Flowbox from "../../components/flowBox/FlowBox.js";
import { Sidebar } from "../../components/sidebar/Sidebar.js";

export const FlowBuilder = () => {
  return (
    <div className="flowbuilder_container">
      <Flowbox />
      <Sidebar />
    </div>
  );
};
