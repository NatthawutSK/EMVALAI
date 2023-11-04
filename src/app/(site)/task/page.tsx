import ColumnTask from "@/components/ColumnTask";

enum TaskStateEnum {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

type Props = {};

export default function Task({}: Props) {
  return (
    <div className="justify-center min-h-screen ">
      <h1 className="text-4xl font-bold p-5 ml-5">Project Name</h1>
      <div className="min-h-[35rem] flex  justify-evenly">
        <ColumnTask state={TaskStateEnum.TODO} />
        <ColumnTask state={TaskStateEnum.DOING} />
        <ColumnTask state={TaskStateEnum.DONE} />
      </div>
    </div>
  );
}
