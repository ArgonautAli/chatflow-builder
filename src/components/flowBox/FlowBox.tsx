import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  Connection,
  Node,
  NodeChange,
  EdgeChange,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import "./flowBox.css";

import TextUpdaterNode from "../textUpdateNode/TextUpdateNode";

import "../textUpdateNode/text-updater-node.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const rfStyle = {
  backgroundColor: "#FFF",
};

const initialNodes: Node[] = [
  // {
  //   id: "node-1",
  //   type: "textUpdater",
  //   position: { x: 0, y: 0 },
  //   data: { value: 123 },
  // },
  // {
  //   id: "node-2",
  //   type: "output",
  //   targetPosition: Position.Top,
  //   position: { x: 0, y: 200 },
  //   data: { label: "node 2" },
  // },
  // {
  //   id: "node-3",
  //   type: "output",
  //   targetPosition: Position.Top,
  //   position: { x: 200, y: 200 },
  //   data: { label: "node 3" },
  // },
];

const initialEdges: Edge[] = [
  { id: "temp-node", source: "node-1", target: "node-2", sourceHandle: "a" },
  // { id: "edge-2", source: "node-1", target: "node-3", sourceHandle: "b" },
];

const nodeTypes = { textUpdater: TextUpdaterNode };

const Flowbox: React.FC = () => {
  const createNode = useSelector((state: RootState) => state.flow.create_node);
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  useEffect(() => {
    console.log("createNode", createNode);
    if (createNode.value) {
      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: "temp-node",
          type: "textUpdater",
          position: { x: 0, y: 0 },
          data: { value: "" },
        },
      ]);
    }
  }, [createNode]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (connection: Edge<any> | Connection) =>
      setEdges((eds) => addEdge(connection, eds)),
    []
  );

  return (
    <div className="flowbox_container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
      />
    </div>
  );
};

export default Flowbox;
