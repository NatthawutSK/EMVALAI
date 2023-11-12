import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TaskStateEnum, TypeTask } from "@/types";
import { v4 as uuidv4 } from "uuid";
type TaskState = {
  tasks: TypeTask[];
  draggedTask: null | string;
  disableTask: boolean;
  // openEdit: boolean;
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
  disableTask: false,
  // openEdit: false,
};

const TaskSlice = createSlice({
  name: "Todo",
  initialState: initialValues,
  reducers: {
    setTask: (state: TaskState, action: PayloadAction<TypeTask[]>) => {
      state.tasks = action.payload.map((task) => {
        return { ...task, id: uuidv4() };
      });
      console.log("action", action.payload);
      console.log("state", state.tasks);

      // state.tasks = action.payload;
    },
    addTask: (state: TaskState, action: PayloadAction<TypeTask>) => {
      // console.log("action", action.payload);

      state.tasks.push(action.payload);
    },
    setDraggedTask: (state: TaskState, action: PayloadAction<string>) => {
      state.draggedTask = action.payload;
    },
    moveTask: (state: TaskState, action: PayloadAction<MoveTaskType>) => {
      console.log("action", action.payload);
      console.log("state", state.tasks);

      const { id, state: newState } = action.payload;
      state.tasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, taskStatus: newState };
        }
        return task;
      });
    },
    deleteTask: (state: TaskState, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // openEdit: (state: TaskState) => {
    //   state.openEdit = !state.openEdit;
    // },
    editTask: (state: TaskState, action: PayloadAction<TypeTask>) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    },
    enableDisableTask: (state: TaskState) => {
      state.disableTask = !state.disableTask;
    },
  },
});

export const {
  addTask,
  setDraggedTask,
  moveTask,
  deleteTask,
  editTask,
  enableDisableTask,
  setTask,
} = TaskSlice.actions;
export const TaskSelector = (store: RootState) => store.TaskReducer;
export default TaskSlice.reducer;
