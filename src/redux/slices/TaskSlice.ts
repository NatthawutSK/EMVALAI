import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TaskStateEnum, TypeTask } from "@/types";

type TaskState = {
  tasks: TypeTask[];
  draggedTask: null | string;
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
  // openEdit: false,
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
  },
});

export const { addTask, setDraggedTask, moveTask, deleteTask, editTask } =
  TaskSlice.actions;
export const TaskSelector = (store: RootState) => store.TaskReducer;
export default TaskSlice.reducer;
