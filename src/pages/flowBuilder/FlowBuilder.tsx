import React from "react";
import "./flowBuilder.css";
import Node from "../../components/node/Node";
import ReactFlow from "reactflow";

export const FlowBuilder = () => {
  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  ];
  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
  return (
    <div className="flowbuilder_container">
      <div style={{ width: "50vw", height: "50vh" }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
      <div>Nodes manager</div>
    </div>
  );
};
