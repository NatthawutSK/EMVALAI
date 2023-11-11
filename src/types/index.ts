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


export type UserType = {
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