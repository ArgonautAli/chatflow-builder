export interface NODE_TYPES {
  type: "text" | "model" | "";
}

export interface NODE_STATE {
  value: string;
  type: NODE_TYPES;
  id: string;
}

export interface CREATE_NODE {
  value: boolean;
  type: NODE_TYPES;
}

export interface FLOW_STATE {
  node: NODE_STATE[];
  create_node: CREATE_NODE;
}
