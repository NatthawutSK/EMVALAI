import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type UserType = {
  _id: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  role: string;
  position: string;
  image: string;
  hireDate: string;
  lname: string;
  fname: string;
};

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
    setUser: (state: UserState, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = UserSlice.actions;
export const UserSelector = (store: RootState) => store.UserReducer;
export default UserSlice.reducer;
