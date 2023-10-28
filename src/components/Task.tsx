import { cn } from "@/lib/utils";
import { setDraggedTask } from "@/redux/slices/TaskSlice";
import { useAppDispatch } from "@/redux/store";
import { TypeTask } from "@/types";
import React from "react";

type Props = {
  task: TypeTask;
};

export default function Task({ task }: Props) {
  const dispatch = useAppDispatch();
  return (
    <div
      className="task mt-5 bg-yellow-100 text-black p-2 rounded-md"
      draggable
      onDragStart={() => dispatch(setDraggedTask(task.id))}
    >
      {/* <Dialog open={edit} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader>Add New Task</DialogHeader>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input
              onChange={(e) => setText(e.target.value)}
              value={text}
              label="Title"
            />
            <Textarea
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              label="Description"
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="outlined"
            className="bg-sky-500 hover:bg-sky-700"
            onClick={() => {
              setText(task.title);
              setDesc(task.desc);
              handleOpen();
            }}
          >
            Close
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              editTask(task.id, text, desc);
              setText(text);
              setDesc(desc);
              handleOpen();
            }}
          >
            Edit
          </Button>
        </DialogFooter>
      </Dialog> */}
      <div className="font-bold no-underline hover:underline text-lg mb-4 container overflow-hidden">
        <p
          //   onClick={handleTask}
          className="whitespace-no-wrap overflow-hidden text-ellipsis"
        >
          {task.title}
        </p>
      </div>
      {/* <div className="flex justify-between">
        <div className="flex gap-2 mt-2">
          <img
            className="h-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            src={trash}
            onClick={() => deleteTask(task.id)}
          />
          <img
            className="h-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            src={editSvg}
            onClick={() => {
              setEdit(true);
            }}
          />
        </div>
        <div className={cn("rounded p-1 font-mono px-2")}>
          {task}
        </div>
      </div> */}
      {/* <Dialog
        open={open}
        handler={handleTask}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Title</DialogHeader>
        <DialogBody
          className="whitespace-normal overflow-hidden break-words text-lg "
          divider
        >
          {task.title}
        </DialogBody>
        <DialogHeader>Description</DialogHeader>
        <DialogBody
          className="whitespace-normal overflow-hidden break-words"
          divider
        >
          {task.desc}
        </DialogBody>
      </Dialog> */}
    </div>
  );
}
