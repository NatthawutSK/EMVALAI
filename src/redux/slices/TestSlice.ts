import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TestState = {
  count: number;
};

const initialValues: TestState = {
  count: 0,
};

const TestSlice = createSlice({
  name: "Test",
  initialState: initialValues,
  reducers: {
    addCount: (state: TestState, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { addCount } = TestSlice.actions;
export const TestSelector = (store: RootState) => store.TestReducer;
export default TestSlice.reducer;
