export type NODE_TYPE = "text" | "model" | string;

export interface NODE_STATE {
  value: string;
  type: NODE_TYPE;
  id: string;
}

interface CREATE_NODE {
  value: boolean;
  type: NODE_TYPE;
}

export interface FLOW_STATE {
  node: NODE_STATE[];
  create_node: CREATE_NODE;
}
