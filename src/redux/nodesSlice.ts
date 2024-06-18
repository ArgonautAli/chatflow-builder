import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NODE_STATE, FLOW_STATE, NODE_TYPE } from "./types";

const initialState: FLOW_STATE = {
  create_node: { value: false, type: "" },
  node: [],
};

export const flow_slice = createSlice({
  name: "FLOW_SLICE",
  initialState,
  reducers: {
    resetFlowSlice: () => initialState,
    newNodeCreate: (
      state: FLOW_STATE,
      { payload }: PayloadAction<{ create_node: boolean; type: NODE_TYPE }>
    ) => {
      state.create_node.value = payload.create_node;
      state.create_node.type = payload.type;
    },
    createTextNode: (
      state: FLOW_STATE,
      { payload }: PayloadAction<{ node: NODE_STATE }>
    ) => {
      state.node.push(payload.node);
    },
  },
});

export const { newNodeCreate, createTextNode } = flow_slice.actions;

export default flow_slice.reducer;
