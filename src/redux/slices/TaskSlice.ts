import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { type } from "os";
import { TaskStateEnum, TypeTask } from "@/types";

type TaskState = {
  tasks: TypeTask[];
  draggedTask: null | string;
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
      console.log("action", action.payload);
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
  },
});

export const { addTask, setDraggedTask, moveTask } = TaskSlice.actions;
export const TaskSelector = (store: RootState) => store.TaskReducer;
export default TaskSlice.reducer;
