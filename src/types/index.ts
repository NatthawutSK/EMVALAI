export enum TaskStateEnum {
  "TODO",
  "DOING",
  "DONE",
}

export type TypeTask = {
  id: string;
  title: string;
  state: TaskStateEnum;
  desc: string;
  dueDate: string;
  createDate: string;
  assignee: string;
};
