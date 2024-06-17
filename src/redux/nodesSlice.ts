import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NODE_STATE, FLOW_STATE } from "./types";

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
      { payload }: PayloadAction<{ node: NODE_STATE }>
    ) => {
      state.node.push(payload.node);
    },

    createTextNode: (
      state: FLOW_STATE,
      { payload }: PayloadAction<{ node: NODE_STATE }>
    ) => {
      state.node.push(payload.node);
    },
  },
});
