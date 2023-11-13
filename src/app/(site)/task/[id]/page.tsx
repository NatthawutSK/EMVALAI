"use client";
import ColumnTask from "@/components/ColumnTask";
import { Button } from "@/components/ui/button";
import {
  TaskSelector,
  enableDisableTask,
  setTask,
} from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { set } from "date-fns";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import WithAuth from "@/components/WithAuth";

enum TaskStateEnum {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

type Props = {
  params: {
    id: string;
  };
};

const Task = ({ params }: Props) => {
  const dispatch = useAppDispatch();
  const taskReducer = useSelector(TaskSelector);

  const fetchTasks = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        `http://localhost:8082/task-service/task/ByProjId/${params.id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(JSON.stringify(data));
      dispatch(setTask(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleEdit = async () => {
    if (taskReducer.disableTask) {
      dispatch(enableDisableTask());
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await fetch(
          "http://localhost:8082/task-service/task/updateTask",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              taskEntityList: taskReducer.tasks,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      console.log("save");
    } else {
      dispatch(enableDisableTask());
    }
  };
  return (
    <div className="justify-center min-h-screen">
      <h1 className="text-4xl font-bold p-5  ml-5">
        {taskReducer.projectName}
        {/* {JSON.stringify(taskReducer.tasks)} */}
      </h1>
      <div className="flex justify-end mr-12 p-3">
        <Button
          variant={taskReducer.disableTask ? "success" : "edit"}
          onClick={() => handleEdit()}
        >
          {taskReducer.disableTask ? "SAVE" : "EDIT"}
        </Button>
      </div>
      <div className="min-h-[35rem] flex  justify-evenly">
        <ColumnTask projId={params.id} state={TaskStateEnum.TODO} />
        <ColumnTask projId={params.id} state={TaskStateEnum.DOING} />
        <ColumnTask projId={params.id} state={TaskStateEnum.DONE} />
      </div>
    </div>
  );
};

export default Task;
