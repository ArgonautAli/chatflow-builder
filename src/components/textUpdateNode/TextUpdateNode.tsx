import { useCallback, useState } from "react";
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
  const [inputValue, setInputValue] = useState("");

  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value, "evt", evt);
    setInputValue(evt.target.value);
  }, []);

  const onKeyPress = useCallback(
    (evt: React.KeyboardEvent<HTMLInputElement>) => {
      if (evt.key === "Enter") {
        console.log("Enter key pressed!", inputValue);
        // Add your logic here, for example, submit the form or call an API
      }
    },
    [inputValue]
  );

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text">Text:</label>
        <input
          id="text"
          name="text"
          onChange={onChange}
          onKeyDown={onKeyPress}
          className="nodrag"
        />
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
