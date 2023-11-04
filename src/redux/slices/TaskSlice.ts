import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TaskStateEnum, TypeTask } from "@/types";

type TaskState = {
  tasks: TypeTask[];
  draggedTask: null | string;
  // date: {
  //   from: Date;
  //   to: Date;
  // };
};

type MoveTaskType = {
  id: string;
  state: TaskStateEnum;
};

const initialValues: TaskState = {
  tasks: [],
  draggedTask: null,
};

const TaskSlice = createSlice({
  name: "Todo",
  initialState: initialValues,
  reducers: {
    addTask: (state: TaskState, action: PayloadAction<TypeTask>) => {
      // console.log("action", action.payload);
      // console.log("state date", state.date);

      state.tasks.push(action.payload);
    },
    setDraggedTask: (state: TaskState, action: PayloadAction<string>) => {
      state.draggedTask = action.payload;
    },
    moveTask: (state: TaskState, action: PayloadAction<MoveTaskType>) => {
      console.log("action", action.payload);
      const { id, state: newState } = action.payload;
      state.tasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, state: newState };
        }
        return task;
      });
    },
    deleteTask: (state: TaskState, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, setDraggedTask, moveTask, deleteTask } =
  TaskSlice.actions;
export const TaskSelector = (store: RootState) => store.TaskReducer;
export default TaskSlice.reducer;
