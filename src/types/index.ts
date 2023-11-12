export enum TaskStateEnum {
  "TODO",
  "DOING",
  "DONE",
}

export type TypeTask = {
  _id?: string;
  id: string;
  taskName: string;
  taskDesc: string;
  projectId: string;
  taskStatus: TaskStateEnum;
  userId: string;
  dueDate: string;
  createdDate: string;
  userName: string;
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
