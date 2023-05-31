export interface ITask {
  id: string;
  title: string;
  description: string;
  status: eTaskStatus;
}
export enum eTaskStatus {
  "todo" = "TODO",
  "active" = "ACTIVE",
  "done" = "DONE",
}

export interface ITaskBoard {
  todo?: ITask[];
  active?: ITask[];
  done?: ITask[];
}

export enum eActionType {
  "UPDATE_IS_LOADING" = "UPDATE_IS_LOADING",
  "FETCH_TASKS" = "FETCH_TASKS",
  "UPDATE_TASKS" = "UPDATE_TASKS"
}
