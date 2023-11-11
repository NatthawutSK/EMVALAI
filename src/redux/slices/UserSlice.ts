import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserType } from "@/types";



type UserState = {
  user: UserType | null;
};

const initialValues: UserState = {
  user: null,
};

const UserSlice = createSlice({
  name: "User",
  initialState: initialValues,
  reducers: {
    // setUser: (state: UserState, action: PayloadAction<UserType>) => {
    //   state.user = action.payload;
    // },
  },
});

export const {} = UserSlice.actions;
export const UserSelector = (store: RootState) => store.UserReducer;
export default UserSlice.reducer;
