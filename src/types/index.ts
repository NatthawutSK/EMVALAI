export enum TaskStateEnum {
  "TODO",
  "DOING",
  "DONE",
}

export type TypeTask = {
  id: string;
  title: string;
  state: TaskStateEnum;
};
