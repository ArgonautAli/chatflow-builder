import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import "./text-updater-node.css";
const handleStyle = {};

interface TextUpdaterNodeProps {
  data: any;
  isConnectable: boolean;
}

const TextUpdaterNode: React.FC<TextUpdaterNodeProps> = ({
  data,
  isConnectable,
}) => {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      {/* <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      /> */}
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      {/* <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      /> */}
    </div>
  );
};

export default TextUpdaterNode;
